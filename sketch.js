
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var block1,block2,block3;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
  	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor="white";
	World.add(world, ground);

	block1=createSprite(500,610,20,100);
	block1.shapeColor="red";

	block2=createSprite(600,650,200,20);
	block2.shapeColor="red";

	block3=createSprite(700,610,20,100);
	block3.shapeColor="red";
	
	ball= new Paper(100,300,50);
	ball.shapeColor="white";
	
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.5,y:0.5});
		if(ball.body.position.y===550){
			ball.body.options={
				isStatic:true
			}	
		}
	}
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ball.display();
  keyPressed();
  
  
  drawSprites();
 
}



