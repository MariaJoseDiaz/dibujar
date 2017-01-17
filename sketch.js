var ptouchIsDown;
function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  stroke(0);
  fill(0);
  background(255);
  ptouchIsDown = touchIsDown;
}

function draw() {
  if (ptouchIsDown && touchIsDown){
    stroke(255, 0, 0);
    line(touchX, touchY, ptouchX, ptouchY);
  }
  
  ptouchIsDown = touchIsDown;
}

function touchMoved(){

  return false;
}

function touchEnded(){
 
  return false;
}
