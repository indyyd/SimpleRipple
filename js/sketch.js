var outerDiam = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  
  for (var i = 0; i < 5; i++){
		var diam = outerDiam - 30 * i;    
    if (diam > 0){
      
      var fade = map(diam, 0, width, 0, 255);
			stroke(fade);
      noFill();
      ellipse(200, 200, diam);
    }
  }
  
  outerDiam = outerDiam + 2;
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
       outerDiam = random(0, 400);
       playSynth1();
   } else if (keyCode === UP_ARROW) {
       outerDiam = random(0, 400);
       playSynth2();
   } else if (keyCode === DOWN_ARROW) {
       outerDiam = random(0, 400);
       playSynth3();
   } else if (keyCode === RIGHT_ARROW) {
       outerDiam = random(0, 400);
       playSynth4();
   }
}