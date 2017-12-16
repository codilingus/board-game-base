window.addEventListener('keydown', this._onKeyDown, false);

let canvas = document.getElementById('c').getContext('2d')
canvas.strokeStyle = '#e1e1e1';

const canvasPixels = 512;
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
    _draw();
}

function _createNewBoard() {
    cells = [];
    for (var i = 0; i < boardSize; i++) {
        cells[i] = [];
        for (var j = 0; j < boardSize; j++) {
            cells[i][j] = 0;
        }
    }
}

function _draw() {
    canvas.clearRect(0, 0, canvasPixels, canvasPixels);
    cells.forEach(function (row, x) {
        row.forEach(function (cell, y) {
            canvas.beginPath();
            canvas.rect(x * cellPixels, y * cellPixels, cellPixels, cellPixels);
            if (cell) {
                canvas.fillStyle = cell;
                canvas.fill();
            } else {
                canvas.stroke();
            }
        });
    });
    keyDownInLastStep = false;
    setTimeout(function () { nextStep(); _draw(); }, stepSpeed);
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
