function setup() {
    const SIZE = 400;
    const SIDE_LENGTH = 50;

    // We have an isosceles triangle ("gleichseitiges Dreieck").
    // This is the formula to calculate the height of such a triangle
    const HEIGHT = SIDE_LENGTH * Math.sqrt(3) / 2;

    createCanvas(SIZE, HEIGHT * 9);
    background("black");

    strokeWeight(1);
    stroke("yellow");
    noFill();

    for (let y = 0; y <= SIZE; y += SIDE_LENGTH) {
        // Save the current origin (left-most position in the current row)
        push();
translate(0, HEIGHT/3);

        for (let x = 0; x <= SIZE; x += SIDE_LENGTH) {
            triangle(0, 0, SIDE_LENGTH / 2, -HEIGHT, SIDE_LENGTH, 0);
            translate(SIDE_LENGTH, 0); // Move origin to the right

        }

        // Restore the stored origin -> back to left-most position in the current row
        pop()

        // Move one row down
        translate(0, SIDE_LENGTH);
    }
}
