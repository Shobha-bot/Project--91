function addUser()
{
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;

    localStorage.setItem("Player1:", player1);
    localStorage.setItem("Player2:", player2);
    
    window.location("game_page.html");
}

