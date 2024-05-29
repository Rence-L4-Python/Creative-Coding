let trail = [];
let a = 0;
function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  trail.push([mouseX, mouseY]);
  for (let i = 0; i < trail.length; i++) {
    push();
    fill(236, 83, 111, a);
    stroke(255);
    strokeWeight(4);
    ellipse(trail[i][0], trail[i][1] - 25, 40);
    ellipse(trail[i][0] + 25, trail[i][1], 40);
    ellipse(trail[i][0] - 25, trail[i][1], 40);
    ellipse(trail[i][0] + 10, trail[i][1] + 25, 40);
    ellipse(trail[i][0] - 10, trail[i][1] + 25, 40);
    pop();
    noStroke();
    fill(255,255,255,a);
    ellipse(trail[i][0], trail[i][1], 20);
    if (a > 256) {
      trail.shift();
      a = 0;
    }
    a += 12;
  }
}
