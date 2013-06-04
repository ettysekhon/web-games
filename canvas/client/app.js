var canvas = document.getElementById('target');
canvas.width = canvas.height = canvas.style.width = canvas.style.height = 500;

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
context.strokeText('foo', 250, 100);
