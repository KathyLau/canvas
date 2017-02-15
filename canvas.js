
var c = document.getElementById("slate");
var ctx = c.getContext("2d");

//set default variables
ctx.fillStyle = "#ff0000";
var color = "#FF0000";
var style="conn";
var size, prevX, prevY;
var dots = 0;
document.getElementById("myRange").value = "10";


//clear canvas
var clear = function(){
  dots=0;
  ctx.clearRect(0,0,c.width, c.height);
}


var draw = function(e){
  ctx.fillStyle=color;
  var size = document.getElementById("myRange").value;
  var x = e.offsetX;
  var y = e.offsetY;

  if (style=="rect") {ctx.fillRect(x, y, size, size);}

  if (style=="conn") { //if connect feature is selected, connect rectangles
    ctx.beginPath();

    if (dots != 0) {
      ctx.moveTo(prevX, prevY);
	    ctx.lineTo(x, y);
	    ctx.stroke(); }

    ctx.moveTo(x,y);
    ctx.arc(x, y, size, 10, 20);
    ctx.stroke();
    ctx.fill();

    dots++;
    prevX = x;
    prevY = y;
}
}


c.addEventListener("click", draw);

var button = document.getElementById("clear");
button.addEventListener("click", clear);

//get color selected
document.getElementById('colors').addEventListener('change', function() {
  color = this.options[this.options.selectedIndex].value;
});

//get style selected
document.getElementById('style').addEventListener('change', function() {
  style = this.options[this.options.selectedIndex].value;
});
