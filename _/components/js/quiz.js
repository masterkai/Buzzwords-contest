var quizData = 'https://api.myjson.com/bins/v3b3d';
//https://api.myjson.com/bins/v3b3d

var output = document.getElementById('output');
var bAnswer = document.getElementsByClassName('answer-link');
var myObj='',
    page=0,
    correctAnswer = 0;
var myQueRep = [];
loadQuestion();

btnNxt.onclick = function () {


if($('#btnNxt').attr('data-status')==1){
    buildQuiz(page+1);
}


    $('#btnNxt').attr('data-status', 0);
};


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
        $('#btnNxt').css('display','none');
    } else {
        $('#btnNxt').css('display','block');
    }
}

function buildQuiz(pg) {
    console.log(page);
    console.log(myObj.length);
    page = pg;
    hideShow();
    if(page >= 0){
        var myQuestion = myObj[page].question;
        var myCorrect = myObj[page].correct;
        correctAnswer = myObj[page].answer[myCorrect];
        var questionHolder = '';
        var yesCor = '';
        for(var i in myObj[page].answer){
            var aClass = '';
            if(myObj[page].mySel==i){
                aClass = 'is-selected';
            }
            if(i == myCorrect){
                yesCor = '*';
            }else {
                yesCor = '';
            }
            questionHolder+='<li class="answer"><a href="#" class="answer-link '+aClass+'" data-id="'+ parseInt(i) +'">'+myObj[page].answer[i]+' </a></li>';
        }
        output.innerHTML = '<h2>'+myQuestion+' ?</h2>';
        output.innerHTML += '<ul class="has-answer">'+questionHolder+'</ul>';
        console.log(myObj[page].question);

        for (var x =0; x< bAnswer.length; x++){
            bAnswer[x].addEventListener('click', myAnswer, false);
        }
        console.log(bAnswer);
    }


}

function myAnswer(e) {
    console.dir(this.innerText);
    console.log(correctAnswer);
    e.preventDefault();
    $( '.answer-link' ).removeClass( 'is-selected' );
    this.classList.add('is-selected');
    $('#btnNxt').attr('data-status', 1);
    var myResult = '';
    var iId = this.getAttribute('data-id');
    myObj[page].mySel = iId;
    //this.classList.toggle('is-selected');
    if(this.innerText == correctAnswer){
        myResult = 'correct';
    }else {
        myResult = 'incorrect';
    }
    console.log(myResult);
    for(var q=0; q<output.children.length;q++){
        console.log(output.children[q].children);
    }
    myQueRep[page] = iId;
    // for(var x =0; x <bAnswer.length; x++){
    //     if(iId=x){
    //         bAnswer[x].classList.remove('is-selected');
    //     }else {
    //         bAnswer[x].classList.add('is-selected');
    //     }
    // }
    console.log(myQueRep);
}
