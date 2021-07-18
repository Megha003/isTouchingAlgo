var fixed, moving;


function setup() {
  createCanvas(800,400);
  moving = createSprite(400,200,50,50);
  moving.shapeColor="green";
  fixed = createSprite(200,100,30,30);
  fixed.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  moving.x = World.mouseX;
  moving.y = World.mouseY;
  console.log(moving.x - fixed.x);

  if(moving.x - fixed.x < moving.width/2+ fixed.width/2 && fixed.x - moving.x < moving.width/2+fixed.width/2 ){
    moving.shapeColor="red";
    fixed.shapeColor = "red"
  }
  else{
    moving.shapeColor="green";
    fixed.shapeColor = "green";
  }

  drawSprites();
}