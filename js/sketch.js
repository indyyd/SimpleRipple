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