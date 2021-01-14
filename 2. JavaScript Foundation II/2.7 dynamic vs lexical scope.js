
/*
    1. by default functions are dynamically scoped
    2. so arrow function comes to rescue and give lexical scoping
    3. before the arrow function call, apply, bind
*/

// =====================================================

// dynamic scoping
const obj = {
    name: 'billy',
    sing: function () {
        console.log('a', this);
        var anotherFunc = function () {
            console.log('b', this);
        };
        anotherFunc();
    }
};

obj.sing();

// obj.sing(anotherFunc())

// =====================================================

// lexical scoping
const obj = {
    name: 'billy',
    sing: function () {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this);
        };
        return anotherFunc.bind(this);
    }
};

obj.sing()();


// =====================================================

// lexical scoping
const obj = {
    name: 'billy',
    sing: function () {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this);
        };
        anotherFunc();
    }
};

obj.sing();

// =====================================================

// lexical scoping
const obj = {
    name: 'billy',
    sing: function () {
        console.log('a', this);
        var self = this;
        var anotherFunc = () => {
            console.log('b', self);
        };
        anotherFunc();
    }
};

obj.sing();

