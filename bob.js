class Bob{
    constructor(x, y, radius, options){
        var options = {
       'isStatic' : true,
       'density' : 1.2,
       'friction ': 1,
       'restitution' : 0}
       this.body = Bodies.circle(x, y, 50, options)
       World.add(world, this.body)
   
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(230, 230, 0);
        ellipse(0, 0, this.radius);
        pop();
      }
    }
