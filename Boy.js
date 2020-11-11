class Stone {
    constructor (x, y) {
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, options);
        World.add(world, this.body);

        this.image = loadImage("Plucking+mangoes/stone.png");
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    

    }
}