const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.
let i = MARGIN;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  stroke("yellow");
  // <<< Add your code here

  i = MARGIN;
  while (i < SIZE) {
    line(MARGIN, i, mouseX, mouseY);
    line(mouseX, mouseY, SIZE-MARGIN, i);
    i += MARGIN;
  }

  stroke("lime")

  i = MARGIN;
  while (i < SIZE) {
    line(i, MARGIN, mouseX, mouseY);
    line(mouseX, mouseY, i, SIZE-MARGIN);
    i += MARGIN;
  }
}
