let img;
function preload() {
  img = loadImage("media/hangingcat.jpg");
  angleMode(DEGREES);
}

function setup() {
  createCanvas(800, 800);
  scale(0.85); //scaled down since original picture is large
  image(img, -50, -300); //repositioned since original picture is large
  push();
  scale(0.6);
  let mask1 = createGraphics(840, 240); //repositioning text, uses a rectangular shape for the masking and repositions the masked area to a new one to change the layout
  mask1.rect(0, 100, 840, 100);
  mask1.image(img, -75, 25);
  image(mask1, 40, -20);
  pop();
  scale(0.8);
  let mask2 = createGraphics(410, 60); //repositioned author text, uses a rectangular shape for the masking and repositions the masked area to a new one to change the layout
  mask2.rect(0, 100, 400, 100);
  mask2.image(img, -290, -1370);
  image(mask2, 740, 1075);
}
