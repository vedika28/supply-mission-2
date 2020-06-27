var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, boxLine1, boxline2, boxline3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
 
	engine = Engine.create();
	world = engine.world;

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	boxLine1 = new Line((width/2)-10, 650, 200, 20);
	boxLine2 = new Line(300, 615, 20, 100);
	boxLine3 = new Line(500, 615, 20, 100);
	
	packageBody = Bodies.circle(width/2, 200, 10, { isStatic: true, restitution: 0});
	World.add(world, packageBody);

	//to create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	Engine.update(engine);

	boxLine1.display();
	boxLine2.display();
	boxLine3.display();

	keyPressed();

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}
