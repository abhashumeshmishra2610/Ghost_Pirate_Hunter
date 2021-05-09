var bg,bg2,form,system,code,security;
var score = 0;

function preload() {
 
  
  bg = loadImage("5008.jpg");
  //load image for the treasure background
  bg2 = loadImage("4008.jpg");
}

function setup() {
  createCanvas(1500,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);

  clues();
  security.display();
  textSize(20);
  fill("white");
  text("S C O R E  :  " + score, 650, 90);

// add code for changing the background to the treasure background
  
  if(score === 3) {
    clear();
    background(bg2);
    fill("White");
    stroke("Whhite");
    strokeWeight(4);
    textSize(40);
    text("T  R  E  A  S  U  R  E     U  N  L  O  C  K  E  D",350, 250);
  }

  push();
  fill("White");
  stroke("Whhite");
  strokeWeight(4);
  textSize(40);
  text("G H O S T   P I R A T E   H U N T E R",400, 50);
  pop();

  drawSprites()
}