const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;
var division1,division2,division3,division4;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
function setup() 
{
  var canvas = createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,800,480,1);
}

function draw() 
{
  background(255,255,255);  
  drawSprites();
  ground.display();
  Divisions.display();
}

for(var k = 0;k<=480; k=k+80)
{
  Divisions.push(new Divisions(k, 800-divisionHeight/2,10,divisionHeight));
}

for(var j = 40;j<=480-10; j+j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j<=48-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for (var j = 0; j < particles.length; j++)
{
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++)
{
  divisions[k].display();
}