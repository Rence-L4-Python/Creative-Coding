function setup() {
  createCanvas(800, 800);
}

function draw() {
  scale(2);
  background(231, 111, 81);
  fill(244, 162, 97);
  translate(15, 0);
  angleMode(DEGREES);
  triangle(200, 235, 100, 235, 150, 175);
  rectMode(RADIUS);
  fill(38, 70, 83);
  rect(200, 200, 55, 55, 40, 10, 50, 10);
  ellipseMode(RADIUS);
  fill(42, 157, 143);
  ellipse(200, 200, 30);
}
