// there is not time to explain this, just believe that it's required
const oldAlert = window.alert;
window.alert =(...args) => setTimeout(() => oldAlert(...args), 0);

window.addEventListener('keydown', this._onKeyDown, false);

const canvas = document.getElementById('c').getContext('2d');
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
    cells = Array.from(
        { length: boardSize },
        () => new Array(boardSize).fill(null)
    );
}

function _draw() {
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
                if(image.complete) {
                    canvas.drawImage(image, cellX, cellY, width * cellPixels, height * cellPixels);
                }
            }

            canvas.stroke();
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
