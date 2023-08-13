const File = require("./src/file");
const { error } = require("./src/constants");
const assert = require("assert");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);

    await assert.rejects(result, expected);
  }
  {
    const filePath = "./mocks/invalid-header.csv";
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);

    await assert.rejects(result, expected);
  }
  {
    const filePath = "./mocks/fiveItems-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);

    await assert.rejects(result, expected);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const expected = [
      {
        id: 1,
        name: "xuxa da silva",
        profession: "developer",
        age: 21,
      },
      {
        id: 2,
        name: "matheus da costa",
        profession: "developer",
        age: 29,
      },
      {
        id: 3,
        name: "Augusto Westphal",
        profession: "developer",
        age: 34,
      },
    ];
    const result = await File.csvToJSON(filePath);

    assert.deepEqual(result, expected);
  }
})();

// const { error } = require("./src/constants");
// const File = require("./src/file");
// const assert = require("assert");

// (async () => {
//   // variaveis criadas nesse bloco, só são validas durante sua execussão
//   {
//     const filePath = "./mocks/emptyFile-invalid.csv";
//     const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
//     const result = File().csvToJSON(filePath);

//     await assert.rejects(result, expected);
//   }

//   {
//     const filePath = "./mocks/invalid-header.csv";
//     const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
//     const result = File().csvToJSON(filePath);

//     await assert.rejects(result, expected);
//   }

//   {
//     const filePath = "./mocks/fiveItems-invalid.csv";
//     const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
//     const result = File().csvToJSON(filePath);

//     await assert.rejects(result, expected);
//   }
//   //   id,name,profession,age
//   // 1,xuxa da silva, developer, 21
//   // 2,matheus da costa, developer, 29
//   // 3,Augusto Westphal, developer, 34

//   {
//     const filePath = "./mocks/threeItems-valid.csv";
//     const expected = [
//       {
//         id: 1,
//         name: "xuxa da silva",
//         profession: "developer",
//         age: 21,
//       },
//       {
//         id: 2,
//         name: "matheus da costa",
//         profession: "developer",
//         age: 29,
//       },
//       {
//         id: 3,
//         name: "Augusto Westphal",
//         profession: "developer",
//         age: 34,
//       },
//     ];
//     const result = File().csvToJSON(filePath);

//     await assert.rejects(result, expected);
//   }
// })();
