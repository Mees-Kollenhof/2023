var animatie = [];
var aantalplaatjes = 4;
var nummer = 1;


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
	bg = loadImage('Backgrounds/water.png');
	for (var a = 0;b < aantalplaatjes;a++) {
		frame = loadImage("MijnGame/Plaatjes/speler_" + a + ".png");
		animatie.push(frame);
}
}

function setup() {
	
	speler = new Sprite(225, 825, 50, 50, 'white', false, animatie);
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

