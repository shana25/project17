
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup()
{
  
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running );
  monkey.scale=0.1;
  
  ground=createSprite(400,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
 bananaGroup=new Group()
 obstacleGroup=new Group()
}


function draw()
{
  background("white");
  
  if(ground.x < 0)
  {
     ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 170)
  {
    monkey.velocityY=-10;
  
  }
 monkey.velocityY = monkey.velocityY+0.8;
  
 monkey.collide(ground);
  
  spawnBananas()
 spawnObstacles()
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
 
  
  drawSprites();
}

function spawnBananas()
{
  if (frameCount %80===0)
  {
    banana=createSprite(600,Math.round(random(120,200)),10,10)
    banana.addImage("banana",bananaImage);
    banana.velocityX=-2;
    banana.scale=0.1
    bananaGroup.add(banana)
    banana.lifetime=300;
  }
  
}

function spawnObstacles()
{
  if (frameCount %300===0)
  {
    obstacle=createSprite(600,Math.round(random(325,330)),10,10)
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1
    obstacleGroup.add(obstacle)
    obstacle.lifetime=300;
  
  }
}














