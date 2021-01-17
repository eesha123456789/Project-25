var box,box1,box2,box3, ground, paper, binPic;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	keyPressed();
	binPic=loadImage('dustbingreen.png')
}

function setup() {
	createCanvas(800, 700);
	ground=createSprite(width/2,650,width,10)
	ground.shapeColor=color(1000,1000,0)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(width/2,670,width,10,{isStatic:true})
	World.add(world,ground);
	
	box=createSprite(620,600,230,100)
	box.addImage(binPic)
	box.scale=0.3
	box1=new Dustbin(655,600,1,100)
	box2=new Dustbin(620,645,75,1)
	box3=new Dustbin(585,600,1,100)
	paper=new Paper(200,640,30)



	Engine.run(engine);
  
}


function draw() {
  background(255,255,255);
  paper.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}