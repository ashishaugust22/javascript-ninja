const funcFunction = require('./add-even-subtract-odd');

test('Testing fun function', () => {
    expect(funcFunction(4)(2)()).toBe(6);
});