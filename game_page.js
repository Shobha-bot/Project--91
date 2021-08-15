function send()
{
   var number1 = document.getElementById("number1").value;
   var number2 = document.getElementById("number2").value;
   
   var value = document.getElementById("operaters"); 
    
   if(value.selectedOptions == 1)
       {
           var answer = parseInt(number1) + parseInt(number2);
           console.log("Answer - " + answer);
       }
    
    
       if(value.selectedOptions == 2)
       {
           var answer = parseInt(number1) - parseInt(number2);
           console.log("Answer - " + answer);
       }
    
       if(value.selectedOptions == 3)
       {
           var answer = parseInt(number1) * parseInt(number2);
           console.log("Answer - " + answer);
       }
    
       if(value.selectedOptions == 4)
       {
           var answer = parseInt(number1) / parseInt(number2);
           console.log("Answer - " + answer);
       }
    
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='number' id='input_answer' placeholder='Type your Answer'>";
    button_check = "<br><br><button id='button_check' class='btn btn-primary'>Check</button>";
           
    row = question_number + input_box + button_check;
           
    document.getElementById("output").innerHTML = row;

    document.getElementById("input_answer").value = "";
}

function showUser()
{
    var player1 = localStorage.getItem("Player1:"); 
    document.getElementById("player1").innerHTML = player1;
    
    var player2 = localStorage.getItem("Player2:"); 
    document.getElementById("player2").innerHTML = player2;
    
    document.getElementById("player_question").innerHTML = player1;
    
    document.getElementById("player_answer").innerHTML = player2;
}


