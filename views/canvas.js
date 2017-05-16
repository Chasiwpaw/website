var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
var gradient = ctx.createLinearGradient(0,0,innerWidth,innerHeight);
gradient.addColorStop(0, "silver");
gradient.addColorStop(1, "yellow");

function Bubble(x,y,radius) {
	this.x = x;
	this.y = y;
	this.x_speed = Math.random() * 0.5 * 3;
	this.y_speed = Math.random() * 0.5 * 3;
	this.radius = radius;

	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
		ctx.strokeStyle = gradient;
		ctx.stroke();
		ctx.fillStyle = gradient;
		ctx.fill();
	}

	this.move =  function(){
		if(this.x > innerWidth - this.radius || this.x < this.radius){
			this.x_speed = -this.x_speed;
		}
		if(this.y > innerHeight - this.radius || this.y < this.radius){
			this.y_speed = -this.y_speed;
		}
		this.x += this.x_speed;
		this.y += this.y_speed;
		this.draw();
	}
}

var bubbleArray = [];
for(var num = 0; num < 200; num++)
{
	var radius = (Math.random() * 10) + 1;
	var x = Math.random() * (canvas.width - radius * 2) + radius;
	var y = Math.random() * (canvas.height - radius * 2) + radius;
	var bubble = new Bubble(x,y, radius);
	bubbleArray.push(bubble);
}

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth,innerHeight);

	for(var i = 0; i<bubbleArray.length; i++){
		bubbleArray[i].move();
	}
}

animate();