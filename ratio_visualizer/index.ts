// A grid of 10x10 circles represents 100 units.
// A random number n (0–100) determines how many circles are "filled".
// Circles are counted left-to-right, top-to-bottom.

// Canvas / layout constants
const COLS = 10;
const ROWS = 10;
const CELL_SIZE = 46;  // distance between circle centers
const MARGIN = 10;
const TITLE_HEIGHT = 35;

// Colors
const COLOR_FILLED = "steelblue";
const COLOR_EMPTY = "lightgray";
const COLOR_STROKE = "white";

// The random number we want to visualize (0–100)
let randomNumber: number;

function isFilled(circleNumber: number): boolean {
    return circleNumber <= randomNumber
}
function drawCircle(filled: boolean) {
    if (filled) {
        fill(COLOR_FILLED)
    } else {
        fill(COLOR_EMPTY)
    }

    stroke(COLOR_STROKE)
    circle(0, 0, CELL_SIZE * 0.8)
}


function setup(): void {
    createCanvas(COLS * CELL_SIZE + 2 * MARGIN, ROWS * CELL_SIZE + TITLE_HEIGHT + MARGIN);
    randomNumber = Math.floor(Math.random() * 101);
    background("white");

    noStroke();
    fill("black");
    textSize(14);
    textAlign(CENTER);
    text(`Random number: ${randomNumber} / 100`, width / 2, 20);

    translate(MARGIN + CELL_SIZE / 2, TITLE_HEIGHT + CELL_SIZE / 2)

    let counter = 1
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            let filled = isFilled(counter)
            drawCircle(filled)
            translate(CELL_SIZE, 0)
            counter++
        }
        translate(-COLS * CELL_SIZE, CELL_SIZE)
    }
}
