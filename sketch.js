var pipes = [];

function setup() {
  createCanvas(400, 400);
  b = new bird();
  p = new pipe();
  pipes.push(new pipe())
}

function draw() {
  background(220);
  background(0);
  b.update();
  b.show();
  p.update();
  p.show();
  for(var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();
    pipes[i].hit();
  }
  if (frameCount % 200 == 0){
    pipes.push(new pipe());
  }
}

function bird() {
  this.x = 150;
  this.y = 200;
  this.fly = 5;
  this.gravity = 0.1;
  this.vellocity = 0;
  this.update = function() {
    this.vellocity += this.gravity;
    this.y += this.vellocity;
  }
  this.show = function() {
    fill(255)
    circle(this.x, this.y, 50)
  }
  this.up = function() {
    this.vellocity -=  this.fly;
  }
}

function pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.speed = 1;
  this.highlight = false;
  this.show = function() {
    fill(10, 200, 10);
    if(this.highlight) fill(255, 0, 0);
    rect(this.x, 0, 20, this.top)
    rect(this.x, height-this.bottom, 20, this.bottom)
  }
  this.update = function(){
    this.x -= this.speed;
  }
  this.hit = function(){
    if (b.y < this.top|| b.y > height - this.bottom) {
      if (b.x > this.x && b.x < this.x + 20){
        console.log("GAME OVER")
        this.highlight = true;
        alert("You Lose")
        
        
      }
      
    
   }
 }
  }


function keyPressed() {
  if (keyCode === UP_ARROW) {
    b.up();
  }
}
