function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

// <<< Add the function `mouseMoved` with the required code here
function mouseMoved() {
    const gridSize=20
    background("black");

    stroke("white")
    strokeWeight(2);
    noFill();

    let a=(width/2-mouseX)*2
    let b= (height/2- mouseY)*2

    rect(mouseX, mouseY, (width/2- mouseX)*2, (height/2- mouseY)*2)
   
    strokeWeight(1);
    text(`Area: ${b*a}`, 5, height - 10);

    strokeWeight(1);
    line(mouseX, mouseY, mouseX+ a, mouseY+b);
    line(mouseX+a, mouseY, mouseX, mouseY+b);

    stroke("red")
    strokeWeight(2);
    line(mouseX, mouseY, mouseX, mouseY+b,mouseX, mouseY)
    stroke("lime")
    line(mouseX, mouseY, mouseX+a, mouseY, mouseX, mouseY)
    stroke("yellow")
    line(mouseX, mouseY+b, mouseX+a, mouseY+b, mouseX, mouseY)
    stroke("aqua")
    line(mouseX+a, mouseY+b, mouseX+a, mouseY, mouseX, mouseY)

}