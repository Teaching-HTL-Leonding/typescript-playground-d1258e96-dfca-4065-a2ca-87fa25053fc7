const SIZE = 400;    // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
let rayColor = 0;// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

}

function draw() {
  background("black");
  strokeWeight(2);
  colorMode(HSB);

  
  let i = MARGIN;

  stroke(rayColor, 100, 100);
  rayColor = (rayColor + 0.5) % 360;

  while (i <= SIZE - MARGIN) {

    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);

    line(i, MARGIN, mouseX, mouseY);
    line(i, height - MARGIN, mouseX, mouseY);

    i += MARGIN;
  }

}
