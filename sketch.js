var garden,rabbit,apple,leaf1,leaf2,leaf3;
var gardenImg,rabbitImg,appleImg,leaf1Img,leaf2Img,leaf3Img;
var x;
var y;
var c;
var d;
var e;
var f;
var g;
var h;
var score = 0;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaf1Img = loadImage("leaf.png");
  leaf2Img = loadImage("orangeLeaf.png");
  leaf3Img = loadImage("redImage.png");
}

function setup(){
  createCanvas(400,400);
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  x = Math.round(random(30,370));
  y = Math.round(random(30,370));
  c = Math.round(random(30,370));
  d = Math.round(random(30,370));
  edges = createEdgeSprites();
}

function draw() {
  background("white");
  rabbit.collide(edges);
  if(keyDown("UP_ARROW")){
    rabbit.y = rabbit.y - 7.5;
  }
  if(keyDown("DOWN_ARROW")){
    rabbit.y = rabbit.y + 7.5;
  }
  if(keyDown("LEFT_ARROW")){
    rabbit.x = rabbit.x - 7.5;
  }
  if(keyDown("RIGHT_ARROW")){
    rabbit.x = rabbit.x + 7.5;
  }
  //text("Score: " + score,200,200);
  fill("yellow");
  if (frameCount % Math.round(100,300) === 0){
    apple = createSprite(x,y,1,1);
    apple.addImage(appleImg);
    apple.scale = 0.05;
    apple.velocityY = 5;
    apple.lifetime = 100;
    x = Math.round(random(30,370));
    y = Math.round(random(30,370));
  }
  if (frameCount % Math.round(100,300) === 0){
    leaf1 = createSprite(c,d,1,1);
    leaf1.addImage(leaf1Img);
    leaf1.scale = 0.05;
    c = Math.round(random(30,370));
    d = Math.round(random(30,370));
    leaf1.velocityY = 3;
    leaf1.lifetime = 150;
  }
  if (frameCount % Math.round(100,300) === 0){
    leaf2 = createSprite(e,f,1,1);
    leaf2.addImage(leaf2Img);
    leaf2.scale = 0.05;
    e = Math.round(random(30,370));
    f = Math.round(random(30,370));
    leaf2.velocityY = 6;
    leaf2.lifetime = 150;
  }
  if (frameCount % Math.round(100,300) === 0){
    leaf3 = createSprite(g,h,1,1);
    leaf3.addImage(leaf3Img);
    leaf3.scale = 0.05;
    g = Math.round(random(30,370));
    h = Math.round(random(30,370));
    leaf3.velocityY = 2;
    leaf3.lifetime = 150;
  }
  drawSprites();
}