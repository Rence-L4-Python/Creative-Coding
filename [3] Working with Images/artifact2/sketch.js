function preload() {
  img = loadImage("media/ararat.png");
}
function setup() {
  createCanvas(800, 800);
  image(img, 0, 0);
  describe("A photo of Mt.Ararat taken nearby Charents Arch, Armenia.");
}

function draw() {
  image(img, 0, 0);

  //eyedropper cursor "trail" code; this is for creating the circular look
  noFill();
  push();
  strokeWeight(5);
  stroke(0);
  ellipse(mouseX, mouseY, 80);
  ellipse(mouseX, mouseY, 100);
  pop();
  noFill();
  strokeWeight(10);
  stroke(get(mouseX, mouseY));
  ellipse(mouseX, mouseY, 90);
  
  //updating mouseX and mouseY coordinates on the top left corner, also includes color data
  fill(255);
  noStroke();
  scale(2);
  text(" X,Y :       (" + mouseX + ", " + mouseY + ")", 5, 20); // uses strings to render the mouseX and mouseY location as text
  text("RGBA : ", 7.5, 40);
  text(get(mouseX, mouseY), 52, 40); // uses the get() function to obtain the pixel values at the mouse location and renders them as text
}
