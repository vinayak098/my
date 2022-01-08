
var welcomeScreen ;
var skydive;
var startIcon;

var gameState = "welcome"

function preload(){
  welcomeScreen = loadImage("images/welcome.jpg")
  skydive = loadImage("images/skydivee.png")
 }

                          
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  startIcon = createSprite(600,500,100,100);
    
}

function draw() {
    

  
  if(gameState === "welcome"){

  background(welcomeScreen);
  text("CONTROLS = left-left arrow key",200,200)

    imageMode(CENTER);
    image(skydive, 700,100 ,500,300);


    if(mousePressedOver(startIcon)){
      console.log("Changing the screen");

      gameState="play"
    }


    
  }

  else if (gameState === "play"){
    console.log("In the play state");
    background("blue")
  }
 

  drawSprites();
}