const multiply = require('./multiply');

test('Test for multiply function', function () {
    expect(multiply(2)(3)()).toBe(6);
});