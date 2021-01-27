class Particle{
    constructor(x,y,R){
        this.color = color(random(0,255),random(0,255),random(0,255));
     var options = {isStatic : false, restitution : 0.5, friction:0, density : 1.2}
     this.body = Bodies.circle(x,y,R,options);
     this.Radius = R;
     World.add(world, this.body);
    }

  display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0,this.Radius, this.Radius);
      pop();
  }

}
