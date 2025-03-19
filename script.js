//let username = window.prompt("What's your username?");

// console.log(username);

let username;

document.getElementById("mySubmit") .onclick = function() {
    username = document.getElementById("myText") .value;
    document.getElementById ("welcome") .textContent = `Hello, ${username}!`;
}