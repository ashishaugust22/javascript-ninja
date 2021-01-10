

function subtract(num) {
    return num - 2;
}


function calculate() {
    const sumTotal = 4 + 5;
    return subtract(sumTotal);
}


debugger;  // use debugger to see call stack
calculate();;



            // subtract
        // calculate
    // (anonymous)    ====> Global Execution Context (one who triggers execution)
// callStack


// above diag is known as stack frame (LIFO)