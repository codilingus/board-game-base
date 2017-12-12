const DEFAULT_CELL_COLOR = 'cadetblue';

const KEY_RIGHT = 'RIGHT';
const KEY_LEFT = 'LEFT';
const KEY_UP = 'UP';
const KEY_DOWN = 'DOWN';
const KEY_EMPTY = 'EMPTY';

function getRecentKey() {
    return currentKey;
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
    if (x >= boardSize || y >= boardSize) {
        console.error('Provided coordinates are bigger than board size!');
    }
    cells[x][y] = color;
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
        createNewBoard();
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