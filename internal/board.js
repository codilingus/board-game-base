window.addEventListener('keydown', this._onKeyDown, false);

const canvas = document.getElementById('boardCanvas').getContext('2d');
canvas.strokeStyle = '#e1e1e1';

canvas.canvas.width = 512;
canvas.canvas.height = 512;

const canvasPixels = 1024;
let cellPixels = 16;
let boardSize = canvasPixels / cellPixels;

let stepSpeed = 70;
let currentKey = 'EMPTY';
let keyDownInLastStep = false;

let cells = [];

init();

function init() {
    _createNewBoard();
    initialize();
    _refreshBoard();
    _step();
}

function _step() {
    setTimeout(function () {
        nextStep();
        keyDownInLastStep = false;
        _step();
    }, stepSpeed);
}

function _createNewBoard() {
    cells = Array.from(
        { length: boardSize },
        () => new Array(boardSize).fill(null)
    );

    _refreshBoard();
}

function _refreshBoard() {
    canvas.clearRect(0, 0, canvasPixels, canvasPixels);
    cells.forEach(function (row, x) {
        row.forEach(function (cell, y) {
            const cellX = x * cellPixels;
            const cellY = y * cellPixels;

            canvas.beginPath();
            canvas.rect(cellX, cellY, cellPixels, cellPixels);

            if (cell && cell.type === 'fill') {
                canvas.fillStyle = cell.color;
                canvas.fill();
            }

            if (cell && cell.type === 'image') {
                const { image, width, height } = cell;
                if (image.complete) {
                    canvas.drawImage(image, cellX, cellY, width * cellPixels, height * cellPixels);
                }
            }

            canvas.stroke();
        });
    });
}

function _onKeyDown(e) {
    switch (e.keyCode) {
        case 40:
            currentKey = 'DOWN';
            break;
        case 38:
            currentKey = 'UP';
            break;
        case 37:
            currentKey = 'LEFT';
            break;
        case 39:
            currentKey = 'RIGHT';
            break;
        default:
            currentKey = 'RIGHT';
    }
    keyDownInLastStep = true;
}
