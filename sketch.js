
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, rightSide, leftSide;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	var ballOptions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(100,10,20,ballOptions);
	World.add(world,ball);
	fill(225);
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftSide.display();
  rightSide.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  keyPressed();

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:1,y:-1});
	}
}
