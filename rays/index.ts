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

  // <<< Add your code here

  for (i = MARGIN; i < SIZE; i += MARGIN) {

    stroke("yellow");
    line(SIZE + MARGIN - SIZE, i, mouseX, mouseY);
    line(SIZE - MARGIN, i, mouseX, mouseY);

    stroke("lime")
    line(i, MARGIN, mouseX, mouseY);
    line(mouseX, mouseY, i, SIZE - MARGIN);
  }





}

