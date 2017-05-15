var quizData = 'https://api.myjson.com/bins/v3b3d';
//https://api.myjson.com/bins/v3b3d

var output = document.getElementById('output');
var myObj='';
loadQuestion();
console.log(myObj);

function loadQuestion() {
    var a = new XMLHttpRequest();
    a.open('GET',quizData,true);
    a.onreadystatechange = function () {
        if(a.readyState==4){
            myObj = JSON.parse(a.responseText);
            buildQuiz();
        }
    }
    a.send();
}

function buildQuiz() {
    console.log(myObj);
}