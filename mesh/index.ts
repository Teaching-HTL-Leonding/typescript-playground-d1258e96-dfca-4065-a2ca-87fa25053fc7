const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  colorMode(HSB)

  strokeWeight(1);

  for (let j = MARGIN; j < SIZE; j += MARGIN) {
    stroke(j-MARGIN, 100, 100)
    for (let i = MARGIN; i < SIZE; i += MARGIN) {
      line(SIZE-MARGIN , i, MARGIN, j);
    }
    
  }
}
