let audio1;
let peaks;

function preload() {
  audio1 = loadSound("audio/respite.mp3");
}

function setup() {
  createCanvas(800, 800);
  peaks = audio1.getPeaks(width); // p5.Soundfile array
  audio1.setVolume(1);
  button = createButton("play music");
  button.mousePressed(togglePlaying);
  button.size(100, 100);
  button.position;
  background(100);
}

function togglePlaying() {
  // need to create this function so live code works
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
  let l = map(audio1.currentTime(), 0, audio1.duration(), 0, width); // this is for the moving line that tells you how long you have been listening to the audio; it works by mapping the audio time values, repositioning the line and making it go to the end of the canvas width

  stroke(220);
  line(l, 0, l, height);

  stroke(255, 255, 0);
  for (let i = 0; i < peaks.length; i++) { // uses the p5.Soundfile array to make the waves
    line(i, height / 2 + peaks[i] * 1, i, height / 2 - peaks[i] * 100);
  }
}
