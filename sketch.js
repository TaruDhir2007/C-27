
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var roof1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1 = new Bob(250, 600);
	ball2 = new Bob(300, 600);
	ball3 = new Bob(350, 600);
	ball4 = new Bob(400, 600);
	ball5 = new Bob(450, 600);
	roof1 = new Roof();
	//Create the Bodies Here.
    rope1 = new Rope(ball1.body, {x: 250, y: 200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  rope1.display();
  drawSprites();
 
}



