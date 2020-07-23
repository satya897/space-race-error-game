
var count = 0;
var count1 = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var playerspaceship;
var playerspaceship2;

var divider;

var bagground;

var enemiesgroup;
var enemiesGroup;
var Enemiesgroup;
var EnemiesGroup;
var EnemiesGRoup;
var EnemiesgRoup;
var bulletGroup;

var gameOver ;

var edges;

var restart;
var spaceshipImg;

var restartIMg;

var gameoverIMg;

var baggroundImg;

var spaceship2Img;

var hoopImage;

var ballImage;

var jordanSound; 

function preload(){
  spaceshipImg = loadImage("ball.png")
  spaceship2Img = loadImage("spaceship2.png")
  restartIMg = loadImage("reset.png.jpg")
  gameoverIMg = loadImage("gameover.png.jpg")
  baggroundImg = loadImage("background.png")
  hoopImage = loadImage("hoop.png")
  ballImage = loadImage("jordan.png")
  jordanSound = loadSound("battle001.mp3")
}



function setup() {

  createCanvas(windowWidth, windowHeight)

   playerspaceship = createSprite(windowWidth - 50,windowHeight - 70,2,29)
  playerspaceship.addImage(spaceshipImg);
  playerspaceship.scale = 0.3;
  
  playerspaceship2 = createSprite(windowWidth - 150,windowHeight - 70,2,29); 
  playerspaceship2.addImage(spaceshipImg);
  playerspaceship2.scale = 0.3;
  
   bagground  = createSprite(400,400,1200,0);
  bagground.addImage(baggroundImg);
  bagground.scale = 1.5;
  
  
   enemiesgroup = new Group();
 enemiesGroup = new Group();
   Enemiesgroup = new Group();
   EnemiesGroup = new Group();
   EnemiesGRoup = new Group();
   EnemiesgRoup = new Group();
   bulletGroup = new Group();
  
   gameOver = createSprite(windowWidth - 800,windowHeight - 300,30,30); 
  gameOver.addImage(gameoverIMg);
  gameOver.scale = 0.7;
  gameOver.visible = false;
  
   restart = createSprite(windowWidth - 800,windowHeight - 200,20,20);
  restart.addImage(restartIMg);
  restart.scale = 0.2;
  restart.visble = false;

    divider = createSprite(windowWidth - 730,windowHeight - 90,30,80)
    divider.visible = false
}

function draw() {
  
  background(0);

edges =  createEdgeSprites()
 
if (gameState === PLAY) {
  
  bagground.velocityY = -4;

playerspaceship.bounceOff(edges[0]);
playerspaceship2.bounceOff(edges[0]);

if (bagground.y < 0){
    bagground.y = bagground.height/2;
}

playerspaceship.x = constrain(World.mouseX,0,600);

restart.visible = false;
gameOver.visible = false;
divider.visible = false

spawnenemies();
spawnEnemies();
Spawnenemies();
createbullet();
spaWnEnemies();
SpawnenEmies();
SpawnenemIes();

if(keyDown(RIGHT_ARROW)){
  playerspaceship2.x = playerspaceship2.x + 10;

}

if(keyDown(LEFT_ARROW)){
  playerspaceship2.x = playerspaceship2.x - 10;
  
}

playerspaceship2.collide(divider);

enemiesgroup.depth = playerspaceship.depth;
playerspaceship.depth = playerspaceship.depth + 1;
playerspaceship2.depth = playerspaceship2.depth + 5;

 if (keyDown("space")) {
    createbullet(playerspaceship.x);
 }

 if (keyDown("UP_ARROW")) {
  createbullet(playerspaceship2.x);
}

if(bulletGroup.isTouching(enemy)){
      enemy.destroy();
    bulletGroup.destroyEach();  
  jordanSound.play()
     count = count + 2;
    }
    
if(bulletGroup.isTouching(Enemy)){
      Enemies.destroy();
      bulletGroup.destroyEach();
      jordanSound.play()
     count = count + 2;
    }
    
if(bulletGroup.isTouching(Enemy1)){
      Enemy1.destroy();
      bulletGroup.destroyEach();
      jordanSound.play()
     count = count + 2;
    }
    
    if(bulletGroup.isTouching(EnemiesgRoup)){
      Enemy2.destroy();
      bulletGroup.destroyEach();
      jordanSound.play()
     count1 = count1 + 2;
    }

    if(bulletGroup.isTouching(EnemiesGroup)){
      EnemiesGroup.destroyEach();
      bulletGroup.destroyEach();
      jordanSound.play()
     count1 = count1 + 2;
    }

    if(bulletGroup.isTouching(EnemiesGRoup)){
      EnemiesGRoup.destroyEach();
      bulletGroup.destroyEach();
      jordanSound.play()
     count1 = count1 + 2;
    }

if (enemiesGroup.isTouching(edges[3])) {
    count  = count - 1;
  } 
  
  if (Enemiesgroup.isTouching(edges[3])) {
    count = count - 1;
  }    
  
  if (enemiesgroup.isTouching(edges[3])) {
    count = count - 1;
  }  
  
  if (EnemiesGroup.isTouching(edges[3])) {
    count1 = count1 - 1;
  }  
  
  if (EnemiesgRoup.isTouching(edges[3])) {
    count1 = count1 - 1;
  }  

  if (EnemiesGRoup.isTouching(edges[3])) {
    count1 = count1 - 1;
  }  

}
if(enemiesgroup.isTouching(playerspaceship)){
  gameState = END;
}

if(Enemiesgroup.isTouching(playerspaceship)){
  gameState = END;
}

if(enemiesGroup.isTouching(playerspaceship)){
  gameState = END;
}

if(EnemiesGroup.isTouching(playerspaceship)){
  gameState = END;
}

if(EnemiesgRoup.isTouching(playerspaceship)){
  gameState = END;
}

if(EnemiesGRoup.isTouching(playerspaceship)){
  gameState = END;
}

if(enemiesgroup.isTouching(playerspaceship2)){
  gameState = END;
}

if(Enemiesgroup.isTouching(playerspaceship2)){
  gameState = END;
}

if(enemiesGroup.isTouching(playerspaceship2)){
  gameState = END;
}

if(EnemiesGroup.isTouching(playerspaceship2)){
  gameState = END;
}

if(EnemiesgRoup.isTouching(playerspaceship2)){
  gameState = END;
}

if(EnemiesGRoup.isTouching(playerspaceship2)){
  gameState = END;
}

  else if (gameState === END){
    

  bulletGroup.velocityY = 0;
  playerspaceship.velocityX = 0;
 playerspaceship2.velocityX = 0;
  bagground.velocityY = 0;

  enemiesgroup.setVelocityYEach(0);
  Enemiesgroup.setVelocityYEach(0);
  enemiesGroup.setVelocityYEach(0);
  EnemiesgRoup.setVelocityYEach(0);
  EnemiesGroup.setVelocityYEach(0);
  EnemiesGRoup.setVelocityYEach(0);
  bulletGroup.setVelocityYEach(0)
  
  enemiesGroup.setLifetimeEach(-1);
  Enemiesgroup.setLifetimeEach(-1);
  EnemiesgRoup.setLifetimeEach(-1);
  EnemiesGRoup.setLifetimeEach(-1);
  EnemiesGroup.setLifetimeEach(-1);
  enemiesgroup.setLifetimeEach(-1);
  bulletGroup.setLifetimeEach(-1);

  gameOver.visible = true;
  restart.visible = true;
  divider.visible = false

  }
  
  if(mousePressedOver(restart)){
    reset();
  }
  
  drawSprites();

text("PLAYER SCORE: "+ count, windowWidth - 1350, windowHeight - 550);
text("PLAYER2 SCORE:"+ count1,windowWidth - 200,windowHeight - 550)
}

