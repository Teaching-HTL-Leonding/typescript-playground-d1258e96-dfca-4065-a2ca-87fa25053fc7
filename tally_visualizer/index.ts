// Layout constants
const GROUPS_PER_ROW = 10;
const ROWS = 10;
const MARKS_PER_GROUP = 5;
const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500

const GROUP_W = 42;   // width of one tally group
const GROUP_H = 36;   // height of the vertical strokes
const COL_GAP = 10;   // gap between groups
const ROW_GAP = 16;   // gap between rows
const MARGIN = 16;
const TITLE_HEIGHT = 30;

const CELL_W = GROUP_W + COL_GAP;
const CELL_H = GROUP_H + ROW_GAP;

// Colors
const COLOR_FILLED = "steelblue";

// The random number to visualize (0–500)
let randomNumber: number;
function isSchowed(row: number, col: number, n: number): number {
    return randomNumber/ GROUPS_PER_ROW % 500 ;
    }

function drawLins(schowed: number): void {
    push()
    stroke(COLOR_FILLED);
    strokeWeight(2)
    fill("steelblue")
    line(COL_GAP, GROUP_W, COL_GAP, 5)
    line(COL_GAP + 10, GROUP_W, COL_GAP + 10, 5)
    line(COL_GAP + 20, GROUP_W, COL_GAP + 20, 5)
    line(COL_GAP + 30, GROUP_W, COL_GAP + 30, 5)
    line(COL_GAP, GROUP_W, COL_GAP + 30, 5)
    pop()
}

function setup(): void {
    const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN;
    const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN;
    createCanvas(canvasW + 20, canvasH + 20);

    randomNumber = Math.floor(Math.random() * (TOTAL + 1));

    background("white");

    noStroke();
    fill("black");
    textSize(14);
    textAlign(CENTER);
    text(`Random number: ${randomNumber} / 500`, width / 2, 20);

    translate(MARGIN + CELL_H / 2, TITLE_HEIGHT + CELL_H / 2);
    for (let row = 0; row < ROWS; row++) {
        push();
        for (let col = 0; col < GROUPS_PER_ROW; col++) {
            drawLins(isSchowed(row, col, randomNumber));
            translate(CELL_H, 0);
        }
        pop();
        translate(0, CELL_H);
    }
}