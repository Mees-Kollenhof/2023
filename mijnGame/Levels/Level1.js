//var animatie = [];
//var aantalplaatjes = 4;
//var nummer = 2;
//var frame;



//let speler1;
//let speler2;
//let speler3;
//let speler4;
//let dock1;
//let dock2;


function preload() {
	song = loadSound('PuzzelMuziek.mp3');
	bg = loadImage('Backgrounds/water.png');
	//for (var b = 1;b < aantalplaatjes;b++) {
		//frame = loadImage("Plaatjes/speler" + b + ".png");
		//animatie.push(frame);
	}


function setup() {
	
	//speler1 = new Sprite(225, 825, 100, 100, 'white', false, animatie);
	canvas = createCanvas(1200, 900);
	frameRate(60);
	song.play();
}

function draw() {
	clear();
  	background(bg);
  	tekenboten();
	//speler.teken();
  	//fill('green');
}

function keyPressed () {
	if (keyCode === RIGHT_ARROW) {
		speler.beweeg(1, 0);
		nummer = 4;		
		beweegboten();

	} else if (keyCode === LEFT_ARROW) {
		speler.beweeg(-1, 0);
    	nummer = 3;
		beweegboten();
		
  	} else if (keyCode === UP_ARROW) {
		speler.beweeg(0, -1);
		nummer = 1;

	} else if (keyCode === DOWN_ARROW) {
    	speler.beweeg(0, 1);
		nummer = 2;
  	}

	//image(animatie[nummer]);

	}

