speler = new Sprite(225, 825, 50, 50, 'white', false);

let song;
let pic1;
let pic2;
let pic3;
let pic4;
let dock1;
let dock2;
let spritesheet;


function preload() {
	song = loadSound('PuzzelMuziek.mp3');
//	pic1 = loadImage("Left.png");
//	pic2 = loadImage("Right.png");
//	pic3 = loadImage("Up.png");
//	pic4 = loadImage("Down.png");
//	dock1 = loadImage("Dock1.png");
//	dock2 = loadImage("Dock2.png");
	dock2 = loadImage("spritesheet.png");
//	animatie.push(frame);

}

function setup() {
	bg = loadImage('water.png');
	canvas = createCanvas(1200, 900);
	frameRate(60);
	song.play();
}

function draw() {
	clear();
  	background(bg);
  	tekenboten();
	speler.teken();
  	fill('green');
}

function keyPressed () {
	if (keyCode === RIGHT_ARROW) {
		speler.beweeg(1, 0);
		beweegboten();
	} else if (keyCode === LEFT_ARROW) {
		speler.beweeg(-1, 0);
    	beweegboten();
  	} else if (keyCode === UP_ARROW) {
		speler.beweeg(0, -1);
	} else if (keyCode === DOWN_ARROW) {
    	speler.beweeg(0, 1);
  	}
}

