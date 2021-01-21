const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var division = [];
var divisionHeight = 300;
var plinko = [];
var particles = [];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  for(var k=0;k <= width;k = k + 80){
    division.push(new Division(k,height - divisionHeight/2 - 10,10,divisionHeight));
  }
  for(var k=40;k <= width;k=k+50){
    plinko.push(new Plinko(k,75));
  }
  for(var k=20;k <=width;k=k+50){
    plinko.push(new Plinko(k,150));
  }
  for(var k=40;k <=width;k=k+50){
    plinko.push(new Plinko(k,225));
  }
  for(var k=20;k <=width;k=k+50){
    plinko.push(new Plinko(k,300));
  }
  for(var k=40;k <=width;k=k+50){
    plinko.push(new Plinko(k,375));
  }
  ground = new Ground(240, 790, 480, 10);
}

function draw() {
  background("black");  
  Engine.update(engine);
  for(var k =0;k < division.length;k = k + 1){
    division[k].display();
  }
  for(var k =0;k < plinko.length;k = k + 1){
    plinko[k].display();
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2 -100,width/2 +100),10,10))
    
  }
  for(var k=0;k< particles.length;k = k+1){
    particles[k].display();
  }
  ground.display();
}