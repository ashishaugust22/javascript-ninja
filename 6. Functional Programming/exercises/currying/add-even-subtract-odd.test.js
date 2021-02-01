const funFunction = require('./add-even-subtract-odd');

test('Testing fun function', () => {
    expect(funFunction(4)(2)(1)()).toBe(5);
});

test('Testing fun function', () => {
    expect(funFunction(4)(2)()).toBe(6);
});