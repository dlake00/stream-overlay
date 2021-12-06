const socket = io("http://localhost:3000");

var btn_client = document.getElementById('btn_client');
var btn_control = document.getElementById('btn_control');

var list_client = document.getElementById('list_client');
var list_control = document.getElementById('list_control');

var global_event = document.addEventListener("click", function(evnt){
    console.log(evnt.target.id, evnt.target.innerHTML);
});

btn_client.addEventListener("click", function() {

});
