let ic, bg, end;
let childabuse;
let sad1, sad2, sad3, sad4, sad5, sad6, sad7;
let smile1, smile2, smile3, smile4, smile5, smile6, smile7;

const maxXChange = 10;
const maxYChange = 5;
const yNoiseChange = 0.01;
const mouseYNoiseChange = 0.3;
const timeNoiseChange = 0.013;
let inverted = false;

let place = [];
let count = [];
var data;

let posY1 = 0, posY2 = 0, posY3 = 0, posY4 = 0, posY5 = 0, posY6 = 0, posY7 = 0;


function preload(){
  ic=loadSound('ic.mp3');
  end = loadSound('end.mp3');
  data = loadJSON('childabuse.json');
  
  bg = loadImage('bg.jpg');
  
  sad1 = loadImage('1m.png');
  sad2 = loadImage('2m.png');
  sad4 = loadImage('3m.png');
  sad3 = loadImage('4m.png');
  sad5 = loadImage('5m.png');
  sad6 = loadImage('6m.png');
  sad7 = loadImage('7m.png');
  
  smile1 = loadImage('1p.png');
  smile2 = loadImage('2p.png');
  smile4 = loadImage('3p.png');
  smile3 =loadImage('4p.png');
  smile5 = loadImage('5p.png');
  smile6 = loadImage('6p.png');
  smile7 = loadImage('7p.png');
}

function setup() {
  createCanvas(1400,800);
  background(255);
  image(bg, +maxXChange, -maxYChange);
  ic.play();
  ic.setVolume(0.3);
}

function draw() {
  
  if (posY1 < 300 && posY2 < 300 && posY3 < 300 && posY4 < 300 && posY5 < 300 && posY6 < 300 && posY7 < 300) {
    
  }
  else {
    ic.stop();
    end.play();
  }
  cursor('grab');
  var speed1 = data.childabuse[0].count[0];
  var speed2 = data.childabuse[1].count[0];
  var speed3 = data.childabuse[2].count[0];
  var speed4 = data.childabuse[3].count[0];
  var speed5 = data.childabuse[4].count[0];
  var speed6 = data.childabuse[5].count[0];
  var speed7 = data.childabuse[6].count[0];

  
  if (posY1 < 300 && posY2 < 300 && posY3 < 300 && posY4 < 300 && posY5 < 300 && posY6 < 300 && posY7 < 300) {
    posY1 = posY1+speed1*0.0003;
    posY2 = posY2+speed2*0.0003;
    posY3 = posY3+speed3*0.0003;
    posY4 = posY4+speed4*0.0003;
    posY5 = posY5+speed5*0.0003;
    posY6 = posY6+speed6*0.0003;
    posY7 = posY7+speed7*0.0003;
  }
  
  
  image(sad1, 0, posY1);
  image(sad2, 0, posY2);
  image(sad4, 0, posY3);
  image(sad3, 0, posY4);
  image(sad5, 0, posY5);
  image(sad6, 0, posY6);
  image(sad7, 0, posY7);
  for (let i = 0; i < bg.height / 60; i++) { 
    drawStreak();
  }
  if (posY1 < 300 && posY2 < 300 && posY3 < 300 && posY4 < 300 && posY5 < 300 && posY6 < 300 && posY7 < 300) {
    image(bg, 0, 0)
    image(smile1, 0, posY1);
    image(smile2, 0, posY2);
    image(smile4, 0, posY3);
    image(smile3, 0, posY4);
    image(smile5, 0, posY5);
    image(smile6, 0, posY6);
    image(smile7, 0, posY7);
  }
  
}

function mousePressed() {
  if (posY1 < 300 && posY2 < 300 && posY3 < 300 && posY4 < 300 && posY5 < 300 && posY6 < 300 && posY7 < 300) {
    if (0 < mouseX && mouseX < 200 && posY1 > 10) {
      posY1 = posY1-10;
    }
    if (200 < mouseX && mouseX < 400 && posY2 > 10){
      posY2 = posY2-10;
    }
    if (400 < mouseX && mouseX < 600 && posY3 > 10){
      posY3 = posY3-10;
    }
    if (600 < mouseX && mouseX < 800 && posY4 > 10){
      posY4 = posY4-10;
    }
    if (800 < mouseX && mouseX < 1000 && posY5 > 10){
      posY5 = posY5-10;
    }
    if (1000 < mouseX && mouseX < 1200 && posY6 > 10){
      posY6 = posY6-10;
    }
    if (1200 < mouseX && mouseX < 1400 && posY7 > 10){
      posY7 = posY7-10;
    }
  }
}

function drawStreak() {
  let y = floor(random(height));
  let h = floor(random(20, 30)); 
  let xChange = floor(map(noise(y * yNoiseChange, (mouseY * mouseYNoiseChange + frameCount) * timeNoiseChange), 0.06, 0.94, -maxXChange, maxXChange)); //floor(random(-maxXChange, maxXChange));
  let yChange = floor(xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1);

  if (random() < dist(pmouseX, pmouseY, mouseX, mouseY) / width * 0.3 + 0.0015) filter(POSTERIZE, floor(random(2, 6)));
  if (mouseIsPressed && abs(mouseY - y) < 60) {
    if (!inverted) filter(INVERT);
    inverted = true;
  } else {
    if (inverted) filter(INVERT);
    inverted = false
  }
  
  image(bg, xChange - maxXChange, -maxYChange + y + yChange, bg.width, h, 0, y, bg.width, h);
}