function reset(){
  
  gameState = PLAY;
  
gameOver.visible = false;
restart.visible = false;
divider.visible = false

enemiesgroup.destroyEach();
enemiesGroup.destroyEach();
Enemiesgroup.destroyEach();
EnemiesGRoup.destroyEach();
EnemiesgRoup.destroyEach();
EnemiesGroup.destroyEach();
bulletGroup.destroyEach();

count = 0;
count1 =  0;
}
function createbullet(x){
  if(frameCount % 7 === 0){
 var bullet= createSprite(100, 50, 5, 10);
  bullet.y = playerspaceship.y - 35;
  bullet.x = x;                                           
  bullet.addImage(ballImage)
  bullet.scale = 0.02;
  bullet.velocityY = -4;
  bullet.lifetime = 100;
  bulletGroup.add(bullet);
  }
}

  function spawnenemies() { 
  if(frameCount % 100 === 0) {
  var enemy = createSprite(windowWidth - 1300,windowHeight - 620,16,55);
  enemy.velocityY = 4 ;
  var rand =Math.round( random(1,4));
  enemy.addImage(hoopImage);
  enemy.scale = 0.1;
  enemy.lifetime = 200;
  enemiesgroup.add(enemy);
  }    
  
  }
  
function spawnEnemies() { 
 if(frameCount % 80 === 0) {
    var Enemy = createSprite(windowWidth - 1100,windowHeight - 620,10,40);
  Enemy.velocityY = 5;
    var rand = Math.round(random(1,4));
    Enemy.addImage(hoopImage);
    Enemy.scale = 0.1;
    Enemy.lifetime = 200;
  
  Enemiesgroup.add(Enemy);
  }   
  
} 

function Spawnenemies() { 
 if(World.frameCount % 65 === 0) {
    var enemy1 = createSprite(windowWidth - 900,windowHeight - 620,10,40);
    enemy1.velocityY = 6 ;
    var rand = Math.round(random(1,4));
    enemy1.addImage(hoopImage);
    enemy1.scale = 0.1;
    enemy1.lifetime = 200;
  
  enemiesGroup.add(enemy1);
  } 
  
} 

function spaWnEnemies() { 
  if(frameCount % 80 === 0) {
     var Enemy1 = createSprite(windowWidth - 500,windowHeight - 620,10,40);
   Enemy1.velocityY = 5;
     var rand = Math.round(random(1,4));
     Enemy1.addImage(hoopImage);
     Enemy1.scale = 0.1;
     Enemy1.lifetime = 200;
    
   EnemiesGroup.add(Enemy1);
   }   
   
 } 
 
 function SpawnenemIes() { 
  if(World.frameCount % 65 === 0) {
     var Enemy2 = createSprite(windowWidth - 300,windowHeight - 620,10,40);
     Enemy2.velocityY = 6 ;
     var rand = Math.round(random(1,4));
     Enemy2.addImage(hoopImage);
     Enemy2.scale = 0.1;
     Enemy2.lifetime = 200;
   
   EnemiesGRoup.add(Enemy2);
   } 
   
 } 

 function SpawnenEmies() { 
  if(frameCount % 100 === 0) {
  var Enemy3 = createSprite(windowWidth - 100,windowHeight - 620,16,55);
  Enemy3.velocityY = 6 ;
  var rand =Math.round( random(1,4));
  Enemy3.addImage(hoopImage);
  Enemy3.scale = 0.1;
  Enemy3.lifetime = 200;
  EnemiesgRoup.add(Enemy3);
  }    

}