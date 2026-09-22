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
function mtnrange(startX, startY, gap,height,heightvariance,widthvariance) {
  for (let i = 0; i >= 10; i ++) {
    fill("lightgrey");
    triangle(startX, startY, startX / 2 +gap, height+random(0,heightvariance), startX+random(0,widthvariance) + gap, startY);
    startX += gap;  
  }
}

function draw() {
  background("black",220);
  textSize(100);
  fill("lightgray");
  noStroke();
  // mouse related variables.
  mtnrange(0,700,100,200,200,300);
  fill("grey");
  circle(1200,3200,5000);
  fill("tan");
  rect(1500,650,200,100);
  
}