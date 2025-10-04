// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;
 
// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;
const SOCCERFIELDWIDTH = 70;
const SOCCERFIELDLENGTH = 100;
 
function setup() {
    // We must calculate the size of the canvas using the constants.
    // Note that we assume that the soccer field has a width of 100m
    // and a height of 70m.
    createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
    background("green");
 
    strokeWeight(0.5);
    stroke("white");
    noFill();
    angleMode(DEGREES);
 
    push();
 
    // Note that we scale everything by the constant SCALE. We use the size values
    // in meters as if they were pixels, and then scale them up by the SCALE factor.
    // Experiment with different SCALE values to see how it works.
    scale(SCALE);
 
    // translate moves the origin of the coordinate system. 0/0 will not be
    // in the top-left corner, but MARGIN pixels to the right/down.
    // Experiment with different MARGIN values to see how it works.
    translate(MARGIN, MARGIN);
 
    // TODO: Draw the soccer field as close as possible to a real soccer field.
    // <<< ADD YOUR CODE HERE
    rect(0,0, SOCCERFIELDLENGTH,SOCCERFIELDWIDTH);
 
    const SOCCERMIDDLELINE = SOCCERFIELDWIDTH / 2;
    const LENGTHGOALAREA = 5.5 * 2 + 7.32;
    const WIDTHGOALAREA = 5.5;
 
    rect(0,SOCCERMIDDLELINE-LENGTHGOALAREA/2,WIDTHGOALAREA,LENGTHGOALAREA);
    rect(94.5,SOCCERMIDDLELINE-LENGTHGOALAREA/2,WIDTHGOALAREA,LENGTHGOALAREA);
 
    const SOCCERMIDDLELINEX = SOCCERFIELDLENGTH / 2;
    //middle line of soccer place
    line(SOCCERMIDDLELINEX,0,SOCCERMIDDLELINEX,SOCCERFIELDWIDTH);
    circle(SOCCERMIDDLELINEX,SOCCERMIDDLELINE,9.15*2);
     circle(SOCCERMIDDLELINEX,SOCCERMIDDLELINE,1);
 
    rect(0,0,SOCCERFIELDLENGTH, SOCCERFIELDWIDTH)
    rect(94.5,SOCCERMIDDLELINE-LENGTHGOALAREA/2,WIDTHGOALAREA,LENGTHGOALAREA);
    }