function setup() {
    createCanvas(400, 500);
   
    background("#DCDCDC");
    
    stroke("black");
    strokeWeight(3);
   
    fill("Gray")
    rect(50, 110, 290, 290);
   
    fill("white")
    rect(90, 300, 200, 35);
    
    fill("black")
    circle(110, 210, 50);//left eye
    circle(270, 210, 50);//right eye
    
    line(190, 50, 190, 110);
    
    fill("white")
    circle(190, 50, 35)
}