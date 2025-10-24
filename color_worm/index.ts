function setup() {
createCanvas(500, 500)
colorMode(HSB)
background(0, 100,0)
noStroke()
}

//Globale Variable
let color_hue: number = 0;

function mouseMoved() {
    fill(color_hue, 100, 100)
    circle(mouseX, mouseY, 40)
    color_hue = color_hue +5
    color_hue = color_hue % 360
    //console.log(color_hue)

}