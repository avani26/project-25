class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.9,
            friction:0.1,
            density:1.2  
           }
           this.r=r;
    this.body= Matter.Bodies.circle(150,400,15,options);
    World.add(world,this.body);
        }
       display(){
           var pos=this.body.position;
           ellipseMode(CENTER);
           ellipse(pos.x,pos.y,this.r,this.r);
       } 
    }