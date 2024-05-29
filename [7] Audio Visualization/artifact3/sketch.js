// this was based on an audio visualizer tutorial from https://youtu.be/uk96O7N1Yo0?si=okZo2NjJqM7SvqKY
var audio1;
var fft;
var particles = [];
var img;

function preload() {
  audio1 = loadSound("audio/bbkkbkk.mp3");
  img = loadImage("bbkkbkk.png");
  bg = loadImage("bbkkbkk1.png");
}

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  fft = new p5.FFT();
  bg.filter(BLUR, 2);
  button = createButton("play music");
  button.mousePressed(togglePlaying);
  button.size(100, 100);
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
  translate(width / 2, height / 2);
  fft.analyze(); // analyzing the sound
  amp = fft.getEnergy(20, 200); // specific frequency volume is assigned as amp (height of wave or loudness)
  push(); // saving state for the background (which are two faces)
  if (amp > 222) {
    // when the amp reaches 222, add a shaking and bouncing effect (the average is around 230 and goes down to 200 on calm portions in the music)
    rotate(random(-0.5, 0.5)); // rotates randomly
    scale(random(1, 1.05)); // increases in size randomly
  }
  image(bg, 0, 0); // shows the bg image
  pop();
  var alpha = map(amp, 0, 255, 180, 120);
  fill(0, alpha);
  noStroke();
  rect(0, 0, width, height);
  stroke(255);
  strokeWeight(7);
  noFill();

  var wave = fft.waveform(); // variable for the wave
  for (var t = -1; t <= 1; t += 2) {
    // creates a mirrored side of the wave
    beginShape(); // creates a custom shape for the wave
    for (var i = 0; i <= 180; i += 0.5) {
      var index = floor(map(i, 0, width, 0, wave.length - 1));
      var r = map(wave[index], -1, 1, 150, 350); // styling and changing the intensity of the waves
      var logo = map(wave[index], -4, 1, 140, 340); // styling and changing the intensity of the movement of the logo in the middle
      var x = r * -sin(i) * t;
      var y = r * cos(i);
      var z = logo * cos(i);
      vertex(x, y); // creates the wave
    }
    endShape();
  }
  image(img, 0, 0, z, z); // logo in the middle, size changes alongside music
  var p = new Particle();
  particles.push(p);
  for (var i = particles.length - 1; i >= 0; i--) {
    if (!particles[i].edges()) {
      particles[i].update(amp > 222);
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }
  }
}
class Particle {
  // creates the moving circular particles
  constructor() {
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.000001));
    this.w = random(3, 5);
  }
  update(cond) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (cond) {
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
    }
  }
  edges() {
    if (
      this.pos.x < -width / 2 ||
      this.pos.x > width / 2 ||
      this.pos.y < -height / 2 ||
      this.pos.y > height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, random(1, 6));
  }
}
