function textInput(id) {
    let userText = prompt("Please enter value for " + id, "Title");

    if(userText != null) {
        document.getElementById(id).innerText = userText + " ";
    }
}