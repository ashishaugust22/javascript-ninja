console.log('JS works');

const h1 = document.querySelector('h1');

function startAnimation (show) {
    function animate () {
        show = !show;
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        const second = new Date().getSeconds();
        h1.innerHTML = `${hour} <span class="${show ? '' : 'hide'}">:</span> ${minute} <span class="${show ? '' : 'hide'}">:</span> ${second}`;
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 1000);
    }
    animate();
}

startAnimation(true);