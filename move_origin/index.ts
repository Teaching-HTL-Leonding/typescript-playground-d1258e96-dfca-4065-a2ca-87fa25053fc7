function setup() {
  const SIZE = 400;
  const CIRCLE_DIAMETER = 50;

  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(3);
  stroke("yellow")
  noFill();

  // Draw a circle at 0/0
  circle(0, 0, CIRCLE_DIAMETER);

  // We want to draw a circle at 50/0. However, we do NOT
  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)

  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)

  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)

  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)

  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)

  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)

  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)

  translate(CIRCLE_DIAMETER, CIRCLE_DIAMETER);
  circle(0, 0, CIRCLE_DIAMETER)
}