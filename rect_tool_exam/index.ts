function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

// <<< Add the function `mouseMoved` with the required code here
function mouseMoved() {

    background("black");

    stroke("white")
    strokeWeight(2);
    noFill();

    let a=(width/2-mouseX)*2
    let b= ((height/2- mouseY)*2)

    rect(mouseX, mouseY, (width/2- mouseX)*2, (height/2- mouseY)*2)
   
    strokeWeight(1);
    text(`Area: ${b}`, 5, height - 10);

    stroke("lightgray");
    strokeWeight(1);
    line(width*2 - a*2, height*2, width*2 + a*2, height*2);
    line(width*2, height*2 - b*2, width*2, height*2 + b*2);
}