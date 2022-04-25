const socket = io("http://localhost:3000/splash");

socket.on("element-toggle", (elementID) => {
    var target = document.getElementById(elementID);

    if (target.style.visibility === 'hidden') {
        target.style.visibility = 'visible';
    } 
    else {
        target.style.visibility = 'hidden';
    }
})