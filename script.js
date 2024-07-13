// Script 1
let currentWallpaper = 1;
let disable_buttons = true; // Set your value here

document.getElementById('prevWallpaper').addEventListener('click', function() {
    changeWallpaper(-1);
});

document.getElementById('nextWallpaper').addEventListener('click', function() {
    changeWallpaper(1);
});

function changeWallpaper(direction) {
    currentWallpaper += direction;
    if (currentWallpaper < 1) currentWallpaper = 33;
    if (currentWallpaper > 33) currentWallpaper = 1;

    document.getElementById('wallpaper').style.backgroundImage = `url('img/${currentWallpaper}.png')`;
}


// Script 2
document.getElementById('wallpaper').style.backgroundImage = "url('img/1.png')";

document.addEventListener('mousemove', function(event) {
    let control = document.getElementById('wallpaperControl');
    let nearControl = event.clientY < 50 || event.clientY > (window.innerHeight - 50);
    if (disable_buttons == false){
        if (nearControl) {
            control.classList.add('visible');
        } else {
            control.classList.remove('visible');
        }
    };
    if (diable_buttons) {};
});
