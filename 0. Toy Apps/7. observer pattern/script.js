const dog = document.querySelector('.dog');
let timerId;

let replayValues = [];


document.addEventListener('mousemove', function (e) {
    replayValues.push({ x: e.clientX, y: e.clientY });
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
        function animate () {
            if (!replayValues.length) return;
            x = replayValues[0].x;
            y = replayValues[0].y;
            dog.style.left = x + 'px';
            dog.style.top = y + 'px';
            replayValues.shift();
            if (replayValues.length) {
                requestAnimationFrame(animate);
            }
        }
        animate();
    }, 300);
});