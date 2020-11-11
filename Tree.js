class Tree {
    constructor (x, y) {
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, options);
        World.add(world, this.body);

        this.image = loadImage("Plucking+mangoes/tree.png");
    }
    display(){
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    

    }
}