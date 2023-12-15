player1 = localStorage.getItem("Player1");
player2 = localStorage.getItem("Player2");

document.getElementById("player_ques").innerHTML = player1;
document.getElementById("player_ans").innerHTML = player2;

document.getElementById("player_1_label").innerHTML  = player1 + " :";
document.getElementById("player_2_label").innerHTML  = player2 + " :";

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_score_lbl").innerHTML= player1_score;
document.getElementById("player_2_score_lbl").innerHTML= player2_score;

function back(){
    window.location.replace("index.html");
}

function send(){
    number1 = document.getElementById("no_1").value;
    number2 = document.getElementById("no_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4> Question : " +  number1  +  " x "  + number2  + "</h4>";

    input_box = "<br> Answer : <input type = 'text' id='input_check_box'>";
    check_btn = "<br><br> <button class='btn btn-info btn-lg' onclick='check()'>Check</button>";
    row = question_number + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("no_1").value = "";
    document.getElementById("no_2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){

    get_answer = document.getElementById("input_check_box").value;
    console.log("the answer is " + get_answer);

    if(get_answer == actual_answer){

        if(answer_turn == "player2"){

            player2_score = player2_score + 1;
            document.getElementById("player_2_score_lbl").innerHTML =  player2_score;
        }

        else{
            player1_score = player1_score + 1;
            document.getElementById("player_1_score_lbl").innerHTML =  player1_score;
        }
    }
    
    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("player_ques").innerHTML = player2;
    }

    else{
        question_turn = "player1";
        document.getElementById("player_ques").innerHTML = player1; 
    }

    if(answer_turn == "player1"){

        answer_turn = "player2";
        document.getElementById("player_ans").innerHTML = player2;
    }

    else{
        answer_turn = "player1";
        document.getElementById("player_ans").innerHTML = player1; 
    }

    document.getElementById("output").innerHTML = "";
}
