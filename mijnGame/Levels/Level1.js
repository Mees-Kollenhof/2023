speler = new Sprite(225, 825, 50, 50, 'white', false);

let song;

function preload() {
	song = loadSound('PuzzelMuziek.mp3');
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