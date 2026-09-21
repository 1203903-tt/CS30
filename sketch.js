// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//Global variables

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black",220);
  textSize(100);
  fill("lightgray");
  noStroke();
  // mouse related variables.
  triangle(500,height/2,350,height/2-400,200,height/2);
  triangle(350,height/2,450,height/2-350,500,height/2);
  triangle(350,height/2+35,550,height/2-450,645,height/2);
  triangle(350,height/2+15,650,height/2-230,750,height/2);
  fill("tan");
  rect(1500,600,200,100);
  fill("grey");
  circle(1200,2300,3500);
}