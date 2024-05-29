let img;
let drawing;

function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
  drawing = createGraphics(800,800);
}

function draw() {
  background(255);
  image(drawing,0,0);
  x = color(map(mouseX,0,width,0,255));
  if (mouseX < width){
    cursor();
    strokeWeight(1);
    stroke(0);
    noCursor();
    circle(mouseX,mouseY,20);
    if (mouseIsPressed == true){
    if (mouseButton == LEFT){
    drawing.circle(mouseX,mouseY,20);
    drawing.fill(x);
    drawing.noStroke();
      }
    }
  }
}
