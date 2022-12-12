particle_size = 2;

xsnowflake = [];
ysnowflake = [];

xsnowflake[0] = 0;
ysnowflake[0] = 0;

color1 = 255;

function setup() {
  createCanvas(500, 700);
  background(0);
}

function draw() {
  background(150,170,255); // clear the screen with a black background
  textAlign(CENTER);
  textSize(15);
  text("GROUP CHAT 12 DAYS OF CHRISTMAS", 250, 25);
  textSize(40);
  text("SNOWFLAKE", 250, 75);
  textSize(15)
  text("Refresh for a new snowflake", 250, 100);
  translate(width/2,height/2);
  //frameRate(1);
  
  // x = even number * particle_size  such that x is close to width/2
  x = 2*round(0.25*width/particle_size)*particle_size;	
  y = 0;
  
  // noprotect    
  while ( x > max(xsnowflake) ) { 
   direction = round(random(-1.5,1.5));
   
   if (abs(direction) == 1) {
   x += -particle_size; // x gets smaller
   y += sqrt(3)*particle_size*direction;
   } else {
    x += -2*particle_size;
    y += 0;
   }
        
   if (y < 0) {
     x += particle_size;
     y += sqrt(3)*particle_size;
   }  
     
   if ( y > x/sqrt(3)) { 
   x += particle_size;  
   y -= sqrt(3)*particle_size;
   }
    
   //drawPoint(x,y,particle_size,170); // draw gray dot
    
    for (i = 0; i < xsnowflake.length ; i += 1) {
     dx = x - xsnowflake[i];
     dy = y - ysnowflake[i];
     d = sqrt(dx*dx + dy*dy);
     if ((d < 2.01*particle_size) & (d > 1.91*particle_size)) {
      if ( (abs(abs(atan(dy/dx)) - PI/3) < 0.1) | (dy == 0) ) { 
        xsnowflake.push(x);
        ysnowflake.push(y);
				break; // no need to continue searching for pairs
      }      
     }
   }
  }
  
  for (i = 0; i < xsnowflake.length; i += 1 ) {
   drawPoint(xsnowflake[i],ysnowflake[i],particle_size,color1); 
   drawPoint(xsnowflake[i],-ysnowflake[i],particle_size,color1);     
   rotate(PI/3); 
   drawPoint(xsnowflake[i],ysnowflake[i],particle_size,color1); 
   drawPoint(xsnowflake[i],-ysnowflake[i],particle_size,color1);         
   rotate(PI/3); 
   drawPoint(xsnowflake[i],ysnowflake[i],particle_size,color1); 
   drawPoint(xsnowflake[i],-ysnowflake[i],particle_size,color1);         
   rotate(PI/3); 
   drawPoint(xsnowflake[i],ysnowflake[i],particle_size,color1); 
   drawPoint(xsnowflake[i],-ysnowflake[i],particle_size,color1);         
   rotate(PI/3); 
   drawPoint(xsnowflake[i],ysnowflake[i],particle_size,color1); 
   drawPoint(xsnowflake[i],-ysnowflake[i],particle_size,color1);        
  rotate(PI/3); 
   drawPoint(xsnowflake[i],ysnowflake[i],particle_size,color1);
   drawPoint(xsnowflake[i],-ysnowflake[i],particle_size,color1);         
  }
  
if (max(xsnowflake) > width/2-4*particle_size) {  
  print('done generating snowflake');
  noLoop();
  }
}


function drawPoint( _x,  _y, _particle_size, _colors){
   // translate(width/2,height/2);
//    strokeWeight(_particle_size/10);
    //strokeWeight(0);
    //stroke(_colors);
    //point(_x, _y);  
    //fill(0);
    noStroke();
    fill(_colors);
    ellipseMode(RADIUS);
    ellipse(_x,-_y,_particle_size);
    strokeWeight(0);
//  translate(-width/2,-height/2);
}
