function setup() {
  createCanvas(200, 200);
  colorMode(HSB)
  //(farbTon, heligkeit, schwarz% je weniger desto dunkler)
  background(0, 91, 100)
  }
  
  // Add your code here
  function mouseMoved(){
  background(360*mouseX/width, 100, 100)
  }

