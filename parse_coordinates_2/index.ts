// The following string represents coordinates (x,y) of points
// that you have to connect with lines. Each line connects two consecutive points.
const points = "200,100 300,150 300,250 200,300 100,250 100,150 200,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);

    let x1 = 0;
    let y1 = 0
    let x2 = 0
    let y2 = 0

    let coordinates = ""


    for (let i = 0; i < points.length; i++) {
        if (points[i] === ',') {
            line(x1, y1, x2, y2)

            x2 = parseInt(coordinates)
            x1 = parseInt(coordinates)
            coordinates = ""

        } else if (points[i] === ' ') {

            y2 = parseInt(coordinates)
            y1 = parseInt(coordinates)
            line(x1, y1, x2, y2)
            point(x2, y2)
            coordinates = ""
        } else {
            coordinates += points[i]
        }
    }
    y1 = parseInt(coordinates)
    point(x1, y1)
    //line(200, 100, 300, 150)
    //line(200, 100, 100, 150)
    //line(300, 150, 300, 250)
    //line(100, 150, 100, 250)
    //line(100, 250, 200, 300)
    //line (200, 300, 300, 250)
}