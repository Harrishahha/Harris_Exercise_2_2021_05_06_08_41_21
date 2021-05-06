let c;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  frameRate(4);
  let x1=random(400);
  let x2=random(400);
  background(random(400),random(500),random(27));
  
  c=color(random(176),90,random(200));
  fill(c);
  noStroke();
  ellipse(200,200,random(100),random(100));
  
  stroke(random(300),70,104);
  strokeWeight(7);
  c=color(random(176),random(119),40);
  fill(c);
  rect(x1,x2,x1-200,x2-90);
  
  c=color(70,90,80);
  fill(c);
  line(200,200,x1,x2);
  
  line(200,200,x1-100,x2);
  
  stroke(233,random(163),184);
  strokeWeight(7);
  c=color(random(120),random(119),40);
  fill(c);
  rect(x1-100,x2,x1-200,x2-300);
  
  line(200,200,x1-100,x2-30);
  
  stroke(random(233),163,104);
  strokeWeight(7);
  c=color(random(370),random(119),40);
  fill(c);
  rect(x1-100,x2-30,x1-130,x2-190);
  
  line(200,200,x1-90,x2-100);
  
  stroke(233,163,random(104));
  strokeWeight(7);
  c=color(random(70),random(119),40);
  fill(c);
  rect(x1-90,x2-100,x1-300,x2-100);
  
   line(200,200,x1-300,x2-80);
  
  stroke(233,163,random(65));
  strokeWeight(7);
  c=color(random(700),random(30),40);
  fill(c);
  rect(x1-300,x2-80,x1-200,x2-10);
  
   line(200,200,x1-350,x2-30);
  
  stroke(random(233),63,random(65));
  strokeWeight(7);
  c=color(random(700),random(30),40);
  fill(c);
  rect(x1-350,x2-30,x1-20,x2-210);
  
}
function mousePressed() {
  redraw();}