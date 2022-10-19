class Ground {
    constructor(x,y,w,h){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke("black");
        fill("yellow");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}