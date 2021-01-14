
// use cases of this keyword
// 1. It give access to sibling methods;
// 2. It give access to sibling member variables;
// 3. this acts as a placeholder (function of which object called)
/* 4. this keyword is actually dynamically scoped (how it is called)
    else all other are dynamically scoped
*/


// =====================================================

const obj = {
    name: "Billy",
    sing: function () {
        return 'lalala ' + this.name;
    }
};

obj.sing();

/*
    so we can say this always refers to whatever on
    the left of '.'
*/


// =====================================================

const obj = {
    name: "Billy",
    sing: function () {
        return 'lalala ' + this.name;
    },
    singAgain: function () {
        return this.sing() + '!';
    }
};

obj.singAgain();

// =====================================================



function importantPerson() {
    console.log(this.name);
}


const obj1 = {
    name: 'sunny',
    importantPerson: importantPerson
};


const obj2 = {
    name: 'betty',
    importantPerson: importantPerson
};


// =====================================================

// very important 

const a = function () {
    console.log("a", this);
    const b = function () {
        console.log('b', this);
        const c = {
            hi: function () {
                console.log('c', this);
            }
        };
        c.hi();
    };
    b();
};

a();

// window.a(b(c.hi()))

// this works only with objects
// ask yourself who called the function a.someFunction();
// it matters how the function is called



// =====================================================


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