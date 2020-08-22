class Paper{
constructor(x,y,radius){
  var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body=Bodies.circle(x,y,radius,options)
this.rad=radius
this.image=loadImage("./sprawn/paper.png")
World.add(world,this.body)
}
display(){
 // ellipseMode(RADIUS)
   // ellipse(this.body.position.x,this.body.position.y,this.rad,this.rad)
   imageMode(CENTER)
   image.scale=0.2;
   image(this.image,this.body.position.x,this.body.position.y,90,90)
}

}