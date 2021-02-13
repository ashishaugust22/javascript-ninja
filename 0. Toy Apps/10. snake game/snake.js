export const SNAKE_SPEED = 1; // number of times snake move per second

const snakeBody = [
    { x: 10, y: 11 }, // this is the head
    { x: 11, y: 11 },
    { x: 12, y: 11 },
    { x: 13, y: 11 },
    { x: 14, y: 11 },
];

export function update () {
    console.log('Updating...');
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += 0; // this is head
    snakeBody[0].y += 1; // this is head
}

export function draw (gameBoard) {
    console.log('Drawing...', gameBoard);
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        gameBoard.appendChild(snakeElement);
    });

}