// new binding
function Person (name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const person1 = new Person('Xavier', 55);

//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi () {
    console.log('hi' + this.name);
  }
};

person.hi();

//explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    console.log('hi' + this.setTimeout);
  }.bind(window)
};

person3.hi();

// arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    var inner = () => {
      console.log('hi ' + this.name);
    };
    return inner();
  }
};

person4.hi();
