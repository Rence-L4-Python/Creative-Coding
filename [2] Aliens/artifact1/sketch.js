function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke();
  background(255);
  angleMode(DEGREES);
  ellipseMode(CORNER);
  //BASE
  fill(190, 190, 190);
  ellipse(250, 200, 300, 350);
  //2
  fill(217, 217, 217);
  ellipse(239, 365, 90, 120);
  //3
  fill(217, 217, 217);
  ellipse(474, 365, 90, 120);
  //4
  fill(217, 217, 217);
  ellipse(300, 330, 200, 260);
  //5
  fill(217, 217, 217);
  ellipse(239, 365, 90, 120);
  //6
  fill(90, 90, 90);
  push();
  rotate(-15);
  ellipse(153, 370, 100, 150);
  pop();
  //7
  fill(90, 90, 90);
  push();
  rotate(15);
  ellipse(520, 160, 100, 150);
  pop();
  //8
  fill(69, 69, 69);
  push();
  rotate(-15);
  ellipse(155, 360, 100, 150);
  pop();
  //9
  fill(69, 69, 69);
  push();
  rotate(15);
  ellipse(517, 150, 100, 150);
  pop();
  //10
  fill(69, 69, 69);
  rect(375, 435, 50, 50, 20, 20, 7, 7);
  //11
  fill(217, 217, 217);
  rect(392, 435, 15, 50);
  //12
  fill(69, 69, 69);
  ellipse(340, 490, 120, 60);
  //13
  fill(217, 217, 217);
  ellipse(340, 468, 120, 60);
  //14
  fill(255, 255, 255);
  ellipse(310, 325, 19, 19);
  //15
  fill(255, 255, 255);
  ellipse(500, 325, 19, 19);
}
