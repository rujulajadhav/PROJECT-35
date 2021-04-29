var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
 dogImage = loadImage("images/dogImg.png");
 happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite();

  database = firebase.database
  foodStock = database.ref("Food")
  foodStock.on("value", readStock)

}

function draw() {  
background(46, 139, 87);
 if(keyWentDown(UP_ARROW)){
   writeStock(FoodS);
   dog.addImage(dogHappy);

 if(foodS!==undefined){
   textSize(25);
   fill(320);
   text("Note: Press UP_ARROW Key To Feed Drago Milk!")
   text("Food Remaining: " +FoodS, 150, 150);

 }

 }

  drawSprites();
   
  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }

    database.ref('/').update({
      Food:x
    })
  }
}



