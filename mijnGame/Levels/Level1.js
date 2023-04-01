//var animatie: []
//var aantalplaatjes: 4
//var plaatjesnummer: 0

//Het lukte mij helaas niet om de animatie voor de speler te laten werken
//daarom zijn de variabelen gecomment zodat de pagina wel werkt

let song;
let bg;
//dit zijn twee variabele types voor de achtergrondmuziek en de achtergrond

function preload() {
	song = loadSound('PuzzelMuziek.mp3');
	//Dit is mijn zelfgekozen muziek. een mix van verschillende nummers
	bg = loadImage('Backgrounds/water.png');
	img1 = loadImage('dock1.png');
	img = loadImage('dock2.png');
	//Dock 1 en 2 zijn zelf gemaakt

		//for (var b = 0;b < aantalplaatjes;b++) {
		//frame = loadImage("Plaatjes/speler" + b + ".png");
		//speler.animatie.push(frame);
		//}

		//dit werkte helaas niet, daarom moest ik het commenten zodat de pagina wel kon werken
}



function setup() {
	canvas = createCanvas(1200, 900);
	//dit is mijn gekozen grootte
	frameRate(60);
	song.play();
}

class Sprite {
	//hier staat alle informatie in voor een sprite om getekend te worden
    x;
	//horizontaal
	y;
	//verticaal
	lengte;
	breedte
	kleur;
    wraparound;
	//als iets van het scherm af gaat, dan komt het dankzij de wraparound functie aan de andere kant weer terecht
	//wraparound heeft geen invloed op de speler want anders zou het te makkelijk gaan
	

	constructor(x, y, lengte, breedte, kleur, wraparound) {
		this.x = x;
		this.y = y
		this.lengte = lengte;
		this.breedte = breedte;
		this.kleur = kleur;
		this.wraparound = wraparound;
	}

	beweeg(x, y) {
		const stapX = x * 100;
		const stapY = y * 100;
		//hoe groot moet een stap zijn
	
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

speler = new Sprite(225, 825, 50, 50, 'red', false);
//de speler zelf

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
//en alle boten
	
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
	//hier kan je alle boten tekenen
}


function tekenspeler() {
	speler.teken();
	//speler.toon();
	//hier kan de speler getekend worden
}

function tekendock1 () {
	image(img,900,0,100,100);
	noFill();
	//hier kan de dock getekend worden
}

function tekendock2 () {
	image(img1,200,800,100,100);
	noFill();
	//hier kan de tweede dock getekend worden
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
	//dit zijn de snelheden van alle boten
}

function draw() {
	clear();
	background(bg);	
	tekendock1();
	tekendock2();
	tekenboten();
	tekenspeler();
	//hier word alles daadwerkelijk getekend
}

function keyPressed () {
	if (keyCode === RIGHT_ARROW) {
		speler.beweeg(1, 0);
		//this.plaatjesnummer = 4;
		beweegboten();
	} else if (keyCode === LEFT_ARROW) {
		speler.beweeg(-1, 0);
		//this.plaatjesnummer = 3;
		beweegboten();
  	} else if (keyCode === UP_ARROW) {
		speler.beweeg(0, -1);
		//this.plaatjesnummer = 1;
	} else if (keyCode === DOWN_ARROW) {
    	speler.beweeg(0, 1);
		//this.plaatjesnummer = 2;

//de snelheden bij de bijbehorende gekozen toetsen

  	}
	  //toon() {
	  //plaatjes(this.animatie[this.plaatjesnummer],this.x,this.y);
	  //}
}

/* 
Dingen die ik graag nog had willen toevoegen maar waar ik geen tijd voor had

-Speler animatie, de sprites staan in de plaatjes map en er is al gecommente code maar ik had te weinig tijd om het te laten werken.
-Water = af, als je het water aanraakt dan ga je terug naar het begin
-Boten, dat de boten je meenamen in plaats van dat ze zonder jou ervandoor gaan en jou in het water achterlaten

Ik vond dit een flinke uitdaging maar ik ben tevreden met het werk dat ik heb
ik  hoop hiermee een 6,5 te halen om een compensatiepunt voor het examen te blijven
Ik heb erg veel met codes zitten werken maar ik kon ook creatief zijn met het maken van pixelart
*/