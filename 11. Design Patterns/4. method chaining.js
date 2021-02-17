/*
    example from jquey
    $('h1).fadeOut().fadeIn().addClass('some-class-name');

    benefits
    1. multiple actions in one line

    4 => 3 => 3 => conitnuously returns and transform

    sort is the real world example
*/


// Using function prototype approch
function MoneyDispenser (amount) {
    this.amount = amount;
}

MoneyDispenser.prototype = {
    compute: function (denomination) {
        const numberOfDenomination = Math.floor(this.amount / denomination);
        this.amount -= numberOfDenomination * denomination;
        console.log(`Dispensing ${numberOfDenomination}x${denomination}, remaining $${this.amount}`);
        return this;
    }
};

const dispenser = new MoneyDispenser(786);

dispenser.compute(100).compute(10);




// using ES6 class approch

class MoneyDispenser {
    constructor (amount) {
        this.amount = amount;
    }
    compute (denomination) {
        const numberOfDenomination = Math.floor(this.amount / denomination);
        this.amount -= numberOfDenomination * denomination;
        console.log(`Dispensing ${numberOfDenomination}x${denomination}, remaining $${this.amount}`);
        return this;
    }
}

const dispenser = new MoneyDispenser(786);

dispenser.compute(100).compute(10);
