const socket = io("http://localhost:3000/admin");

var btn_overlay = document.getElementById('btn_overlay');
var btn_splash = document.getElementById('btn_splash');

var list_overlay = document.getElementById('list_overlay');
var list_splash = document.getElementById('list_splash');

socket.on("overlay-list", (overlayIDs, overlayCount) => {
    var overlays = overlayIDs;

    list_overlay.getElementsByTagName('ul')[0].innerHTML = "";
    
    for (let i in overlays) {
        list_overlay.getElementsByTagName('ul')[0].innerHTML += ('<li id=' + overlays[i] + ' class=\"list-group-item"\>ID: ' + overlays[i] + '</li>');
    }

    list_overlay.getElementsByTagName('span')[0].innerHTML = overlayCount;
})

socket.on("splash-list", (splashIDs, splashCount) => {
    var splashes = splashIDs;

    list_splash.getElementsByTagName('ul')[0].innerHTML = "";

    for (let i in splashes) {
        list_splash.getElementsByTagName('ul')[0].innerHTML += ('<li id=' + splashes[i] + ' class=\"list-group-item"\>ID: ' + splashes[i] + '</li>');
    }

    list_splash.getElementsByTagName('span')[0].innerHTML = splashCount;
})

/* DEBUG */

/* GLOBAL ELEMENT LOG ON CLICK
var global_event = document.addEventListener("click", function(evnt){
    console.log(evnt.target.id, evnt.target.innerHTML);
});
*/