// IIFE 
// module pattern

const variable = (function () {
    const privateVariable = "Ashish";
    const privateFunction = function () {
        console.log(privateVariable);
    };
    return {
        funnyFunction: privateFunction
    };
})();



/*
now we can use it in other files
without polluting the global namespace
*/