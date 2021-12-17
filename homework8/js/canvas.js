// Variables!
var radius = 15;
var x = 50;
var y = 150;
var color = "#ff0000"
var attached = true;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color

//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)
window.addEventListener('load', (event) => {
	console.log('page is fully loaded');
	ctx.canvas.width  = 0.75*window.innerWidth;
	ctx.canvas.height = 0.75*window.innerHeight;
});

window.addEventListener("resize", () =>{
	ctx.canvas.width  = 0.75*window.innerWidth;
	ctx.canvas.height = 0.75*window.innerHeight;
});

canvas.addEventListener("mousedown", setPosition);

function setPosition(e) {
	x = e.clientX;
	y = e.clientY;
}

canvas.addEventListener('mousemove', draw);

function draw(e){
	setPosition(e)
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.lineCap = "round";
	ctx.strokeStyle = color;
	ctx.moveTo(x, y);
	setPosition(e);
	ctx.lineTo(x, y);
	ctx.stroke();
}

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	const key = e.key;
	switch (key){
		case "r":
			color = "#ff0000";
			break;

		case "g":
			color = "#00ff00";
			break;

		case "b":
			color = "#0000ff";
			break;

		case "y":
			color = "#ffff00";
			break;

		case "ArrowUp":
			if(attached){
				canvas.removeEventListener("mousemove", draw);
				attached = false;
			}
			break;

		case "ArrowDown":
			if(!attached){
				canvas.addEventListener("mousemove", draw);
				attached = true;
			}
			break;

		case " ":
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			break;	
	}
})

// Functions!
// I would add a function for draw
colorPicker.addEventListener('change', (event) => {
	color = event.target.value;
});


