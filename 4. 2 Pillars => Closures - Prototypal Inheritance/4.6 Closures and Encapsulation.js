// Closures provide encapsulation

// Exercise:
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    };

    setInterval(passTime, 1000);
    return { totalPeaceTime };
    // this return comes with closure or reference
    // so whatever you return only be accessed from outside
    // other are collected by garbage collector
};

const ww3 = makeNuclearButton();
ww3.totalPeaceTime();

ww3.launch();
/*
launch will throw undefined error
launch is encapsulated
*/