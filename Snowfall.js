class Snowfall {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp");
        
        World.add(world.this.body);
    }
    display(){
        Fill("purple");
        var posit = this.body.position;
        Push();
        translate(posit.x,posit.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}