const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(100,200,200,PI/2);
    pig1 = new Pig(200,250);
    bird1 = new Bird(100,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.display();
    log1.display();
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
}