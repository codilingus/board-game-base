const SIZE = 20;

function initialize() {
  setBoardSize(SIZE);
}

function nextStep() {
  const x = Math.floor(Math.random() * SIZE);
  const y = Math.floor(Math.random() * SIZE);

  fill(x, y);
}
