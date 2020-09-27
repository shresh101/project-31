class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        elipseMode(CENTER);
        Fill("green");
        elipse(pos.x,pos.y,this.radius);
    
    }
};