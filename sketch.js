var car ,wall

var speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(20, 200, 20, 20);
  car.velocityX=speed;
  car.shapeColor=color(225)


 wall = createSprite(1300,200,15,height/2);
  wall.shapeColor=color("White")


}

function draw() {
  background("Black");  
if(wall.x-car.x < (car.width + wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509
  if(deformation > 180 ){
 car.shapeColor=color("yellow");
  }
  if(deformation < 180 && deformation > 100){
    car.shapeColor=color("red");
  }
  if(deformation<100){
    car.shapeColor=color("green");
  }
}


  drawSprites();
}