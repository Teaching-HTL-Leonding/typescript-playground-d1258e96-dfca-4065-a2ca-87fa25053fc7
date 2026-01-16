let circleX: number[] = [];
let circleY: number[] = [];
let direction: number[] = [];

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
}

function draw() {
    background("white");
    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);

    fill('yellow');
    stroke('gold');

    for (let i = 0; i < circleX.length; i++) {

        push()
        circle(circleX[i], circleY[i], DIAM);

        if (circleX[i] - RADI < 0 || circleX[i] + RADI > width) {
            direction[i] *= -1;
        } 
        circleX[i] = max(RADI, min(width - RADI, circleX[i]));

        pop()
        circleX[i] += SPEED * direction[0];
    }



}

function mouseClicked() {
    circleX.push(mouseX)
    circleY.push(mouseY)
    direction.push(1)
}
