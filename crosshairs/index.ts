function setup() {
  createCanvas(300, 300);
}

function mouseMoved() {
  background("lightblue")
  stroke("red")
  strokeWeight(2)
  noFill()
  circle(mouseX, mouseY, 40)
  circle(mouseX, mouseY, 20)
  line(mouseX-25, mouseY, mouseX+25, mouseY)
  line(mouseX, mouseY-25, mouseX, mouseY+25)

  // Add your code here
}