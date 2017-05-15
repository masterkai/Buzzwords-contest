var quizData = 'https://api.myjson.com/bins/v3b3d';
//https://api.myjson.com/bins/v3b3d

var output = document.getElementById('output');
var myObj='',
    page=0;
loadQuestion();

function loadQuestion() {
    var a = new XMLHttpRequest();
    a.open('GET',quizData,true);
    a.onreadystatechange = function () {
        if(a.readyState==4){
            myObj = JSON.parse(a.responseText);
            page =1;
            buildQuiz(1);
        }
    }
    a.send();
}

function buildQuiz(pg) {
    for (var i in myObj){
        console.log(myObj[i].question);

    }
}