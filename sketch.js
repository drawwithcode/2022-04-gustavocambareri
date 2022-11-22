// init sound array
let suoni = [];

function preload() {
  // put preload code here
  clickSound = loadSound("./assets/sound1.mp3");
  clickSound2 = loadSound("./assets/sound2.mp3");
  clickSound3 = loadSound("./assets/sound3.mp3");
  clickSound4 = loadSound("./assets/sound4.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // define sound array

  suoni = [clickSound, clickSound2, clickSound3, clickSound4];
}

function mouseClicked() {
  //sound and color changes randomly
  noStroke();
  let randomFactor = Math.floor(Math.random() * 4);
  console.log(randomFactor);
  if (randomFactor === 0) {
    fill(247, 0, 132);
  } else if (randomFactor === 1) {
    fill(100, 100, 220);
  } else if (randomFactor === 2) {
    fill(228, 39, 71);
  } else if (randomFactor === 3) {
    fill(31, 63, 114);
  }

  creaCerchio();
  suoni[randomFactor].play();
}

function creaCerchio() {
  circle(random(0, width), random(0, height), random(0, 500));
}
