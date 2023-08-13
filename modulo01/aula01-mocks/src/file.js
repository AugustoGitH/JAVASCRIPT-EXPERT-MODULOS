const { readFile } = require("fs/promises");
const { error } = require("./constants");

const DEFAULT_OPTIONS = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};

class File {
  static async csvToJSON(filePath) {
    const content = await readFile(filePath, "utf8");

    const validation = this.isValid(content);

    if (!validation.valid) throw new Error(validation.error);

    const result = this.parseCSVToJSON(content);
    return result;
  }

  static isValid(csvString, options = DEFAULT_OPTIONS) {
    const [header, ...fileWithoutHeader] = csvString.split(/\r?\n/);
    const fieldsHeader = header.split(",");

    const isHeaderValid = options.fields.every((field) =>
      fieldsHeader.includes(field)
    );
    if (
      !fileWithoutHeader.length ||
      fileWithoutHeader.length > options.maxLines
    ) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }
    if (!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }
    return {
      valid: true,
    };
  }
  static parseCSVToJSON(csvString) {
    const [headers, ...users] = csvString.trim().split(/\r?\n/);

    const fieldsHeader = headers.split(",");

    const result = users.map((userString) => {
      const fields = userString.split(",");

      const userParse = Object.fromEntries(
        Object.entries(fieldsHeader).map(([, field], index) => {
          const valueString = fields[index].trim();
          const valueParse = !isNaN(Number(valueString))
            ? Number(valueString)
            : valueString;
          return [field, valueParse];
        })
      );

      return userParse;
    });

    return result;
  }
}
module.exports = File;

// const { readFile } = require("fs/promises");
// const { error } = require("./constants");

// const DEFAULT_OPTIONS = {
//   maxLines: 3,
//   fields: ["id", "name", "profession", "age"],
// };

// const File = () => ({
//   async csvToJSON(filePath) {
//     const content = await readFile(filePath, "utf8");
//     const validation = this.isValid(content);

//     if (!validation.valid) {
//       throw new Error(validation.error);
//     }

//     return this.parseCSVToJSON(content);
//   },

//   parseCSVToJSON(csvString) {
//     const [headers, ...users] = csvString.trim().split(/\r?\n/);

//     const fieldsHeader = headers.split(",");

//     const result = users.map((userString) => {
//       const fields = userString.split(",");

//       const userParse = Object.fromEntries(
//         Object.entries(fieldsHeader).map(([, field], index) => {
//           const valueString = fields[index].trim();
//           const valueParse = !isNaN(Number(valueString))
//             ? Number(valueString)
//             : valueString;
//           return [field, valueParse];
//         })
//       );

//       return userParse;
//     });

//     return result;
//   },

//   isValid(csvString, options = DEFAULT_OPTIONS) {
//     // para ver o conteudo do arquivo
//     // fs.readFIleSync("./mocks/threeItems-valid.csv", "utf8")
//     const [headers, ...fileWithoutHeader] = csvString.trim().split(/\r?\n/);

//     const fieldsHeader = headers.split(",");

//     const isHeaderValid = options.fields.every((field) =>
//       fieldsHeader.includes(field)
//     );

//     if (!isHeaderValid) {
//       return {
//         error: error.FILE_FIELDS_ERROR_MESSAGE,
//         valid: false,
//       };
//     }

//     if (
//       !fileWithoutHeader.length ||
//       fileWithoutHeader.length > options.maxLines
//     ) {
//       return {
//         error: error.FILE_LENGTH_ERROR_MESSAGE,
//         valid: false,
//       };
//     }

//     return {
//       valid: true,
//     };
//   },
// });

// module.exports = File;
