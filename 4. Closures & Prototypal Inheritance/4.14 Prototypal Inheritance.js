// Exercise: Prototypal Inheritance with this
// How would you be able to create your own .bind() method using call or apply.

// Hint:

// Function.prototype.bind = function(){
// }

// See the attached solution when you are ready!



Function.prototype.bind = function (whoIsCallingMe) {
    const self = this;
    return function () {
        return self.apply(whoIsCallingMe, arguments);
    };
};