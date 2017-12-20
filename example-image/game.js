const APPLE_IMAGE_URL = 'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg';

function initialize() {
  setBoardSize(10);
}

function nextStep() {
  fill(4, 4);
  drawImage(APPLE_IMAGE_URL, 6, 6);
  drawImage(APPLE_IMAGE_URL, 1, 1, 2, 2);
}
