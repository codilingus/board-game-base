let currentX;
let currentY;

function initialize() {
    currentX = getBoardSize() / 2;
    currentY = getBoardSize() / 2;

    setSpeed(20);
    fill(currentX, currentY, 'red');
}

function nextStep() {
    let lastKey = getLastStepKey();

    if(lastKey != KEY_EMPTY) {
        let color;
        if(lastKey === KEY_LEFT) {
            color = 'green';
            currentX -= 1;
        } else if (lastKey === KEY_RIGHT) {
            color = 'black';
            currentX += 1;
        } else if (lastKey === KEY_UP) {
            color = 'blue';
            currentY -= 1;
        } else if (lastKey === KEY_DOWN) {
            color = 'yellow';
            currentY += 1;
        }

        fill(currentX, currentY, color);
    }
}