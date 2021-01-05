var head,com1,com2,com3,com4;
var c1,c2,c3,c4,buy;

function setup() {


  createCanvas(600,600);

  //to create heading
  head = createElement("H1");
  head.html("Shonen Jumps");
  head.position(200,40);

  //name of the comics
  com1 = createElement("h3");
  com1.html("One Piece");
  com1.position(300,200);

  com2 = createElement("h3");
  com2.html("Bleach");
  com2.position(300,250);

  com3 = createElement("h3");
  com3.html("Tales of Demons and Gods");
  com3.position(300,400);

  com4 = createElement("h3");
  com4.html("Battle Through Heavens");
  com4.position(300,450);

  //creating checkbox
  c1 = createCheckbox();
  c1.position(280,220);

  c2 = createCheckbox();
  c2.position(280,270);

  c3 = createCheckbox();
  c3.position(280,420);

  c4 = createCheckbox();
  c4.position(280,470);
  
  //the button to go to the next window
  buy = createButton("I choose this MasterPieces");
  buy.position(500,550);

  buy.mousePressed(choose);

  proceed = createButton("Let's start the shipping");
  proceed.position(500,500);
  proceed.hide();

  proceed.mousePressed(stateChange());
}

function draw() {
  background(255,255,255);
  alertbox();
}