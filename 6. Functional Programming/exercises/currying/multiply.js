const multiply = (a) => (b) => ((b !== undefined) ? multiply(a * b) : a);

module.exports = multiply;