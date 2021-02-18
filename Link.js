class Link{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB  :pointB,
            length:10,
            stiffness:0.05
            
        }       
        this.link=Matter.Constraint.create(options);
        World.add(world,this.link);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }
    display(){
        image(this.sling1,200,22);
        image(this.sling2,170,22);
        if(this.link.bodyA){
            var posA= this.link.bodyA.position
            var posB= this.link.pointB   
            push();
            strokeWeight(5);
            stroke('#301608');
            line(posA.x-30,  posA.y,  posB.x-10,posB.y);
            line(posA.x-30, posA.y, posB.x+20,posB.y);
            image(this.sling3,posA.x-35,posA.y-10,10,20);
            pop();
        }
        else{
            strokeWeight(5);
            stroke('#301608');
            line(posA.x+30,  posA.y,  posB.x-10,posB.y);
            line(posA.x+30, posA.y, posB.x+20,posB.y);
            image(this.sling3,posA.x+45,posA.y-10,10,20); 
        }
       
    }
    breakLink(){
        this.link.bodyA=null;
    }
}