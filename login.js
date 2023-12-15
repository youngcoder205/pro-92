player_1 = "";
player_2 = "";

function login(){

player_1 = document.getElementById("player_1_value").value;
player_2 = document.getElementById("player_2_value").value;

localStorage.setItem("Player1" , player_1);
localStorage.setItem("Player2" , player_2);

window.location.replace("math.html");
}

