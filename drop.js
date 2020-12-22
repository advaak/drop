class Drop{
    constructor(){
        var options = {
            restitution: 0.5
        }
        this.drop=Bodies.circle(random(0,400), random(0,400), 3, options)
        World.add(world, this.drop)
    }
    display(){
        var pos = this.drop.position;
        fill(0,0,255);
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, 3,3);
        if (pos.y>height){
            Matter.Body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})
        }
    }
}