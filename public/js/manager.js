const socket = io("http://localhost:3000");

var btn_client = document.getElementById('btn_client');
var btn_admin = document.getElementById('btn_admin');

var list_client = document.getElementById('list_client');
var list_admin = document.getElementById('list_admin');

var global_event = document.addEventListener("click", function(evnt){
    console.log(evnt.target.id, evnt.target.innerHTML);
});

btn_client.addEventListener("click", function() {

});
