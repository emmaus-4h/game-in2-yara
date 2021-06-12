/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var text1 = "go to the finish";
var text2 = "coins" ;


var spelerX = 600; // x-positie van speler
var spelerY = 300; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var speed = 2; // snelheid bal

var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */


var tekenVeld = function () {
  fill("green");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};

var tekenHoofdveld = function () {
  stroke ("black");
  line (-900,10000,200,100); //grenslijn links
  line (2000,10000,1050,100); //grenslijn rechts
};

/**
 * blauwe lucht
 */
var tekenLucht = function () {
  fill (59,131,189);
  rect (20,20,1240,170);
};

/**
 * wolken
 */
var tekenWolk1 = function () {
  fill (173,216,230);
  ellipse (300,100,100,80); // wolk1.1
  ellipse (350,90,100,80); // wolk1.2
  ellipse (400,110,100,80); // wolk1.3
  ellipse (350,125,100,80); // wolk1.4
};

var tekenWolk2 = function () {
  fill (173,216,230);
  ellipse (900,100,100,80); // wolk2.1
  ellipse (950,90,100,80); // wolk2.2
  ellipse (1000,110,100,80); // wolk2.3
  ellipse (950,125,100,80); // wolk2.4
};

/**
 * bokjes
 */
var tekenBokjes = function () {
  fill ("black");
  rect (800,500,210,140);
  fill ("black");
  rect (300,500,210,140);
};

/**
 * finish
 */

document.write("go to the finish");



var tekenFinish = function () {
  fill (212,175,55);
  rect (480,20,260,170);
  fill (59,131,189);
  rect (505,50,210,140);
  fill ("black");
  textSize(30);
  text ("finish",570,45);
};

var tekenScorebord = function () {
  fill ("white")
  rect (20,20,150,100);
  fill ("black")
  textSize (25);
  text ("score",65,50);
/** 
 * * de score
 *  */
  text ("1",90,90);
}




/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * opbouwing: hoofd,torso,benen,armen
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */


var tekenSpeler = function(x, y) {








  fill("white");
  ellipse(x, y, 63, 63); // hoofd
  fill("red");
  rect (x-50,y+28,90,100); // torso
fill("black");
  rect (x-45,y+130,40,100); // been links
  rect (x+2,y+130,40,100); // been rechts
  fill(200,10,10);
  rect (x-50,y+28,20,100); // arm links
  fill(200,10,10);
  rect (x+35,y+28,20,100); // arm rechts
  fill ("blue");
  rect (x-45,y+225,40,35); // voet links
  rect (x+2,y+225,40,35); // voet rechts
  fill ("white");
  rect (x-50,y+125,20,15); // arm links
  rect (x+35,y+125,20,15); // arm rechts


};

/**
 * tekenGeld
 * 's' in het muntje
 */

var tekenBal = function() {
  fill("yellow");
  ellipse(300, 400, 59, 59);
  

  

};




/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
if (keyIsDown(KEY_LEFT)) {
  spelerX = spelerX - 10;
  
  
}

if (keyIsDown(KEY_RIGHT)) {
  spelerX = spelerX + 10;
}

if (keyIsDown(KEY_SPACE)) {
  spelerY = spelerY - 10;
}

if (keyIsDown(KEY_DOWN )) {
  spelerY = spelerY + 10;
}
};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
   
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('grey');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }
      tekenKogel();
      tekenVeld();
      tekenHoofdveld();
      tekenLucht();
      tekenBokjes ();
      tekenFinish();
      tekenScorebord ();
      tekenBal();
      tekenWolk1();
      tekenWolk2();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
