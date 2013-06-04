var canvas = document.getElementById('target');
canvas.width = canvas.height = canvas.style.width = canvas.style.height = 500;

var context = canvas.getContext('2d');

var img = new Image;
img.src = 'http://mario.qfox.nl/mario_sprites.png';
img.onload = function(){
    // draw image 1:1
    context.drawImage(img, 100, 100); // 2 extra params

    // draw image transformed
    context.drawImage(img, 100, 200, 200, 200); // 4 extra params

    // draw part of image transformed
    context.drawImage(img, 0, 16, 16, 16, 10, 10, 100, 100); // 8 extra params

    // draw canvas element as source (inception!)
    context.drawImage(canvas, 400, 400, 100, 100);
};















