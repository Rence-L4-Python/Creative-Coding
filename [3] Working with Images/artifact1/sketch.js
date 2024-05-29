// code reference https://editor.p5js.org/aferriss/sketches/DmcJX_3pg
let pixel = 15;

function preload() {
  img = loadImage("media/frpxltn.png");
}

function setup() {
  createCanvas(800, 800);
  image(img, 0, 0);
  strokeWeight(0.05);
}

function draw() {
  for (let x = 0; x < width * 1; x += pixel) {
    for (let y = 0; y < height * 1; y += pixel) {
      fill(img.get(x, y)); //color used for pixelization effect, each pixel uses its current x,y location for the colors
      ellipse(x, y, pixel, pixel); //shape used
    }
  }
}
