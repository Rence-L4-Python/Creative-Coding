function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke();
  background(255);
  angleMode(DEGREES);
  ellipseMode(CORNER);
  rectMode(CORNER);
  //EarL
  fill(76, 147, 87);
  push();
  rotate(-15);
  rect(120, 370, 90, 150, 10, 30, 10, 30);
  pop();
  //EarR
  fill(76, 147, 87);
  push();
  rotate(15);
  rect(563, 170, 90, 150, 30, 10, 30, 30);
  pop();
  //Base
  fill(100, 188, 85);
  ellipse(250, 200, 300, 400);
  //eyesLD
  fill(90, 90, 90);
  rect(260, 340, 100, 100, 0, 80, 0, 80);
  //eyesL
  fill(69, 69, 69);
  rect(260, 345, 100, 100, 0, 80, 0, 80);
  //eyesHL
  fill(255, 255, 255);
  ellipse(304, 361, 19, 19);
  //eyesRD
  fill(90, 90, 90);
  rect(440, 340, 100, 100, 80, 0, 80, 0);
  //eyesR
  fill(69, 69, 69);
  rect(440, 345, 100, 100, 80, 0, 80, 0);
  //eyesHR
  fill(255, 255, 255);
  ellipse(490, 361, 19, 19);
  //tongue
  fill(245, 73, 73);
  push();
  stroke(69, 69, 69);
  strokeWeight(5);
  rect(362, 509, 75, 74, 0, 0, 40, 40);
  pop();
  //mouth
  fill(69, 69, 69);
  ellipse(335, 453, 130, 65);
  //mouthcover
  fill(100, 188, 85);
  ellipse(335, 445, 130, 65);
  //antennaL
  fill(76, 147, 87);
  push();
  rotate(-45);
  rect(45, 285, 15, 150, 0, 0, 3, 3);
  pop();
  //ballL
  fill(100, 188, 85);
  ellipse(200, 135, 70, 70);
  //antennaR
  push();
  rotate(45);
  fill(76, 147, 87);
  rect(510, -285, 15, 150, 0, 0, 3, 3);
  pop();
  //ballR
  fill(100, 188, 85);
  ellipse(540, 135, 70, 70);
}
