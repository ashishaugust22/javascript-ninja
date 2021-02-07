console.log('JS works');

const h1 = document.querySelector('h1');
const clientHeight = document.body.clientHeight;
const clientWidth = document.body.clientWidth;
let xOperation = "plus";
let yOperation = "plus";
const speed = 2;

function getX (x) {
    // console.log(x, clientWidth);
    if (x + 150 > clientWidth && xOperation === 'plus') {
        console.log('here');
        xOperation = 'minus';
    } else if (x < 0 && xOperation === 'minus') {
        xOperation = 'plus';
    }
    if (xOperation === 'plus') {
        x += speed;
    } else {
        x -= speed;
    }
    return x;
}

function getY (y) {
    if (y + 69 > clientHeight && yOperation === 'plus') {
        yOperation = 'minus';
    } else if (y < 0 && yOperation === 'minus') {
        yOperation = 'plus';
    }
    if (yOperation === 'plus') {
        y += speed;
    } else {
        y -= speed;
    }
    return y;
}

function startAnimation (x, y) {
    function animate () {
        x = getX(x);
        y = getY(y);
        h1.style.transform = `
        translateX(${x}px) 
        translateY(${y}px)`;
        h1.textContent = `(${x}, ${y})`;
        requestAnimationFrame(animate);
    }
    animate();
}

startAnimation(0, 0);