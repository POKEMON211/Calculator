var num1;
var num2;
var add;
var sub;
var mult;
var div;
var n1;
var n2;

function setup() {
  createCanvas(400, 400);
  num1 = createInput();
  num1.position(100, 50);
  num2 = createInput();
  num2.position(100, 125);

  add = createButton("+");
  add.position(100, 200);
  add.mousePressed(adding);

  sub = createButton("-")
  sub.position(150, 200);
  sub.mousePressed(subtract)

  mult = createButton("x")
  mult.position(200, 200);
  mult.mousePressed(multiply)
  
  div = createButton("/")
  div.position(250, 200);
  div.mousePressed(divide)
  
}

function draw() {
  background(220);
  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());
  textSize(15);
  text("Enter Number 1:", 100, 25)
  text("Enter Number 2:", 100, 100)
}

function adding(){
  console.log(n1+n2);
}

function subtract(){
  console.log(n1-n2);
}

function multiply(){
  console.log(n1*n2);
}

function divide(){
  console.log(n1/n2);
}