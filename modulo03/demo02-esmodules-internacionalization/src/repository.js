import { writeFile, readFile } from "fs/promises";
import path from "path";

export const save = async (data) => {
  // não tem __filename, __dirname
  const databaseFilePath = path.resolve(
    new URL("../database.json", import.meta.url).pathname
  );
  const currentDate = JSON.parse(await readFile(databaseFilePath));
  currentDate.push(data);
  await writeFile(databaseFilePath, JSON.stringify(currentDate));
};
