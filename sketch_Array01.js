var arrayOfDiam;
var arrayOfCentX, arrayOfCentY;
var colorOfEllipse;

function setup() {
  createCanvas(600,600);
  background(180);
  
  arrayOfDiam = new Array (20);
  arrayOfCentX = new Array (20);
  arrayOfCentY = new Array (20);
  colorOfEllipse = new Array (20);

  for(var i=0; i<20; i++) {
    arrayOfDiam[i] = int( random(600) );
    arrayOfCentX[i] = random(600);
    arrayOfCentY[i] = random(600);
    colorOfEllipse[i] = int( random(255) );  
  }
  stroke(0);
  strokeWeight(5);
}

function draw() {
  for(var i=0; i<20; i++) {
    ellipse(arrayOfCentX[i], arrayOfCentY[i], arrayOfDiam[i], arrayOfDiam[i]);
    arrayOfDiam[i] += 5;
    arrayOfDiam[i] %= width;
    fill(colorOfEllipse[i], 0, colorOfEllipse[i],50);
    colorOfEllipse[i] += 10;
    colorOfEllipse[i] %= 256;
  }  
}