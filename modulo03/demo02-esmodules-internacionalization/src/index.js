import database from "../database.json" assert { type: "json" };
import Person from "./person.js";
import { save } from "./repository.js";
import TerminalController from "./terminalController.js";

const DEFAULT_LANG = "pt-br";

const terminalController = new TerminalController();

const STOP_TERM = ":q";

terminalController.initializeTerminal(database, DEFAULT_LANG);

const mainLoop = async () => {
  try {
    const answer = await terminalController.question("What??");
    if (answer === STOP_TERM) {
      terminalController.closeTerminal();
      console.log("Process finished!");
      return;
    }
    const person = Person.generateInstanceFromString(answer);
    terminalController.updateTable(person.formatted(DEFAULT_LANG));
    await save();
    return mainLoop(person);
  } catch (error) {
    console.error("DEU MERDA**", error);
    return mainLoop();
  }
};

await mainLoop();
