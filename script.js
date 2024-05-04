var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");




var y = 0;

// Here I am going to set the speed
var incrementor = 2;




function Square() {
	//thwomp1
  ctx.fillStyle = "blue";
  //
  ctx.fillRect(20, y, 100, 150);
     ctx.clearRect(30, y+10 , 80, 130 );
  ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(50, y+50, 10, 0, Math.PI*2, true);
	    ctx.fill();
ctx.beginPath();
ctx.arc(90, y+50, 10, 0, Math.PI*2, true);
	    ctx.fill();
    ctx.beginPath();
		ctx.arc(70, y+110, 25, 0, Math.PI, true);
		ctx.stroke(); 
    ctx.beginPath();
		ctx.arc(70, y+25, 20, 0, Math.PI, );
		ctx.stroke(); 

	 
  //thwomp2
  ctx.fillStyle = "yellow";
  ctx.fillRect(250, y, 100, 125);
  
    ctx.fillStyle = "black";
    ctx.beginPath();
		ctx.arc(300, y+90, 30, 0, Math.PI, true);
		ctx.fill();
	ctx.beginPath();
	ctx.arc(280, y+30, 10, 0, Math.PI*2, true);
	    ctx.fill();
	ctx.beginPath();
	ctx.arc(320, y+30, 10, 0, Math.PI*2, true);
	    ctx.fill();
     ctx.strokeRect(260, y+10, 80, 100);
  
  //thwomp3
  ctx.fillStyle = "pink";
  ctx.fillRect(500, y, 100, 125);
      ctx.fillStyle = "black";
    ctx.beginPath();
		ctx.arc(550, y+70, 30, 0, Math.PI);
		ctx.fill();
	ctx.beginPath();
	ctx.arc(530, y+30, 10, 0, Math.PI*2, true);
	    ctx.fill();
	ctx.beginPath();
	ctx.arc(570, y+30, 10, 0, Math.PI*2, true);
	    ctx.fill();
  
  // divider
    ctx.fillStyle = "gray";
   ctx.fillRect(130, 0,  100, 50);
   ctx.clearRect(140,10 , 80, 30);

  //
  ctx.fillRect(370, 0, 100, 50);
    ctx.fillRect(630, 0, 100, 50);
	
  
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Square();

  /* Here I am creating a simple while statement. 
   The statement says that x is added to incrmentor (speed)
   if the incrementor is greater than canvas width or 
   incrementor is less than 0 then make whatever the current
   number for incrementor negative */

  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  y += incrementor;
  console.log(incrementor + "  incrementor value");
}




setInterval(drawBoxxy, 10);



