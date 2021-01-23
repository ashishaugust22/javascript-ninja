// idea is to prevent view from initializing again n again

let view;
function initialize() {
    let called = 0;
    return function () {
        if (called > 0) {
            return;
        } else {
            view = '🏔';
            called = true;
            console.log('view has been set!');
        }

    };
}

const start = initialize();
start();
start();
start();
console.log(view);