const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = [];



function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,790,800,20);
  for(var k = 50; k <= 800; k=k+80){
    divisions.push(new Divisions(k,height-220, 10,400));
  }
  for(var j = 75; j<=width; j = j+100){
    plinkos.push(new Plinko(j,75));
  }

  for(var m = 75; m<=width; m= m+100){
    plinkos.push(new Plinko(m,200));
  }
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
 
  
  ground.display();

  for(var k=0; k < divisions.length; k++){
    divisions[k].display();
  }

  
 for(var a = 0; a<plinkos.length; a++){
   plinkos[a].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(100,700),10,10));
    console.log("fall")
  }

  for(var c = 0; c<particles.length; c++){
    particles[c].display();
    console.log("display fall")
  }

  /*for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }*/



}
