// Script 1
let currentWallpaper = 1;
let allWallpapers = 33; // Set your value here

document.getElementById('prevWallpaper').addEventListener('click', function() {
    changeWallpaper(-1);
});

document.getElementById('nextWallpaper').addEventListener('click', function() {
    changeWallpaper(1);
});

function changeWallpaper(direction) {
    currentWallpaper += direction;
    if (currentWallpaper < 1) currentWallpaper = allWallpapers;
    if (currentWallpaper > allWallpapers) currentWallpaper = 1;

    document.getElementById('wallpaper').style.backgroundImage = `url('img/${currentWallpaper}.png')`;
}


// Script 2
document.getElementById('wallpaper').style.backgroundImage = "url('img/1.png')";

document.addEventListener('mousemove', function(event) {
    let control = document.getElementById('wallpaperControl');
    let nearControl = event.clientY < 50 || event.clientY > (window.innerHeight - 50);

    if (nearControl) {
        control.classList.add('visible');
    } else {
        control.classList.remove('visible');
    }
});

// Script 3
let disable_buttons = false;

if (diable_button) {
    document.getElementById('prevWallpaper').disabled = true;
    document.getElementById('nextWallpaper').disabled = true;
}
else {
    document.getElementById('prevWallpaper').enabled = false;
    document.getElementById('nextWallpaper').enabled = false;
}
