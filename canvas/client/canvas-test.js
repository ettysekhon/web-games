var canvas = document.getElementById('target');
canvas.width = canvas.height = canvas.style.width = canvas.style.height = 600;

var context = canvas.getContext('2d');

// red filled rect
context.fillStyle = 'red';
context.fillRect(10,10,100,150);

// blue bordered rect
context.strokeStyle = 'blue';
context.strokeRect(50,5,150,100);

// 5px green line
context.beginPath();
context.lineCap = 'round';
context.lineJoin = 'round'
context.moveTo(100,230);
context.lineTo(100,400);
context.lineTo(300,300);
//context.closePath();
context.strokeStyle = 'green';
context.lineWidth = 15;
context.stroke();

// circle with arc
context.beginPath();
context.arc(175, 175, 50, 0, Math.PI*2, true);
context.closePath();
context.fillStyle = 'orange';
context.fill();

// text filled
context.font = '50px monospace';
context.fillStyle = 'purple';
context.fillText('foo', 250, 50);

// text outlined
context.strokeStyle = 'purple';
context.lineWidth = 1;
context.strokeText('more text', 350, 100);

//arc from centre of canvas
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 75;

var startAngle = 1 * Math.PI;
var endAngle = 2 * Math.PI;
var counterClockwise = false;

context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 15;

// line color
context.strokeStyle = 'black';
context.stroke();

