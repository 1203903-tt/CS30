// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(100);

  // mouse related variables.
  let mouseInfo = mouseIsPressed + "" + mouseButton.left + "" + mouseButton.right + ""
  text(mouseInfo, mouseX, mouseY);
}

function keyPressed(){

  //this func prints on auto
  print(key);
}

// ALT 26 → alt 27 ←