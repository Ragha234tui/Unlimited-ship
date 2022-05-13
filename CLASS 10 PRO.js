var weight =[10,100,1000,10000,100000,1000000]
function setup() 
{
  createCanvas(400,400);
  var sum =weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5]
  var average =sum/6
  console.log(average)
}

function draw() 
{
background(51);

}

function preload(){
//shipImg1 = loadAnimation("ship.1.png");
//shipImg1 = loadAnimation("ship.1");
//shipImg1 = loadAnimation("ship.1.png","ship.2.png","ship.1.png","ship.2.png");
//shipImg1 = loadAnimation("ship.1","ship.2","ship.1","ship.2");

if(sea.x < 0){
  //sea.x = 0
  //sea.x = sea.width;
  //sea.x = sea.width/8;
  //sea.y = height; 