const body = document.querySelector('body');
const startButtonClass = 'start-button';
let setIntervalTimerId;
const timerState = '00:00';
let timerSeconds = 0;

function createInput () {
    const input = document.createElement('input');
    input.setAttribute('class', 'minutes-input');
    input.setAttribute('placeholder', 'Enter minutes');
    input.setAttribute('type', 'number');
    appendChild(body, input);
}

function getInputValue () {
    const input = document.querySelector('.minutes-input');
    timerSeconds = input.value * 60;
}

function createStartButton () {
    const startButton = document.createElement('button');
    startButton.classList.add(startButtonClass);
    startButton.innerHTML = "Start Timer";
    startButton.addEventListener('click', function () {
        clearInterval(setIntervalTimerId);
        getInputValue();
        onStartTimer();
    });
    appendChild(body, startButton);
}

function createTimerDiv () {
    const timerDiv = document.createElement('div');
    timerDiv.innerHTML = timerState;
    timerDiv.classList.add('timerDiv');
    appendChild(body, timerDiv);
}

function onStartTimer () {
    setIntervalTimerId = setInterval(() => {
        if (timerSeconds === 0) {
            clearInterval(setIntervalTimerId);
        }
        const timerDiv = document.querySelector('.timerDiv');
        timerDiv.innerHTML = getTimerString(timerSeconds);
        timerSeconds--;
    }, 1000);
}

function getTimerString (timerSeconds) {
    return `${Math.floor(timerSeconds / 60) < 10 ? '0' + Math.floor(timerSeconds / 60) : Math.floor(timerSeconds / 60)}:${Math.floor(timerSeconds % 60) < 10 ? '0' + Math.floor(timerSeconds % 60) : Math.floor(timerSeconds % 60)}`;
}


function appendChild (parent, child) {
    parent.appendChild(child);
}

(function initialize () {
    createInput();
    createStartButton();
    createTimerDiv();
})();