var scalar = 5; 
var m = 200;
var n1 = 400; 
var n2 = 100;
var n3 = 100; 
var easing = 0.01;
let t = 1;
let u = 1; 
let xoff =0.0;
let yoff =0.0;


function setup() { 
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 120);

}

function draw() {
  xoff = xoff + random(0.01);
  yoff = yoff + random(0.01);
  let n = noise(xoff) * width;
  let p = noise(yoff) * height;
  background(0);
  drawShape(n, p);
}

function drawShape(x, y) {
  push();
  translate(x, y);
  
  var newScalar = scalar; 
  for (var s = 16; s >0; s--) {
    beginShape();
    
    var mm =  m + s * easing;
    var nn1 = random(10, 0.01) * n1 + s * easing; 
    var nn2 = random(10, 0.01) * n1 + s * easing; 
    var nn3 = n3 + s; 
    newScalar = newScalar * random(0.5, 0.98);


    var sScalar = newScalar;
    
    var points = superFormula(mm, nn1, nn2, nn3);
    curveVertex(points[points.length-1].x * scalar, points[points.length-1].y * scalar);
    for (var i = 0; i < points.length; i++) {
      curveVertex(points[i].x * scalar, points[i].y * scalar);
    }
    curveVertex(points[0].x * scalar, points[0].y * scalar);
    endShape();
  }
  pop();
}

function superFormula(m, n1, n2, n3) {
  var numPoints = 360; 
  var phi = TWO_PI / numPoints;
  var points = [];
  for (var i =0; i<=numPoints; i++) {
    points[i] = superFormulaPoints(m, n1, n2, n3, phi * i);
  }
  return points; 
}

function superFormulaPoints(m, n1, n2, n3, phi){
  var r; 
  var t1, t2;
  var a=1, b=1;
  var x = 0;
  var y = 0;

  t1 = cos(m * phi / 4) / a; 
  t1 = abs(t1);
  t1 = pow(t1, n2);

  t2 = sin(m * phi / 4) / b; 
  t2 = abs(t2);
  t2 = pow(t2, n3);

  r = pow(t1 + t2, 1/n1);
  if(abs(r) == 0) {
    x = 0;
    y = 0;
  } else {
    r = 1 / r;
    x = r * cos(phi);
    y = r * sin(phi);
  }
  return new p5.Vector(x, y);
}

