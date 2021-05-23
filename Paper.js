class Paper {

    constructor(x, y) {
  
      var options = {
          isStatic : false,
          restitution : 0.5,
          friction : 0.5,
          density : 1.2
      }
      
      this.body = Bodies.circle(75,100,20,options);
      World.add(world,this.body);
    }
  
    display(){
      var pos =this.body.position;
     // pos.x = mouseX;
      //pos.y = mouseY;
     // var angle = this.body.angle;
      push();
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,20,20);
      //translate(pos.x, pos.y);
      //rotate(angle);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("yellow");
      //rect(0, 0, this.width, this.height);
      
      pop();
    }
  };