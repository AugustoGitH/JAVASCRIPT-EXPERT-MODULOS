import { describe, it } from "mocha";
import chai, { expect } from "chai";
import Person from "../src/person.js";

describe("Person", () => {
  it("shold return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "1 Bike,Carro 20000 2020-03-03 1999-03-03"
    );
    const expected = {
      from: "2020-03-03",
      to: "1999-03-03",
      vehicles: ["Bike", "Carro"],
      id: "1",
      kmTraveled: "20000",
    };

    expect(expected).to.be.deep.equal(person);
  });

  it("should format values", () => {
    const person = new Person({
      from: "2020-03-03",
      to: "1999-03-03",
      vehicles: ["Bike", "Carro"],
      id: "1",
      kmTraveled: "20000",
    });
    const result = person.formatted("pt-BR");

    const expected = {
      from: "03 de março de 2020",
      to: "03 de março de 1999",
      vehicles: "Bike e Carro",
      id: 1,
      kmTraveled: "20.000 km",
    };

    expect(expected).to.be.deep.equal(result);
  });
});
