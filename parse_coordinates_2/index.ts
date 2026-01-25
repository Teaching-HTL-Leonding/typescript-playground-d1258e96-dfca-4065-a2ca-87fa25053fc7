// The following string represents coordinates (x,y) of points
// that you have to connect with lines. Each line connects two consecutive points.
const points = "200,100 300,150 300,250 200,300 100,250 100,150 200,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    stroke("black");
    strokeWeight(3);

    let x1 = 0;
    let y1 = 0
    let x2 = 0
    let y2 = 0
    let coordinates = ""
    let isFirstPoint = true

    for (let i = 0; i < points.length; i++) {
        let p = points[i];

        if (p === ',') {

            x2 = parseInt(coordinates)
            coordinates = ""

        } else if (p === " ") {

            y2 = parseInt(coordinates)

            if (!isFirstPoint) {
                line(x1, y1, x2, y2)
            }
            x1 = x2
            y1 = y2

            isFirstPoint = false
            coordinates = ""
        } else {
            coordinates += p
        }
    }
    y2 = parseInt(coordinates)
    line(x1, y1, x2, y2)
}