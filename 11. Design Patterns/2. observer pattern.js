// one to many relationship
// list of subscribers

// event handling system

function Subject () {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(observer => observer !== fn);
    },
    fire: function () {
        this.observers.forEach(observer => observer.call());
    }
};

const observable = new Subject();

const observer1 = () => console.log('Observer1 recieved event');
const observer2 = () => console.log('Observer2 recieved event');

observable.subscribe(observer1);
observable.subscribe(observer2);

observable.fire();