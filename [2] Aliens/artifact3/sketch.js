function setup() {
  createCanvas(800, 800);
}

function draw() {
  noStroke();
  background(255);
  angleMode(DEGREES);
  ellipseMode(CORNER);
  translate(-100,-75)
  scale(1.25);
  //arms
  fill(19, 166, 148);
  arc(265, 275, 270, 250, 180, 0);
  //armsep
  fill(255, 255, 255);
  ellipse(277.5, 287.5, 245);
  //handL
  fill(19, 166, 148);
  ellipse(242, 377, 45, 45);
  //handR
  fill(19, 166, 148);
  ellipse(511, 377, 45, 45);
  //base
  fill(19, 166, 148);
  ellipse(300, 240, 200, 300);
  //eye
  fill(85, 245, 255);
  ellipse(360, 250, 80, 80);
  //iris
  fill(69, 69, 69);
  ellipse(384, 258, 30, 60);
  //hl
  fill(255, 255, 255);
  ellipse(408, 265, 11, 11);
  //mouth
  fill(69, 69, 69);
  push();
  rotate(180);
  arc(-434, -368, 70, 50, 180, 0);
  pop();
  //mouthcov
  fill(19, 168, 148);
  ellipse(374, 330, 50, 35);
  //legsep
  fill(255, 255, 255);
  ellipse(350, 410, 100, 150);
}
