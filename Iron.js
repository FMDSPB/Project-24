class Iron {
    constructor(x, y, width, height) {
        let options = {
            restitution:0.8,
            friction:3,
            density:30
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }

    display() {

        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
        
    }
}