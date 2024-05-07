function setup() {
  createCanvas(800, 800);
}

function draw() {
  scale(2);
  translate(50, 50);
  noStroke();
  background(46, 114, 98);
  //BASE
  fill(255, 204, 74);
  ellipse(150, 150, 100, 100);
  //2
  fill(98, 74, 14);
  ellipse(150, 160, 80, 80);
  //3
  fill(255, 204, 74);
  ellipse(150, 162, 65, 77);
  //4
  fill(98, 74, 14);
  ellipse(150, 160, 50, 50);
  //5
  fill(255, 204, 74);
  ellipse(150, 157, 45, 47);
  //eyeR
  fill(70, 70, 70);
  ellipse(183, 138, 30, 50);
  //eyeRI
  fill(0, 0, 0);
  ellipse(183, 140, 25, 42);
  //eyeL
  fill(70, 70, 70);
  ellipse(117, 138, 30, 50);
  //eyeLI
  fill(0, 0, 0);
  ellipse(117, 140, 25, 42);
  //6
  fill(255, 204, 74);
  ellipse(150, 130, 60, 20);
  //7
  fill(0, 0, 0);
  ellipse(150, 126, 30, 35);
  //8
  fill(255, 204, 74);
  ellipse(150, 126, 22, 28);
  //9
  fill(98, 74, 14);
  rect(148, 182, 5, 20);
  //ANTENNAS
  //L1
  fill(230, 170, 25);
  push();
  rotate(45);
  rect(145, -45, 35, 5);
  pop();
  //L1.1
  fill(210, 150, 25);
  push();
  rotate(46.9);
  rect(-90, -128, 35, 5);
  pop();
  //L1.2
  fill(170, 110, 25);
  push();
  rotate(5);
  rect(-115, 108, 35, 5);
  pop();
  //L1.3
  fill(120, 70, 25);
  push();
  rotate(-5);
  rect(155, -34, 35, 5);
  pop();
  //R1
  fill(230, 170, 25);
  push();
  rotate(-45);
  rect(-23, 210, 35, 5);
  pop();
  //R1.1
  fill(210, 150, 25);
  push();
  rotate(81.9);
  rect(202, 57, 35, 5);
  pop();
  //R1.2
  fill(170, 110, 25);
  push();
  rotate(-5);
  rect(164, -180, 35, 5);
  pop();
  //R1.3
  fill(120, 70, 25);
  push();
  rotate(5);
  rect(-105, 253, 35, 5);
  pop();
}
