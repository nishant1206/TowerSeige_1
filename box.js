class Box {
    constructor(x, y, width, height, color) {
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        if (color == null) {
            color = "white"
        }
        this.color = color;
        // this.image = loadImage("wood1.png");
        // this.image.scale = 0.5;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        // image(this.image, 50, 50)
        pop();
    }
};