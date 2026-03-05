let n: number; // Zufallszahl für gefärbte Kreise
const cols = 10;
const rows = 10;
const size = 40;

function setup() {
  createCanvas(500, 500);

  n = floor(random(0, 101)); // Zufallszahl von 0 bis 100

  textAlign(CENTER);
  textSize(24);

  background(255);

  // Titel anzeigen
   text("Random number: " + n + "/100", width / 2, 40);

  // Ursprung zum ersten Kreis verschieben
  translate(50, 80);

  // 10x10 Kreise zeichnen
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const index = y * cols + x;

      push();
      translate(x * size, y * size);
      drawCircle(isColored(index, n));
      pop();
    }
  }
}

// Funktion 1: entscheidet ob Kreis gefärbt wird
function isColored(index: number, n: number): boolean {
  return index < n;
}

// Funktion 2: zeichnet einen Kreis
function drawCircle(colored: boolean) {
  if (colored) {
    fill(0, 150, 255);
  } else {
    noFill();
  }

  stroke(0);
  circle(0, 0, 30);
}