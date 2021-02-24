var balloon,database;
function preload(){
bg=loadImage("images/balloon1.png")
b=loadImage("images/b.png")
}

function setup() {
  database=firebase.database();
console.log(database)
  createCanvas(500,500);
  balloon=createSprite(250,250,100,100)
  balloon.addImage(b);
  balloon.scale=0.2
 var p=database.ref('balloon/position');
  p.on("value",readPosition);

}

function draw() {
  background(bg); 
  text("press arrow keys to move",200,20) ;
  if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10
  }else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10
  }else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10
  }else if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10
  }
  drawSprites();
}
function readPosition(){
  position=data.val();
  position.x=balloon.x
  position.y=balloon.y
}
function writePosition(){
  database.ref('balloon/position').set({
    'x':position.x,
    'y':position.y
  })
}
