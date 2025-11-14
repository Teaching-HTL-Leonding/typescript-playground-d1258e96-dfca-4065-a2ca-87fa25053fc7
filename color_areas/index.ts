const quarter: number=50

function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    // <<< Add your code here
    fill('yellow')
    rect(0, 0, width/3, height)

    fill('LimeGreen')
    rect(width/3, 0, width/3, height)

    fill('red')
    rect(2*width/3,0, width/3, height)

    fill('black')
    rect(0, height- quarter, width, quarter)
}

// <<< Add the function `moveClicked` with the required code here
    function mouseClicked(){
    fill('black')
    rect(0, height- quarter, width, quarter)

    noStroke()
    fill("white")
    textSize(40)
    textAlign(CENTER, CENTER)

    let s: string
    if (mouseX < width / 3) {
    s= 'Yellow'
    }
    else if (mouseX < width / 3 * 2) {
    s='Green'
    }
    else{
    s='Red'
    }
    text(s, width / 2, height - quarter / 2);
    }