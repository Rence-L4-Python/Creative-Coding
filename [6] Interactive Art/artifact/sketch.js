// this is a primitive painting tool that lets you paint like ms paint
// this does not have an undo function or a properly made colorpicker since it kept on overwriting the newer colorpicker's color with black
// tried to use arrays and other methods for the colorpicker color but it still returns as black, so i used an alternative method which involves making a "2nd" brush mode
let colorPicker;
let brushSizeSlider;
let brushFlowSlider;
let tempColor = "white";

//recommend zooming out to use the painting tool properly
function setup() {
  angleMode(DEGREES);
  //creating the colorpicker
  colorPicker = createColorPicker("black");
  colorPicker.position(870, 280);
  colorPicker.size(300, 300);
  //creating the brush size slider
  brushSizeSlider = createSlider(0, 255);
  brushSizeSlider.position(950, 640);
  brushSizeSlider.size(255);
  //creating the brush flow slider (this is not the same as brush opacity)
  brushFlowSlider = createSlider(0, 255);
  brushFlowSlider.value(255);
  brushFlowSlider.position(950, 690);
  brushFlowSlider.size(255);
  //creates the canvas
  var can = createCanvas(800, 800);
  can.position(10, 80);
  can.background(255);
  // creates an offscreen canvas, very helpful for making cursors
  drawing = createGraphics(800, 800);
}

function draw() {
  background(255);
  image(drawing, 0, 0); // shows the offscreen canvas
  clrf = colorPicker.color(); // this is the main painting color
  // slider values
  brushSize = brushSizeSlider.value();
  brushFlow = brushFlowSlider.value();
  // changes the transparency of the shapes according to the brush flow slider's value
  clrf.setAlpha(brushFlow);
  // code for smudging and erasing
  smudgeColor = get(mouseX, mouseY); // gets the color at mouse location
  eraseColor = color("white"); // set to white color since the canvas is white
  smudgeColor = color(smudgeColor); // allows the usage of setAlpha to allow for brush flow slider usage
  smudgeColor.setAlpha(brushFlow);
  eraseColor.setAlpha(brushFlow);

  // CURSOR + PAINTING CODE

  if (mouseX < width) {
    // always true so its gonna happen regardless
    if (keyIsDown(17) == false) {
      // if you're not pressing down "LEFT CTRL", this will show up
      drawing.noStroke();
      cursor(); //custom cursor
      fill(clrf);
      strokeWeight(brushSize / 32);
      stroke(200);
      noCursor(); // removes original cursor
      circle(mouseX, mouseY, brushSize);
    }

    // EYEDROPPER + BRUSH
    if (keyIsDown(17) == true) {
      //eyedropper functionality -- USES THE "LEFT CTRL" KEY
      if (mouseIsPressed == true) {
        if (mouseButton == RIGHT) {
          //pressing right click
          tempColor = get(mouseX, mouseY); //updates the tempcolor which was declared as "white"
          tempColor = color(tempColor); //allows for setAlpha to work with the variable
          tempColor.setAlpha(brushFlow);
        }
        if (mouseButton == LEFT) {
          //pressing left click; 2nd brush mode functionality
          drawing.fill(tempColor); //changing clrf always ended up overwriting the new color to black so I had to use a different variable that held a changeable color
          drawing.ellipse(mouseX, mouseY, brushSize);
        }
      } // area below is used for styling the eyedropper
      stroke(200);
      strokeWeight(5);
      noFill();
      ellipse(mouseX, mouseY, brushSize + 10);
      stroke(tempColor);
      ellipse(mouseX, mouseY, brushSize + 5);
      stroke(255, 0, 0);
      ellipse(mouseX, mouseY, 1);
    }
    // PAINTING
    if (mouseIsPressed == true) {
      if (keyIsDown(17) == false) {
        // deleting this somehow breaks the painting code so im not deleting this
        if (mouseButton == LEFT) {
          // left clicking allows you to paint on the offscreen canvas which gets shown
          drawing.fill(clrf);
          drawing.ellipse(mouseX, mouseY, brushSize);
        }
      }

      // SMUDGING
      if (keyIsDown(83) == true) {
        // smudging functionality, it uses the continually updating colors that the mouse goes over and "blends" in the colors -- USES THE "S" KEY
        drawing.fill(smudgeColor);
        drawing.ellipse(mouseX, mouseY, brushSize + 2);
      }

      // ERASING
      if (keyIsDown(69) == true) {
        // erasing functionality, draws white color which is the same as the canvas' original color so it looks like it's erasing
        if (mouseButton == RIGHT) {
          // makes it so erasing only works if you press right click alongside pressing "E"
          drawing.fill(eraseColor);
          drawing.ellipse(mouseX, mouseY, brushSize + 2);
        }
      }
    }
  }
  // stops right click from opening while drawing on canvas; shift + right click to access
  document.oncontextmenu = function () {
    if (mouseX < width && mouseY < height) return false;
  };
}
