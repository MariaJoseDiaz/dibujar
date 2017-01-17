var ptouchIsDown;
var pmouseIsPressed;
function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  stroke(0);
  fill(0);
  background(255);
  ptouchIsDown = touchIsDown;
  pmouseIsPressed = mouseIsPressed;
}

function draw() {
  if (ptouchIsDown && touchIsDown){
    stroke(255, 0, 0);
    line(touchX, touchY, ptouchX, ptouchY);
  }
  if (pmouseIsPressed && mouseIsPressed){
    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  ptouchIsDown = touchIsDown;
  pmouseIsPressed = mouseIsPressed;
}

function touchMoved(){
  //stroke(255, 0, 0);
  //line(touchX, touchY, ptouchX, ptouchY);
  return false;
}

function touchEnded(){
  //stroke(0, 0, 255);
  //line(touchX, touchY, ptouchX, ptouchY);
  return false;
}

function mouseDragged(){
  //stroke(0, 255, 0);
  //line(mouseX, mouseY, pmouseX, pmouseY);
}