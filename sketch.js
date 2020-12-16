var car,wall;
var speed,weight;

function setup() {
  createCanvas(1800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);


}

function draw() {
  background(255,255,255);

  wall.shapecolor=color(80,80,80);

  Deformation();

  isTouching(wall,car);

    //adjust the depth
    wall.depth = car.depth;
    car.depth = car.depth + 1;

  drawSprites();
}

function Deformation(){
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;

   var deformation=0.5*weight*speed*speed/22500 

   if(deformation>180){
   
    car.shapeColor=color(255,0,0);

   }

   if(deformation<180 && deformation>100){

    car.shapeColor=color(230,230,0);

   }

   if(deformation<100){

    car.shapeColor=color(0,250,0);

   }
   
  }
}
function isTouching(car,wall){
    if(wall.x-car.x>=car.width/2+wall.width/2||
      car.x-wall.x>=car.width/2+wall.width/2||
      wall.y-car.y>=car.height/2+wall.height/2||
      car.y-wall.y>=car.height/2+wall.height/2){
      return false;
    }else{
      return true;
    }
  }