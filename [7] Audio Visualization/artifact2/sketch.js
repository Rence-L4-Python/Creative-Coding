let audio1;

function preload() {
  audio1 = loadSound("audio/fresh.mp3");
}

function setup() {
  createCanvas(800, 800);
  fft = new p5.FFT(0.8, 64); // uses an audio analysis algorithm
  button = createButton("play music");
  button.mousePressed(togglePlaying);
  button.size(100, 100);
  button.position;
}

function togglePlaying() {
  // need to create this to play the audio in live code
  if (!audio1.isPlaying()) {
    audio1.play();
    button.html("pause"); //changes the text on button to pause
  } else {
    audio1.pause();
    button.html("play"); //changes the text on button to play
  }
}

function draw() {
  background(0);
  var spectrum = fft.analyze(); // assigns the analyzed fft data to a spectrum variable
  for (var i = 0; i < spectrum.length; i++) {
    //fft is returned as an array and then used to draw the shapes
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height - 3, 32);
    fill(map(x, 0, width, 128, 255), map(x, 0, width, 255, 0), 0); //creates somewhat of a gradient effect
    rect(x, height, width / spectrum.length, h, 3);
  }
}
