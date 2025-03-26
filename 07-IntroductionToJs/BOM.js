// JavaScript source code
/*let screen_resolution = "Screen resolution";
screen_resolution += window.screen.width;
screen_resolution += "х";
screen_resolution += window.screen.height;*/
//Screen:
window.document.getElementById("screen-resolution").innerHTML = 
	`Screen resolution ${window.screen.width}x${window.screen.height}`;

window.document.getElementById("screen-available-resolution").innerHTML = 
	`Available resolution ${window.screen.availWidth}x${window.screen.availHeight}`;

window.document.getElementById("screen-color-depth").innerHTML = 
	`color-depth ${window.screen.colorDepth}`;
window.document.getElementById("screen-pixel-depth").innerHTML = 
	`pixel-depth ${window.screen.pixelDepth}`;
window.document.getElementById("screen-orientation").innerHTML = 
	`screen-orientation ${window.screen.orientation}`;

//Location:
//window.location
window.document.getElementById("current-page").innerHTML = window.location.href;
window.document.getElementById("current-dir").innerHTML = window.location.pathname;
window.document.getElementById("hostname").innerHTML = window.location.hostname;
window.document.getElementById("protocol").innerHTML = window.location.protocol;

//History
//window.moveTo(`index.html`);
document.getElementById("btn-backward").addEventListener("click", function () {window.history.back()});
document.getElementById("btn-forward").addEventListener("click", () => window.history.forward());