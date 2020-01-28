const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(30,-200,50,50);
    box2 = new Box(30,60,50,300);
    box3 = new Box(85,-20,50,50);
    box4 = new Box(85,60,50,100);
    box5 = new Box(140,-600,50,50);
    box6 = new Box(140,60,50,150);
    box7 = new Box(195,-400,50,50);
    box8 = new Box(195,60,50,200);
    box9 = new Box(250,-600,50,50);
    box10 = new Box(250,60,50,150);
    box11 = new Box(305,-20,50,50);
    box12 = new Box(305,60,50,100);
    box13 = new Box(360,-200,50,50);
    box14 = new Box(360,60,50,300);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
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
    ground.display();
   
}