
var c = document.getElementById("slate");
var ctx = c.getContext("2d");

//set default variables
ctx.fillStyle = "#ff0000";
var color = "#FF0000";
var style="default";
var size , prevX, prevY;
document.getElementById("myRange").value = "50";


//clear canvas
var clear = function(){
  ctx.clearRect(0,0,c.width, c.height);
}


//draw rectangle on click
//extra feat. : store prev rect's coordinates to connect later
var drawRect = function(e){
  ctx.fillStyle=color;
  var size = document.getElementById("myRange").value;
  var x = e.clientX - c.offsetLeft;
  var y = e.clientY - c.offsetTop;
  ctx.fillRect(x, y, size, size);

  if (style=="conn") { //if connect feature is selected, connect rectangles
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
	ctx.lineTo(x, y);
	ctx.strokeStyle = "#000000";
	ctx.stroke();
}

  prevX = x;
  prevY = y;
}


c.addEventListener("click", drawRect);

var button = document.getElementById("clear");
button.addEventListener("click", clear);

//get color selected
document.getElementById('colors').addEventListener('change', function() {
  color = this.options[this.options.selectedIndex].value;
  console.log(color);
});

//get style selected
document.getElementById('style').addEventListener('change', function() {
  style = this.options[this.options.selectedIndex].value;
  console.log(style);
});
