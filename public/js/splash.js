const socket = io("http://localhost:3000/splash");

socket.on("title-toggle", () => {
    var x = document.getElementById('container_title');

    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } 
    else {
        x.style.visibility = 'hidden';
    }
})