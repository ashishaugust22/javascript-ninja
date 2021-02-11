// one to many relationship
// list of subscribers

// event handling system

// TODO: little impcomplete

function RelpaySubject () {
    this.observers = [];
    this.values = [];
}

RelpaySubject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (fn) {
        this.observers = this.observers.filter(observer => observer !== fn);
    },
    fire: function (value) {
        this.values.push(value);
        this.observers.forEach(observer => observer.call({}, this.values));
    }
};

const observable = new RelpaySubject();

const observer1 = (e) => console.log('Observer1 recieved event', e);
const observer2 = (e) => console.log('Observer2 recieved event', e);

observable.subscribe(observer1);
observable.subscribe(observer2);

observable.fire(1);
observable.fire(2);
observable.fire(3);