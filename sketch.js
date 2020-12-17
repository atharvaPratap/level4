var ground;
var player;
var g1, g2, g3, g4, g5, g6, g7, g8, g9, g0, g10, g11, g12, g13, g14, g15;
var prot;


function setup() {
  createCanvas(1200,600);
 
  ground = createSprite(400,590,800,20);
  ground.shapeColor = ("yellow")
  player = createSprite(400, 560, 40, 40);
  player.shapeColor = ("red")
  g1 = createSprite(-500, 450, 800, 20);
  g1.shapeColor = ("yellow")
  prot = createSprite(-900, 160, 20, 600);
  prot.shapeColor = ("yellow")
  g2 = createSprite(1300, 450, 800, 20);
  g2.shapeColor = ("yellow")
  g3 = createSprite(2100, 450, 800, 20);
  g3.visible = false;
  g4 = createSprite(2900, 450, 800, 20);
  g4.visible = false;
  g5 = createSprite(3700, 450, 800, 20);
  g5.shapeColor =("yellow")
  g6 = createSprite(4500, 700, 800, 20);
  g6.shapeColor = ("yellow")
  g7 = createSprite(5300, 900, 800, 20);
  g7.shapeColor = ("yellow")
  g8 = createSprite(6100, 800, 800, 20);
  g8.shapeColor = ("yellow")
  g9 = createSprite(6900, 700, 800, 20);
  g9.shapeColor = ("yellow")
  g10 = createSprite(7700, 600, 800, 20);
  g10.shapeColor = ("yellow")
  g11 = createSprite(8500, 500, 800, 20);
  g11.shapeColor = ("yellow")
  g12 = createSprite(9300, 500, 800, 20);
  g12.visible = false;
  g13 = createSprite(10300, 500, 800, 20);
  g13.visible = false;
  g14 = createSprite(11100, 500, 800, 20);
  g14.shapeColor = ("yellow")
  g15 = createSprite(11500, 210, 20, 600);
  g15.shapeColor = ("yellow")






}

function draw() {
  background(215);  


  if(keyDown("up")){
    player.y = player.y -25;
  }
  if(keyDown("down")){
    player.y = player.y +25;
  }
  if(keyDown("right")){
    player.x = player.x +25;
  }
  if(keyDown("left")){
    player.x = player.x -25;
  }
  
  player.velocityY = player.velocityY + 0.6
  player.collide(ground);
  player.collide(g1);
  player.collide(g2);
  player.collide(g3);
  player.collide(g4);
  player.collide(g5);
  player.collide(g6);
  player.collide(g7);
  player.collide(g8);
  player.collide(g9);
  player.collide(g10);
  player.collide(g11);
  player.collide(g12);
  player.collide(g13);
  player.collide(g14);
  player.collide(g15);
  player.collide(prot);
  camera.x = player.x 
  camera.y = player.y
  player.bounceiness = 0.12;

  

  drawSprites();
}