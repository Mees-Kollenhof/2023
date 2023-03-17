function setup() {
	bg = loadImage('water.JPG');
	canvas = createCanvas(1200, 900);
	frameRate(60);
}

/*

class player {
	x;
	y;
	lengte;
	breedte;
	kleur;

	constructor(x, y, lengte, breedte, kleur) {
		this.x = x;
		this.y = y
		this.lengte = lengte;
		this.breedte = breedte
		this.kleur = kleur
}
}
*/


class boot {
	x;
	y;
	lengte;
	breedte;
	kleur;

	constructor(x, y, lengte, breedte, kleur) {
		this.x = x;
		this.y = y
		this.lengte = lengte;
		this.breedte = breedte
		this.kleur = kleur
	}



	teken() {
		push();
		fill(this.kleur);
		rect(this.x, this.y, this.lengte, this.breedte);
		pop();
	}



	beweeg(x) {
		const stap = x * 100;

		if(this.x + stap <= 1100 && stap > 0) {
			this.x += stap;
		} else if(stap > 0) {
			this.x = this.x + stap - 1200;
		} else if(this.x + stap >= 0) {
			this.x += stap
		} else {
			this.x = this.x + stap + 1200;
		}
	}
}



boot1 = new boot (200,700,100,100, 'red');
boot2 = new boot (700,700,100,100, 'red');
boot3 = new boot (400,600,100,100, 'lightblue');
boot4 = new boot (900,600,100,100, 'lightblue');
boot5 = new boot (300,500,100,100, 'yellow');
boot6 = new boot (700,500,100,100, 'yellow');
boot7 = new boot (1000,500,100,100, 'yellow');
boot8 = new boot (100,400,100,100, 'red');
boot9 = new boot (700,400,100,100, 'red');
boot10 = new boot (1000,400,100,100, 'red');
boot11 = new boot (0,300,100,100, 'purple');
boot12 = new boot (400,300,100,100, 'purple');
boot13 = new boot (800,300,100,100, 'purple');
boot14 = new boot (200,200,100,100, 'red');
boot15 = new boot (400,200,100,100, 'red');
boot16 = new boot (900,200,100,100, 'red');
boot17 = new boot (500,100,100,100, 'lightblue');
boot18 = new boot (900,100,100,100, 'lightblue');



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
  boot1.beweeg(4);
  boot2.beweeg(4);
  boot3.beweeg(-3);
  boot4.beweeg(-3);
  boot5.beweeg(-2);
  boot6.beweeg(-2);
  boot7.beweeg(-2);
  boot8.beweeg(4);
  boot9.beweeg(4);
  boot10.beweeg(4);
  boot11.beweeg(1);
  boot12.beweeg(1);
  boot13.beweeg(1);
  boot14.beweeg(-4);
  boot15.beweeg(-4);
  boot16.beweeg(-4);
  boot17.beweeg(3);
  boot18.beweeg(3);
}


function draw() {
	clear();
  background(bg);
  tekenboten();
  fill('green');
  rect(200,800,50,50);
  rect(900,0,50,50);
}
  

function keyPressed () {
  if (keyCode === RIGHT_ARROW) {
    beweegboten();
  } else if (keyCode === LEFT_ARROW) {
    beweegboten();
  } else if (keyCode === UP_ARROW) {
    beweegboten();
  } else if (keyCode === DOWN_ARROW) {
    beweegboten();
  }
}



/*



function tekenplayer() {
	push();
		fill(this.kleur);
		rect(this.x, this.y, this.lengte, this.breedte);
		pop();
}





player1 = new player (200,800,75,75, 'black');



function moveplayer() {
  player1.move(1);
}


move(x) {
	const stap = x * 100;

	if(this.x + stap <= 1100 && stap > 0) {
		this.x += stap;
	} else if(stap > 0) {
		this.x = this.x + stap - 1200;
	} else if(this.x + stap >= 0) {
		this.x += stap
	} else {
		this.x = this.x + stap + 1200;
	}
}

move(y)  {
	const stap = y * 100;

	if(this.y + stap <= 1100 && stap > 0) {
		this.y += stap;
	} else if(stap > 0) {
		this.y = this.y + stap - 1200;
	} else if(this.y + stap >= 0) {
		this.y += stap
	} else {
		this.y = this.y + stap + 1200;
	}
}



moveplayer() {
	if (keyIsDown(LEFT_ARROW)) {
	  moveplayer;
	}
	if (keyIsDown(RIGHT_ARROW)) {
	 moveplayer;
	}
	if (keyIsDown(UP_ARROW)) {
	  moveplayer;
	}
	if (keyIsDown(DOWN_ARROW)) {
	  moveplayer;
	}

}

*/
