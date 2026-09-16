// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//Global variables
let x = 100; let y = 100;

let c = "green";
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(100);

  // mouse related variables.
  mouseReport();
  updateSquare();
}
function mouseReport(){
  let mouseInfo = mouseIsPressed + "" + mouseButton.left + "" + mouseButton.right + ""
  text(mouseInfo, mouseX, mouseY);
}
function keyPressed(){

  //this func prints on auto
  print(key + " " + keyCode);
  if(key==="a"){
    c = "red";
  }else if(keyCode===32){
    c = "yellow";
  }

}

// ALT 26 → alt 27 ←
function updateSquare(){
  //draw a square on screen
  fill(c);
  square(x,y,50);
  if(keyIsDown("a")){
    x -= 5;
  }
  if(keyIsDown("d")){
    x += 5;
  }
  if(keyIsDown("w")){
    y -= 5;
  }
  if(keyIsDown("s")){
    y += 5;
  }
}