// const assert = require("assert");

// const obj = {};
// const arr = [];
// const fn = () => {};

// console.log("new Object() is {}?", new Object().__proto__ === {}.__proto__);
// assert.deepStrictEqual(new Object().__proto__, {}.__proto__);

// // __proto__ é a referência do objeto que possui as propriedades nele
// console.log(
//   "obj.__proto__ === Object.prototype",
//   obj.__proto__ === Object.prototype
// );
// assert.deepStrictEqual(obj.__proto__, Object.prototype);

// console.log(
//   "arr.__proto__ === Array.prototype",
//   arr.__proto__ === Array.prototype
// );
// assert.deepStrictEqual(arr.__proto__, Array.prototype);

// console.log(
//   "fn.__proto__ === Function.prototype",
//   fn.__proto__ === Function.prototype
// );
// assert.deepStrictEqual(fn.__proto__, Function.prototype);

// // o __proto__ de Object.prototype é null
// console.log(
//   "obj.__proto__.__proto__ === null",
//   obj.__proto__.__proto__ === null
// );
// assert.deepStrictEqual(obj.__proto__.__proto__, null);

// // ---------------

const obj = {
  a: 1,
  b: 2,
};

const obj1 = Object.create(obj);

obj.b = 10;

console.log(obj, obj1.a);
