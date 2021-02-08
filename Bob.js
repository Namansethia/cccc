class Bob{

constructer (x,y,radius)  {
var option={
    restilution:1,
    density:0.3,
    isStatic:false,
    friction:0.8,
}

this.body=Bodies.circle(x,y,radius,option);
this.radius=radius;
world.add(world,this.bodies);

}
display(){
var pos = this.body.position;
ellipseMode(RADIUS)
fill ("green")
ellipse(pos.x,pos.y,this.radius)
}

}