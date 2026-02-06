const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 500);
    lineHeight = height / 5;
    cellWidth = width / 3;



}

function draw() {
    background("lightgray");
    fill("white")
    rect(15, 20, width-35, 60)
    //line1 -
    line(width, height-(height/1.25), 0, height-(height/1.25))
    //line2 -
    line(width, height/2.5, 0, height/2.5)
    //line3 -
    line(width, height-(height/2.5), 0, height-(height/2.5))
    //line4 -
    line(width, height-90, 0, height-90)
    //line1 |
    line(cellWidth, lineHeight, cellWidth, height-90)
    //line2 |
    line(width / 1.5, lineHeight, width / 1.5, height)
}

function mouseClicked() {
    // <<< Add code here
}
