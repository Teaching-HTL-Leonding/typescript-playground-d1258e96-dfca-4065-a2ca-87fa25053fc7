const half: number = 100

function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("orange") // <<< Add your code here
    rect(0, 0, width / 2, height / 2)

    fill("green")
    rect(width / 2, 0, width / 2, height / 2)

    fill("blue")
    rect(0, height - half, width / 2, half)

    fill("red")
    rect(width / 2, height - half, width / 2, half)

    fill("black")
    rect(width / 4, height / 2.6, width / 2, height / 4)
}

// <<< Add the function `moveClicked` with the required code here
function mouseClicked() {
    fill("black")
    rect(width / 4, height / 2.6, width / 2, height / 4)

    noStroke()
    fill("white")
    textSize(40)
    textAlign(CENTER, CENTER)

    noStroke()
    fill("white")
    textSize(40)
    textAlign(CENTER, CENTER)

    let s: string
    if (mouseX < width / 2) {
        if (mouseY < height / 2) { s = 'Orange' }
        else { s = 'Blue' }

    }
    else if (mouseX < width / 2 * 2) {
        if (mouseY < height / 2) { s = 'Green' }
        else s = 'Red'

    }
    text(s, width / 2, height - half);
}