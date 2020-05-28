import Dice from "./dice.js";
import Roll from "./rollAllButton.js";
//import AllPoints from "./points.js";
import Table from "./table.js";
import Button from "./button.js";

//let points = 0;
let dices = [];
let tables1 = [];
let tables2 = [];

let roll1 = new Roll(205, 25, 255, 50, "Roll!", dices);
//let allPoints = new Points(205, 185, 255, 50, "Points!");

for (let i = 0; i < 5; i++) {
  dices.push(new Dice(100 + i * 100, 100, 60, 60));
}

for (let i = 0; i < 6; i++) {
  tables1.push(new Table(160, 200 + i * 39, 20, 20, dices, i));
}

for (let i = 0; i < 6; i++) {
  tables2.push(new Table(530, 200 + i * 39, 20, 20, dices, i));
}

window.mouseClicked = mouseClicked;
function mouseClicked() {
  // button.mouseClicked();

  for (let i = 0; i < 5; i++) {
    dices[i].mouseClicked();
  }

  if (roll1.rollAnzahl == 3) {
    for (let i = 0; i < 6; i++) {
      if (tables1[i].mouseClicked()) {
        roll1.rollAnzahl = 0;
      }
    }
  }

  if (roll1.rollAnzahl == 3) {
    for (let i = 0; i < 6; i++) {
      if (tables2[i].mouseClicked()) {
        roll1.rollAnzahl = 0;
      }
    }
  }

  roll1.mouseClicked();
  //  allPoints.mouseClicked();
}

window.draw = draw;
function draw() {
  noStroke();
  //tabellenlayout
  // background(5, 0, 25);

  //FunkyKniffel

  for (let i = 0; i < 25; i++) {
    let b = i * 10;
    fill("blue");
    rect(205 + b, 185 + b, 255 - b, 255 - b);
    fill("purple");
    rect(210 + b, 190 + b, 245 - b, 245 - b);
  }

  fill("white");
  textSize(30);
  text("Funky Kniffel 🎲", 230, 190, 255, 255);
  textSize(25);
  text("Roll 3x & enter points!", 210, 410, 255, 255);

  //P1 Schild
  fill("blue");
  rect(100, 25, 95, 50);
  fill("white");
  textSize(25);
  text("P1", 135, 35, 95, 50);

  let n = 180;
  //tabelle P1
  fill("blue");
  rect(100, 185, 100, 255);
  fill(255, 255, 255);

  for (let i = 1; i < 7; i++) {
    fill(255, 255, 255);
    n = n + 40;
    textSize(15);
    text(i, 115, n - 20, 255);
    //   rect(160, n - 20, 20, 20);
  }

  //P2 Schild
  fill("purple");
  rect(470, 25, 95, 50);
  fill("white");
  textSize(25);
  text("P2", 505, 35, 95, 50);

  //Tabelle P2
  fill("purple");
  rect(465, 185, 100, 255);
  fill(255, 255, 255);
  n = 180;
  for (let i = 1; i < 7; i++) {
    n = n + 40;
    text(i, 485, n - 20, 255);
    //   rect(525, n - 20, 20, 20);
  }
  //tabellenlayout ende

  //Kniff von Leander / Kitty
  for (let element of dices) {
    element.display();
  }

  for (let element of tables1) {
    element.display();
  }

  for (let element of tables2) {
    element.display();
  }

  roll1.display();

  //allPoints.display();
  // theEnd();
}
