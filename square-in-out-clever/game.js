const SIZE = 51;

function initialize() {
  setBoardSize(SIZE);
  setSpeed(500);
}

function drawSquare(level) {
  for (let i = level; i < SIZE - level; i++) {
    fill(i, level);
    fill(SIZE - level - 1, i);
    fill(SIZE - i - 1, SIZE - level - 1);
    fill(level, SIZE - i - 1);
  }
}

let depth = Math.floor(SIZE / 2);

function nextStep() {
  drawSquare(depth);
  --depth;
}
