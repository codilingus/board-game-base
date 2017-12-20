const DEFAULT_CELL_COLOR = 'cadetblue';

const KEY_RIGHT = 'RIGHT';
const KEY_LEFT = 'LEFT';
const KEY_UP = 'UP';
const KEY_DOWN = 'DOWN';
const KEY_EMPTY = 'EMPTY';

function getRecentKey() {
  return currentKey;
}

function clearRecentKey() {
  currentKey = KEY_EMPTY;
}

function getLastStepKey() {
  if (keyDownInLastStep) {
    return getRecentKey();
  }
  return KEY_EMPTY;
}

function clear(x, y) {
  cells[x][y] = undefined;
}

function fill(x, y, color = DEFAULT_CELL_COLOR) {
  if (x >= boardSize || y >= boardSize || x < 0 || y < 0) {
    console.error('Provided coordinates are bigger than board size!');
    return;
  }

  cells[x][y] = {
    color,
    type: 'fill'
  };
}

function drawImage(url, x, y, width = 1, height = 1) {
  const outOfBoundaries = [
    x >= boardSize,
    y >= boardSize,
    x < 0,
    y < 0,
    x + width >= boardSize,
    y + height >= boardSize
  ].some(Boolean);

  if (outOfBoundaries) {
    console.error('Provided coordinates are bigger than board size!');
    return;
  }

  const cell = cells[x][y];

  if (cell && cell.type === 'image' && cell.image.src === url) {
    return;
  }

  const image = new Image();
  image.src = url;

  cells[x][y] = {
    image,
    width,
    height,
    type: 'image'
  };
} 

function isFilled(x, y) {
  return cells[x] && cells[x][y];
}

function clearBoard() {
  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      cells[i][j] = 0;
    }
  }
}

function setBoardSize(newBoardSize) {
  if (newBoardSize < canvasPixels) {
    boardSize = newBoardSize;
    cellPixels = canvasPixels / boardSize;
    _createNewBoard();
  } else {
    console.error('Provided board size is invalid!');
  }
}

function getBoardSize() {
  return boardSize;
}

function setSpeed(speed) {
  stepSpeed = speed;
}