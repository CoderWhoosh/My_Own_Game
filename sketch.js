const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg, soldierImg;
var soldier;
var gameState = 0;
function preload(){
	soldierImg = loadImage("soldier.jpg");
    backgroundImg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(800, 600);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	soldier = createSprite(80,550,60,60);
	soldier.addImage(soldierImg);
	soldier.scale = 0.35;
	soldier.rotation = -225;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  //soldier.display();
  if(gameState === 0){
	if(keyDown(RIGHT_ARROW)){
		soldier.x+=3;
	}
	if(keyDown(LEFT_ARROW)){
	  soldier.x-=3;
  }
  if(keyDown(UP_ARROW)){
	soldier.y-=3;
}
if(keyDown(DOWN_ARROW)){
	soldier.y+=3;
}
if(keyDown("a")){
	soldier.rotation = soldier.rotation+90;
}
if(keyDown("d")){
	soldier.rotation = soldier.rotation+180;
}
  }
  drawSprites();
 
}



