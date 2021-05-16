var bg,form,system,word,security;
var score=0;

function preload() {
  bg= loadImage("victory.jpg") 
}

function setup() {
  createCanvas(1200,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background("grey");
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  

  if(score === 6) {
    clear()
    background(bg)
    fill("black")
    textSize(40);
    text("WELL DONE!! YOU HAVE WON!!",250, 200);
  }

  drawSprites()
}