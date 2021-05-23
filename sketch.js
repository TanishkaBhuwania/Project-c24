
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,550,800,20);

	dustbin1 = new Box(560,488,20,100);
	dustbin2 = new Box(630,528,110,20);
	dustbin3 = new Box(700,488,20,100);

	paperObject = new Paper(10,528,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) { 
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-50}); 
		} 
	}

