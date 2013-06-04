var canvas = document.getElementById('target');
canvas.width = canvas.height = canvas.style.width = canvas.style.height = 500;

var context = canvas.getContext('2d');

var img = new Image;
img.src = 'http://mario.qfox.nl/mario_sprites.png';
img.onload = function(){
    var n = 0;
    setInterval(function(){
        // clear previous image
        context.fillRect(0,0,500,500)
        // determine nth sprite
        ++n;
        n %= 3; // there are three walking sprites in the map
        // the three walking images start after the first (17+n*17)
        context.drawImage(img, 17+(n*17), 16, 16,16, 50,50, 80,80);
    }, 100);
};

//setInterval
//frame rate















