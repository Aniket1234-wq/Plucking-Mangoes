class Ground {
    constructor (x, y, height, width) {
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x, y,height,width, options);
        World.add(world, this.body);
    }
    display(){
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      pop();
    

    }
}