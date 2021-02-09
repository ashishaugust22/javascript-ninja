const dog = document.querySelector('.dog');
let timerId;

let replayValues = [];


document.addEventListener('mousemove', function (e) {
    replayValues.push({ x: e.clientX, y: e.clientY });
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
        let count = 0;
        function animate () {
            if (!replayValues.length) return;
            x = replayValues[count].x;
            y = replayValues[count].y;
            dog.style.left = x + 'px';
            dog.style.top = y + 'px';
            count++;
            if (count < replayValues.length) {
                requestAnimationFrame(animate);
            } else {
                count = 0;
                replayValues = [];
            }
        }
        animate();
    }, 300);
});