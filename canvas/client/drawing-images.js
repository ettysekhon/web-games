var canvas = document.getElementById('target');
canvas.width = canvas.height = canvas.style.width = canvas.style.height = 600;

var context = canvas.getContext('2d');

var w = canvas.width

var img = new Image();
img.onload = function(){
    context.drawImage(img,100,150);
}

img.src = "image.jpg";