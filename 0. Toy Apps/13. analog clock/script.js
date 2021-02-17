const radiansOffset = 90;
const radiansPerSecond = 6;
const updateInterval = 1; // update speed doesnt effect because second will increase after second
let lastRenderTime = 0;
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

window.requestAnimationFrame(update);

function update (currentTime) {
    window.requestAnimationFrame(update);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / updateInterval) return;
    lastRenderTime = currentTime;
    const { hours, minutes, seconds } = getNewTime();
    updateHourHand(hours);
    updateMinuteHand(minutes);
    updateSecondHand(seconds);
}

function getNewTime () {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return { hours, minutes, seconds };
}

function updateHourHand (hours) {
    const radians = (hours * 5 * radiansPerSecond) - radiansOffset;
    hourHand.style.transform = `rotate(${radians}deg)`;
}

function updateMinuteHand (minutes) {
    const radians = (minutes * radiansPerSecond) - radiansOffset;
    minuteHand.style.transform = `rotate(${radians}deg)`;
}

function updateSecondHand (seconds) {
    const radians = (seconds * radiansPerSecond) - radiansOffset;
    secondHand.style.transform = `rotate(${radians}deg)`;
}