const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var bg = "snow1.jpg";
var snowImg = "snow4.webp";



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
}