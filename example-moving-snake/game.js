const SIZE = 20;
let snake = [[5, 5], [6, 5], [7, 5]];

function initialize() {
    setBoardSize(SIZE);
}

function drawSnake() {
    for (let i = 0; i < snake.length; ++i) {
        fill(snake[i][0], snake[i][1]);
    }
}

function nextStep() {
    for (let i = 0; i < snake.length; ++i) {
        snake[i][0]++;
        if (snake[i][0] === SIZE) {
            snake[i][0] = 0;
        }
    }

    clearBoard();
    drawSnake();
}