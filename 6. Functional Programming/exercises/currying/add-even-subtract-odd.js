const funFunction = (a) => (b) => {
    if (b !== undefined) {
        const result = (a % 2 === 0 ? a : -a) + (b % 2 === 0 ? b : -b);
        return funFunction(result);
    } else {
        return a;
    }
};

module.exports = funFunction;