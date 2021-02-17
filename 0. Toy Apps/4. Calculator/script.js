const calculatorDisplay = document.querySelector('h1');
const buttons = document.querySelectorAll('button');

function sendNumberValue (value) {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? value : displayValue + value;
}

function sendOperatorValue (value) {
    console.log(value);
}

function sendDecimalValue (value) {
    console.log(value);
}

function sendClearValue (value) {
    console.log(value);
}

buttons.forEach(button => {
    if (button.classList.length === 0)
        button.addEventListener('click', () => sendNumberValue(button.value));
    else if (button.classList.contains('operator'))
        button.addEventListener('click', () => sendOperatorValue(button.value));
    else if (button.classList.contains('decimal'))
        button.addEventListener('click', () => sendOperatorValue(button.value));
    else if (button.classList.contains('clear'))
        button.addEventListener('click', () => sendClearValue(button.value));
});


