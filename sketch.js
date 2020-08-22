var max,max_img



function preload(){
  max_img = loadImage("images/max.jpg")
}
function setup() {
  createCanvas(1200,400);
  max = createSprite(400, 200, 50, 50);
max.addImage("img", max_img)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}