const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

let car= new Car;
let obstacles= [];
let gameover=true;
let points;

let frames = 0;


function draw() {
  //
  // Iteration 1: road drawing
  //


  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(0,0,W,H);
  ctx.fillStyle="grey";
  ctx.fillRect(60,0,W-2*60,H);
  ctx.fillStyle="white";
  ctx.fillRect(100,0,W-2*100,H);
  ctx.fillStyle="grey";
  ctx.fillRect(140,0,W-2*140,H);
  ctx.moveTo(W/2 -10,0);
  ctx.lineTo(W/2 -10,1600);
  ctx.setLineDash([40,40]);
  ctx.lineWidth = 20;
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();

  
  //
  // Iteration 2: car drawing
  //

  car.draw();


  //
  // Iteration #4: obstacles
  //

  // TODO

  if ((frames%200)===0){
  obstacles.push(new Obstacle);
  }

  obstacles.forEach(function(el){
    el.hits(car);
  });
  obstacles.forEach(function(el){
    el.y+=10;
    el.draw();
    
  });

  
  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO



}

document.onkeydown = function (e) {
  if (!car) return;
  if (e.which===39) {
    car.moveRight();
    car.speed+=10;

  }
  if (e.which===37) {
    car.moveLeft();
    car.speed+=10;
  }
}

document.onkeyup = function (e) {
  if (!car) return;
  if ((e.which===39)||(e.wich===37)){car.speed=25;}
  
}


function animLoop() {
  frames++;
  draw();
  
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  // TODO
  gameover=false;
  obstacles=[];
  draw();
  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

