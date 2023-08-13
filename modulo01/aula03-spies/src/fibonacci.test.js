const assert = require("assert");

// Fibonacci: o proximo número da sequência é sempre a soma dos anteriores
// input: 3
// 0, 1, 1

//input: 5
// 0, 1, 1, 2, 3

const { createSandbox } = require("sinon");
const Fibonacci = require("./fibonacci");
const sinon = createSandbox();

const fibonacci = Fibonacci();

(async () => {
  {
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    for (const sequencia of fibonacci.execute(5)) {
    }
    const expectedCallCount = 6;
    assert.strictEqual(spy.callCount, expectedCallCount);
    const { args } = spy.getCall(2);
    const expectedParams = [3, 1, 2];
    assert.deepStrictEqual(args, expectedParams, "Os arrays não são iguais!");
  }
})();
