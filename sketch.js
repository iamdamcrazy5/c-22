const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;
function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;

 var opt={
   isStatic:true
 }
 ground=Bodies.rectangle(200,390,200,20,opt);
 World.add(world,ground)
 console.log(ground)
 var b={
   restitution:1
 }
ball=Bodies.circle(200,100,20,b)
World.add(world,ball)
}
function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,200,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  
}