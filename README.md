# Wallpaper
Site for "HTML wallpaper" plasmoid

#Setup
For Arch:
Download HTML Wallpaper plasmoid from Discover
System Settings > Wallpaper > Wallpaper Type to "HTML Wallpaper"
```python
python -m http.server {port}
```
(You probably should set this command to startup)
Set site to localhost:{port}
Apply.

For other distros:
idk

#Usage
Move your mouse to bottom of your screen to show the buttons for switching images.
You can set your own wallpapers in img/ and name them 1.png 2.png 3.png etc. If you have less then 33 wallpapers you need to set your number in script.js.
