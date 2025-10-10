// <<< ADD CONSTANTS HERE (if you need them)

function setup() {
  // <<< ADD YOUR CODE HERE
  createCanvas(600, 600)
  background("cyan")

  // left arc
  angleMode(DEGREES);
  stroke("green")
  strokeWeight(20)
  noFill()
  arc(60, 290, 300, 300, -50, 50)

  noStroke()
  strokeWeight(0)
  //left flower
  fill("violet")
  circle(135-44, 110-6.9, 70);
  circle(155, 100, 70);
  circle(135-44, 165, 70);
  circle(145, 145+ 47.5, 70);
  circle(135+50, 150, 70);
  fill("yellow")
  circle(135, 145, 65);

  //right arc
  angleMode(DEGREES);
  stroke("green")
  strokeWeight(20)
  noFill()
  arc(275, 300, 300, 300, -45, 45)

  //right flower
  stroke("darkred")
  strokeWeight(2)
  fill("red")
  circle(340, 100, 80);
  circle(295, 150, 80);
  circle(340, 150+50, 80);
  circle(385, 150, 80);
  noStroke()
  fill("orange")
  circle(340, 150, 65);

  fill("lightgreen")
  rect(0, 400, 700, 300)
}
