const socket = io("http://localhost:3000/admin");

var overlayList = document.getElementById('overlay-list');
var splashList = document.getElementById('splash-list');

/* EVENT LISTENERS */

socket.on("overlay-list", (overlayIDs, overlayCount) => {
    var overlayArr = overlayIDs;

    overlayList.getElementsByTagName('ul')[0].innerHTML = "";
    
    for (let i in overlayArr) {
        overlayList.getElementsByTagName('ul')[0].innerHTML += ('<li id=' + overlayArr[i] + ' class=\"list-group-item"\>ID: ' + overlayArr[i] + '</li>');
    }

    overlayList.getElementsByTagName('span')[0].innerHTML = overlayCount;
})

socket.on("splash-list", (splashIDs, splashCount) => {
    var splashArr = splashIDs;

    splashList.getElementsByTagName('ul')[0].innerHTML = "";

    for (let i in splashArr) {
        var args = ('elementToggle(\'splash\', \'' + splashArr[i] + '\', \'container_title\')')
        splashList.getElementsByTagName('ul')[0].innerHTML += ('<li id="' + splashArr[i] + '" class="list-group-item">ID: ' + splashArr[i]+ ' <button class="btn btn-primary btn-sm" type="button" onclick="' + args + '">Edit</button></li>');
    }

    splashList.getElementsByTagName('span')[0].innerHTML = splashCount;
})

/* EVENT HANDLERS */

function elementToggle(namespace, id, element) {
    socket.emit("element-toggle", namespace, id, element)
}

/* DEBUG */

/* GLOBAL ELEMENT LOG ON CLICK
var global_event = document.addEventListener("click", function(evnt){
    console.log(evnt.target.id, evnt.target.innerHTML);
});
*/