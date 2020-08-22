var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
pape=new Paper(200,200,30)
dust=new Dustbin(540,210,100,10)
pig=new Dustbin(490,170,10,100)
popcorn=new Dustbin(590,163,10,100)
cola=new Ground(400,220,800,15)
sling=new Launcher(pape.body,{x:200,y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(20,07,80);
  pape.display();
  dust.display();
  pig.display();
  cola.display();
  popcorn.display();
  sling.display();
  drawSprites();
 
}


//function keyPressed(){
//if(keyCode===UP_ARROW)
//Matter.Body.applyForce(pape.body,pape.body.position,{x:110,y:-110})
//}


function mouseDragged(){
Matter.Body.setPosition(pape.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
  }