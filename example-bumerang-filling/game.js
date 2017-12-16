const SIZE = 50;

function initialize() {
    setBoardSize(SIZE);
    setSpeed(300);
}

let currentDepth = 0;

function nextStep() {
    for (let i = currentDepth; i < getBoardSize(); ++i) {
        fill(i, currentDepth);
        fill(currentDepth, i);
    }
    ++currentDepth;
}
