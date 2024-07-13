# Wallpaper
Site for "HTML wallpaper" plasmoid<br>

#Setup
For Arch:<br>
Download HTML Wallpaper plasmoid from Discover<br>
System Settings > Wallpaper > Wallpaper Type to "HTML Wallpaper"<br>
```python
python -m http.server {port}
```
(You probably should set this command to startup)<br>
Set site to localhost:{port}<br>
Apply.<br>

For other distros:<br>
idk<br>

#Usage
Move your mouse to bottom of your screen to show the buttons for switching images.<br>
You can set your own wallpapers in img/ and name them 1.png 2.png 3.png etc. If you have less then 33 wallpapers you need to set your number in script.js (for some reason site can handle up to 24 wallpapers).<br>
