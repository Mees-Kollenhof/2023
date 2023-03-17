var horizontaalX = 1;
var verticaalX =  170;
var horizontaalY = 100;
var verticaalY =  170;

function setup() {
  canvas = createCanvas(600,400);
  canvas.parent('processing');
  frameRate(30);
  background("lightblue");
}

function draw(){
  noStroke();
    fill('brown');
  rect(0,350,650,50);
  tekenvis(100,100);
  }



function tekenvis () {
noStroke();


      if (mouseX <=  300) {
    fill("red" );
  }
  else {
    fill("orange");
    }

  ellipse(100,100,100);
  triangle(100,100,0,50,0,150);
}

