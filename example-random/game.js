const SIZE = 25;

function initialize() {
    setBoardSize(SIZE);
    setSpeed(1000);
}

function nextStep() {

    // clearBoard();

    const x = Math.floor(Math.random() * SIZE);
    const y = Math.floor(Math.random() * SIZE);

    fill(x, y);

}
