function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("lime");

    noStroke();

    let i=1
    while(i<8){
        fill("yellow")
        rect(0,i*STRIPE_THICKNESS,width,STRIPE_THICKNESS)
        i+=2
    }
}
