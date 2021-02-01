const sum = require("./currying");
const sum1 = require("./currying");

test('Testing currying sum', function () {
    expect(sum(1)(2)()).toBe(3);
});

test('Testing currying sum with arrow function', function () {
    expect(sum1(1)(2)()).toBe(3);
});