function setup() {
  const num = Math.floor(random(0, 64));
  createCanvas(540, 300)
  background("black")

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  noFill()
  stroke("yellow")
  rect(60, 100, 50, 70)
  rect(130, 100, 50, 70)
  rect(200, 100, 50, 70)
  rect(270, 100, 50, 70)
  rect(340, 100, 50, 70)
  rect(410, 100, 50, 70)

  const digit1 = num % 2
  const digit2 = floor(num / 2) % 2
  const digit3 = floor(num / 4) % 2
  const digit4 = floor(num / 8) % 2
  const digit5 = floor(num / 16) % 2
  const digit6 = floor(num / 32) % 2

  fill("yellow")
  textSize(50)
  text(digit6, width / 6.5, height / 2.1)
  text(digit5, width / 3.5, height / 2.1)
  text(digit4, width / 2.4, height / 2.1)
  text(digit3, width / 1.84, height / 2.1)
  text(digit2, width / 1.47, height / 2.1)
  text(digit1, width / 1.25, height / 2.1)
}
