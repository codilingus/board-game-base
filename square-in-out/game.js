const SIZE = 51;
const INITIAL_DEPTH = Math.floor(SIZE / 2);

function initialize() {
  setBoardSize(SIZE);
  setSpeed(500);
}

function drawSquare(level) {
  for (let i = level; i < SIZE - level - 1; i++) {
    fill(i + 1, level);
    fill(level, i);
    fill(SIZE - level - 1, SIZE - i - 1);
    fill(SIZE - i - 2, SIZE - level - 1);
  }
}

let depth = INITIAL_DEPTH;

function nextStep() {
  if (SIZE % 2 === 1 && depth === INITIAL_DEPTH) {
    fill(depth, depth);
  } else if (depth >= 0) {
    drawSquare(depth);
  }
  --depth;
}
