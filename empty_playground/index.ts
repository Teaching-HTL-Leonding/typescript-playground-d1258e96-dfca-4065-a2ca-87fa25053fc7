function setup() {
    createCanvas(300, 300)
    background("black")
    frameRate(60) //entscheidet die Geschwindigkeit 
    colorMode(HSB)
}

let x: number=0;
let colorHue: number=0

function draw() {
    background("black")
    noStroke()
    fill(colorHue, 100, 100)
    colorHue=(colorHue+1)% 360
    circle(x, x, 50)
    x=x+1
    x=x % 300 // %300= 300/300= 0Rest (0 ist oben)

}
