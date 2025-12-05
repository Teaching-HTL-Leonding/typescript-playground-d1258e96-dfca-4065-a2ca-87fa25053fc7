const num = Math.floor(10)

const diamondDiameter = 50;

let diamondCenterX: number;
let diamondCenterY: number;

let directionX = 2;
let directionY = 2;

function setup() {
    createCanvas(300, 300);

    diamondCenterX = 150;
    diamondCenterY = 1;

}

function draw() {
    background("blue");

    stroke("white");
    strokeWeight(3);
    noFill();

    line( diamondCenterX, diamondCenterY-50,  diamondCenterX+50, diamondCenterY)
    line( diamondCenterX+50, diamondCenterY,  diamondCenterX,  diamondCenterY+50)
    line( diamondCenterX, diamondCenterY+50,  diamondCenterX-50,  diamondCenterY)
    line( diamondCenterX-50, diamondCenterY,  diamondCenterX, diamondCenterY-50)

    diamondCenterX += directionX;
    diamondCenterY += directionY;

    if (diamondCenterX <= 0|| diamondCenterX >= width) {
        directionX *= -1;
    }
    if (diamondCenterY <= 0|| diamondCenterY >= height) {
        directionY *= -1;
    }

    textAlign(CENTER, CENTER);
    fill("black");
    noStroke();

    textSize(30)
    text(num, diamondCenterX, diamondCenterY+1.2)
}
