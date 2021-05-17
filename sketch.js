const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird, bird_2, pig, logs, str;
var box_state = "fly";

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height - 30, 1200, 20);
    box1 = new Box(625, 540, 35, 35, "white");
    box2 = new Box(675, 540, 35, 35, "yellow");
    box3 = new Box(725, 540, 35, 35, "green");
    box4 = new Box(775, 540, 35, 35, "orange");
    box5 = new Box(825, 540, 35, 35);
    box6 = new Box(875, 540, 35, 35);

    box7 = new Box(650, 505, 35, 35);
    box8 = new Box(700, 505, 35, 35);
    box9 = new Box(750, 505, 35, 35);
    box10 = new Box(800, 505, 35, 35);
    box11 = new Box(850, 505, 35, 35);

    box12 = new Box(675, 470, 35, 35);
    box13 = new Box(725, 470, 35, 35);
    box14 = new Box(775, 470, 35, 35);
    box15 = new Box(825, 470, 35, 35);

    box16 = new Box(700, 435, 35, 35);
    box17 = new Box(750, 435, 35, 35);
    box18 = new Box(800, 435, 35, 35);

    // box19 = new Box(400, 435, 35, 35);

    // bird = new Bird(80, 80);
    bird_2 = new Bird(200, 200);

    str = new Rope(bird_2.body, { x: 200, y: 200 });



}

function draw() {
    background(255);
    Engine.update(engine);

    fill("black");
    text(mouseX, 200, 30);
    text(mouseY, 250, 30);

    // bird.display();
    bird_2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();

    // box19.display();
    str.display();

    ground.display();
    // Bodies.applyForce();
}

function mouseDragged() {
    Matter.Body.setPosition(bird_2.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    str.fly();
}