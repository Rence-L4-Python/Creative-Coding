var shape = 40;
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(235,84,111); // this is for the pattern's color, the lighter area is the shapes in the for loop
  translate(width / 2, height / 2);
  rotate(45) // tilting the shapes, redundant here but not on other rotate values in the for loop
  for (var x = 0; x < width; x += shape) {
    for (var y = 0; y < height; y += shape) {
      rotate(45); // this is where the patterns are made; use multiples of the number 45 to get more "logical" patterns
      fill(255);
      rect(x, y, 1600, 20);
      ellipse(0,y+=25,45,45);
    }
  }
}
