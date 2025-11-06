    function setup() {
    createCanvas(400, 200);
     angleMode(DEGREES);
    }

    // <<< Add the function `mouseMoved` with the required code here
    function mouseMoved() {
    background("black");

    stroke("wihte")
    noFill();
    circle(mouseX, mouseY, 50);
}