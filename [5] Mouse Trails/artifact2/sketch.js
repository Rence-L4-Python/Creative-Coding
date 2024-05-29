let img;
function setup() {
  createCanvas(800, 800);
  img = loadImage('media/star.svg')
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255,51);
  push();
  translate(-45,-45);
  image(img,mouseX,mouseY);
  img.resize(90,90);
  pop();
}

function mousePressed(){
  fill(255,109,0);
  ellipse(mouseX,mouseY,160);
}
