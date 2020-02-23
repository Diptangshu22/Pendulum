const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var string,bob,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var string_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

string = Bodies.rectangle(200,100,200,20,ground_options);
World.add(world,string);

var bob_options = {

  restitution : 0.9,
  density : 0.7

}

bob  = Bodies.circle(220,200,35,bob_options);
World.add(world,bob);


var options = {
  bodyA : bob,
  bodyB : string,
  stiffness: 0.003,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("white");
}


function draw() {
  background(0); 
  Engine.update(engine);


  text("Press Spacebar to oscillate the pendulum from left to right with the mouse",20,20);
  text("Press Enter to stop the Pendulum ",120,50);

  fill ("black");
rectMode(CENTER);
rect(string.position.x,string.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("red");
ellipseMode(RADIUS);
ellipse(bob.position.x,bob.position.y,40);

strokeWeight(8);
stroke("white");
line(bob.position.x,bob.position.y,string.position.x,string.position.y)




if(keyCode===32){
bob.position.y = mouseY;
bob.position.x = mouseX;
}

else if (keyCode === ENTER){
bob.position.x = 200;

}

}
