const SIZE = 25;

function initialize() {
    setBoardSize(SIZE);
}

let currentX = 0;
let currentY = 0;

function nextStep() {

    clearBoard();

    if (currentY % 2 === 0) {
        currentX++;
    } else {
        currentX--;
    }

    if (currentX >= SIZE) {
        currentY++;
        currentX--;
    } else if (currentX < 0) {
        currentX++;
        currentY++;
    }

}
