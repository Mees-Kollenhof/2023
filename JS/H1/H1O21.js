var x = 120;
var snelheid = 30;
var diameter = 200;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(30);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  noStroke();
  rect(0,0,width,40);
  fill('black');  
  text("De bol beweegt heen en weer (snelheid = " + snelheid + "). | Klik met je muis!",10,30);
  stroke('white');
  strokeWeight(10);

  if (snelheid == 5) {
      fill('green');
  }
  else {
    fill('dodgerblue');
  }
  
  if (mouseIsPressed == false) {
    diameter = 100;
  }
  else {
    diameter = 200;
  }
  
  if (x > 880 || x < 120) {
    snelheid = -1*snelheid;
  }

  x += snelheid;
  ellipse(x,170,diameter);
}

// ______  _____  _____ ___  ___           
// |  _  \|  _  ||  _  ||  \/  |           
// | | | || | | || | | || .  . |           
// | | | || | | || | | || |\/| |           
// | |/ / \ \_/ /\ \_/ /| |  | |           
// |___/   \___/  \___/ \_|  |_/           
//  _____  _                             _ 
// |  ___|| |                           | |
// | |__  | |_  ___  _ __  _ __    __ _ | |
// |  __| | __|/ _ \| '__|| '_ \  / _` || |
// | |___ | |_|  __/| |   | | | || (_| || |
// \____/  \__|\___||_|   |_| |_| \__,_||_|