function preload() {
	song = loadSound('PuzzelMuziek.mp3');
	background = loadImage('Backgrounds/water.png');
}

function setup() {
	canvas = createCanvas(1200, 900);
	frameRate(60);
	song.play();
}

class Sprite {
    x;
	y;
	lengte;
	breedte
	kleur;
	plaatje;
    wraparound;

	constructor(x, y, lengte, breedte, kleur = color(0, 0, 0), plaatje, wraparound) {
		this.x = x;
		this.y = y
		this.lengte = lengte;
		this.breedte = breedte;
		this.kleur = kleur;
		this.plaatje = plaatje
		this.wraparound = wraparound;
	}

	beweeg(x, y) {
		const stapX = x * 100;
		const stapY = y * 100;
	
		if(this.wraparound === true) {
			if(this.x + stapX <= 1100 && stapX > 0) {
				this.x += stapX;
			} else if(stapX > 0) {
			this.x = this.x + stapX - 1200;
			} else if(this.x + stapX >= 0) {
			this.x += stapX;
		} else {
				this.x = this.x + stapX + 1200;
			}
	
			if(this.y + stapY <= 800 && stapY > 0) {
				this.y += stapY;
		   } else if(stapY > 0) {
				this.y = this.y + stapY - 900;
			} else if(this.y + stapY >= 0) {
				this.y += stapY;
			} else {
				this.y = this.y + stapY + 900;
			}
		 } else {
			this.x += stapX;
			this.y += stapY;
		}
	}

	teken() {
		push();
		fill(this.kleur);
		rect(this.x, this.y, this.lengte, this.breedte);
		pop();
	}
}

speler = new Sprite(225, 725, 50, 50, 'red', false);

boot1 = new Sprite(200,700,100,100, 'red', true);
boot2 = new Sprite(700,700,100,100, 'red', true);
boot3 = new Sprite(400,600,100,100, 'lightblue', true);
boot4 = new Sprite(900,600,100,100, 'lightblue', true);
boot5 = new Sprite(300,500,100,100, 'yellow', true);
boot6 = new Sprite(700,500,100,100, 'yellow', true);
boot7 = new Sprite(1000,500,100,100, 'yellow', true);
boot8 = new Sprite(100,400,100,100, 'red', true);
boot9 = new Sprite(700,400,100,100, 'red', true);
boot10 = new Sprite(1000,400,100,100, 'red', true);
boot11 = new Sprite(0,300,100,100, 'purple', true);
boot12 = new Sprite(400,300,100,100, 'purple', true);
boot13 = new Sprite(800,300,100,100, 'purple', true);
boot14 = new Sprite(200,200,100,100, 'red', true);
boot15 = new Sprite(400,200,100,100, 'red', true);
boot16 = new Sprite(900,200,100,100, 'red', true);
boot17 = new Sprite(500,100,100,100, 'lightblue', true);
boot18 = new Sprite(900,100,100,100, 'lightblue', true);
	
function tekenboten() {
	boot1.teken();
	boot2.teken();
	boot3.teken();
	boot4.teken();
	boot5.teken();
	boot6.teken();
	boot7.teken();
	boot8.teken();
	boot9.teken();
	boot10.teken();
	boot11.teken();
	boot12.teken();
	boot13.teken();
	boot14.teken();
	boot15.teken();
	boot16.teken();
	boot17.teken();
	boot18.teken();
}
	
function beweegboten() {
	boot1.beweeg(4, 0);
	boot2.beweeg(4, 0);
	boot3.beweeg(-3, 0);
	boot4.beweeg(-3, 0);
	boot5.beweeg(-2, 0);
	boot6.beweeg(-2, 0);
	boot7.beweeg(-2, 0);
	boot8.beweeg(4, 0);
	boot9.beweeg(4, 0);
	boot10.beweeg(4, 0);
	boot11.beweeg(1, 0);
	boot12.beweeg(1, 0);
	boot13.beweeg(1, 0);
	boot14.beweeg(-4, 0);
	boot15.beweeg(-4, 0);
	boot16.beweeg(-4, 0);
	boot17.beweeg(3, 0);
	boot18.beweeg(3, 0);
}

function draw() {
	tekenboten();
	clear();
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
}