var shape = 9; // number to be used in the for loop
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER); // affects the positioning
  noStroke();
}

function draw() {
  background(0);
  translate(width / 2, height / 2); // just for centering the shapes
  rotate(15); // tilts the shapes
  scale(1.5); // makes the shapes larger 
  for (var x = 0; x < width; x += shape) {
    for (var y = 0; y < height; y += shape) {
      rotate(1); // changing this value leads to different patterns
      fill(255);
      rect(x, y, 20, 20);
      push(); // this is for the 2nd rectangles
      translate(400, -150);
      rotate(45);
      fill(255);
      rect(x, y, 20, 20);
      pop(); // small dots everywhere in the image
      fill(0);
      ellipse(x, y, 2);
      push(); // large circle in the center
      fill(0);
      stroke(255);
      strokeWeight(15);
      ellipse(0, 0, 120);
      pop();
    }
  }
}
