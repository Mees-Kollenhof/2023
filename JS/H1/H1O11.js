var horizontaalA = 1;
var verticaalA =  170;
var horizontaalB = 100;
var verticaalB =  170;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  stroke('white');
  strokeWeight(10);
  frameRate(100);
}

function draw() {
  background('orange');
  fill('white');
  rect(0,0,width,40);
  fill('black');  
  text("Het middelpunt van de cirkel bevindt zich in [x,y] = [" + horizontaalA + "," + verticaalA + "]",10,30);
  fill('dodgerblue');
  ellipse(horizontaalA,verticaalA,200);
  horizontaalA += 10;
  fill('darkred');
  ellipse(horizontaalB,verticaalB,120);
  horizontaalB += 1;
  if (horizontaalA > 900) {
    horizontaalA = 120;
  }
}