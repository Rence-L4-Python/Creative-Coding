function setup() {
  createCanvas(800, 800);
  background(255);
  textFont("Jacquard-12-regular"); //online font called from google fonts
  textStyle(BOLD); // styles text to be bold
  textAlign(CENTER); //centers text
  push(); // need to save separate states, this is for the BSU logo creation
  mask2 = createGraphics(width, height);
  mask2.strokeWeight(15);
  mask2.stroke(255, 255, 255);
  mask2.fill(30, 60, 200);
  mask2.ellipse(400, 400, 650);
  mask2.erase();
  mask2.textSize(375);
  mask2.text("B   U", 0, 540);
  mask2.strokeWeight(21);
  mask2.textSize(650);
  mask2.text("S", 185, 640);
  mask2.noErase();
  image(mask2, 0, 0);
  pop();
  push(); // need to save separate states, this is for the FTSC logo creation
  mask1 = createGraphics(width, height);
  mask1.strokeWeight(15);
  mask1.stroke(255, 255, 255);
  mask1.fill(255, 0, 0);
  mask1.ellipse(400, 400, 400);
  mask1.erase();
  mask1.textSize(120);
  mask1.text("FTSC", 250, 445);
  mask1.noErase();
  image(mask1, 0, 0);
  pop();
}
