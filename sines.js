var angle = 0; 
var offset = 150; 
var scalar = 100; 
var speed = 0.05;


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  background(255);

  var y1 = offset + cos(angle) * scalar;
  var y2 = offset + cos(angle + 0.4) * scalar;
  var y3 = offset + cos(angle + 0.8) * scalar;
  
  ellipse(50, y1, 100, 100);
  ellipse(150, y2, 100, 100);
  ellipse(250, y3, 100, 100);

  angle += speed;
}
