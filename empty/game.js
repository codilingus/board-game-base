const SIZE = 20;
let snake;

function initialize() {
  setBoardSize(SIZE);
  resetGame();
}

function drawSnake() {
  for (let i = 0; i < snake.length; ++i) {
    fill(snake[i][0], snake[i][1]);
  }
}

function snakeMovement() {
  let lastKey = getRecentKey();

  if (lastKey !== KEY_EMPTY) {

    let newHead;

    if (lastKey === KEY_RIGHT) {

      newHead = [snake[0][0] + 1, snake[0][1]];

    }
    if (lastKey === KEY_LEFT) {

      newHead = [snake[0][0] - 1, snake[0][1]];

    }
    if (lastKey === KEY_DOWN) {

      newHead = [snake[0][0], snake[0][1] + 1];

    }
    if (lastKey === KEY_UP) {

      newHead = [snake[0][0], snake[0][1] - 1];

    }
    snake.unshift(newHead);
    snake = snake.slice(0, -1);

  }
}

function checkBoardCollision() {
  if (snake[0][0] >= SIZE || snake[0][1] >= SIZE || snake[0][0] < 0 || snake[0][1] < 0) {
    return true;
  } else {
    return false;
  }
}

function resetGame() {
  snake = [
    [5, 5],
    [6, 5],
    [7, 5]
  ];

  clearRecentKey();
}


function nextStep() {
  fill(5, 5, 'red');
  alert('dupa');
  fill(5, 5);

  // clearBoard();
  // snakeMovement();

  // if (checkBoardCollision()) {
  //   alert('Koniec gry');
  //   resetGame();
  // } else {
  //   drawSnake();
  // }
}
