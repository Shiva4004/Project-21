var Bullet,wall;
var speed, weight; 
function setup() {
createCanvas(1600, 400);
speed=random(55,90)
weight=random(400,1500)
Bullet=createSprite(50, 200, 50,50);   
Bullet.velocityX = speed;
Bullet.shapeColor=color(255);
wall=createSprite(1500,200, 60, height/2)
wall.shapeColor=color(80,80,80)
}
function draw() {
background(0);
if(wall.x-Bullet.x < (Bullet.width+wall.width)/2)
{
Bullet.velocityX=0;
var deformation=0.5 * weight * speed* speed/22500;
if(deformation>180)
{
Bullet.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
Bullet.shapeColor=color(230,230,0);
}
if(deformation<100)
{
Bullet.shapeColor=color(0,255,0);
}
}
drawSprites();
}