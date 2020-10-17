class Link{
    constructor(body1,body2){
        var option={
         bodyA :body1,
         bodyB : body2,
         length :100,
         stiffness :0.1
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        strokeWeight(3);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}