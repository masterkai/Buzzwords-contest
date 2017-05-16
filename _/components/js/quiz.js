var quizData = 'https://api.myjson.com/bins/v3b3d';
//https://api.myjson.com/bins/v3b3d

var output = document.getElementById('output');
var bAnswer = document.getElementsByClassName('btnAns');
var myObj='',
    page=0,
    correctAnswer = 0;
loadQuestion();

function loadQuestion() {
    var a = new XMLHttpRequest();
    a.open('GET',quizData,true);
    a.onreadystatechange = function () {
        if(a.readyState==4){
            myObj = JSON.parse(a.responseText);
            buildQuiz(0);
        }
    }
    a.send();
}

function hideShow() {
    if(myObj.length <= page){
        document.getElementById(btnNxt).style.display = 'none';
    } else {
        document.getElementById(btnNxt).style.display = 'block';
    }
}

function buildQuiz(pg) {
    var myQuestion = myObj[page].question;
    var myCorrect = myObj[page].correct;
    var questionHolder = '';
    for(var i in myObj[page].answer){
        questionHolder+='<li class="answer"><a href="#" class="answer-link">'+myObj[page].answer[i]+'</a></li>';
    }
    output.innerHTML = '<h2>'+myQuestion+' ?</h2>';
    output.innerHTML += '<ul class="has-answer">'+questionHolder+'</ul>';
    console.log(myObj[page].question);


}
// for (var i in myObj){
//     console.log(myObj[i].question);