function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("lime");

    noStroke();

    
    for(let i=1;i<8;i+=2){
        fill("yellow")
        rect(0,i*STRIPE_THICKNESS,width,STRIPE_THICKNESS)
        
    }
}
