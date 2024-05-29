function preload() {
  img = loadImage("media/study.jpg");
}

function setup() {
  createCanvas(800, 800);
  scale(0.8); //image has to be rescaled because of its original size
  image(img, -430, -430); //image has to be repositioned because of its original size
  strokeWeight(0.05);
  filter(ERODE); //applies the ERODE image filter once, which reduces the light areas and simplifies the value/tone changes in the artwork
  for (var i = 0; i < 2; i++) { //applies the BLUR image filter twice
    filter(BLUR);
  }
}
