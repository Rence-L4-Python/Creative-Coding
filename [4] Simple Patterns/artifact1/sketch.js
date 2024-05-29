var shape = 15; // number to be used in the for loop
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  ellipseMode(CENTER); // changes the appearance of the shapes used
  noStroke();
}

function draw() {
  background(0);
  translate(width / 1.5, height / 5); // repositioning the position of the spiral
  for (var x = 0; x < width; x += shape) {
    for (var y = 0; y < height; y += shape) {
      rotate(0.5); // in this code, this somewhat functions like zooming in
      fill(0, random(255), 0); // green blinking colors
      ellipse(x, y, shape * 1.5, shape * 0.5);
      fill(0); // this hides some parts of the other shapes
      ellipse(x, y, shape * 1.2, shape * 4.2);
      fill(0, 0, random(255)); // blue blinking colors
      ellipse(x, y, shape * 1.1, shape * 0.3);
      fill(255, 0, 0); //static red colors
      ellipse(x, y, shape * 0.2, shape * 2.2);
    }
  }
}
