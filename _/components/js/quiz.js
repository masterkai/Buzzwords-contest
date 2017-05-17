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

        //If quiz is completed
        if(myObj.length < (page+1)){
            page=myObj.length;
            console.log('Completed');
            var holderHTML = '';
            var score = 0;
            var questions = '網紅：,意見領袖：,引戰文：,原PO：,鄉民：'.split(',');
            var ansStatus = '';
            var myFinalResult='';
            var btnFinalStatus='';
            var imgFinalstatus='';
            var correctAnswerStatus;
            var character = '';
            for (var item in myObj){
                console.log('questions:'+questions[item]);
                console.log('myObj[item]'+myObj[item].correct);
                console.log('myQueRep[item]'+myQueRep[item]);
                if(myObj[item].correct == myQueRep[item]){
                    score++;
                    ansStatus = 'answerCorrect';
                } else {
                    ansStatus = 'answerWrong';
                }
                if(score==5){
                    myFinalResult = '恭喜過關!!';
                    btnFinalStatus = '100分獎勵領取';
                    imgFinalstatus = 'Treasure-Open';
                    correctAnswerStatus = myObj[item].answer[myQueRep[item]];
                    character = 'character';
                } else {
                    myFinalResult = '闖關失敗';
                    btnFinalStatus = '再接再厲好禮領取';
                    imgFinalstatus = 'Treasure-UnOpen';
                    correctAnswerStatus = myObj[item].answer[0];
                    character = 'slideInDown';
                }
                holderHTML += '<div class="col-sm-12 finalResult__answer">'+ questions[item] + '<span class="'+ansStatus+'">'+ correctAnswerStatus +'</span></div>';
            }
            output.innerHTML = '<h1 class="finalResult__status">'+myFinalResult+'</h1><div class="finalResult"><div class="finalResult__flexitem">' +holderHTML+ '<img src="images/prize.png" class="responsive-img"></div><div class="finalResult__flexitem"><img class="responsive-img '+character+'" src="images/'+imgFinalstatus+'.svg"></div></div>' +
                '<div class="tac tal--m align-center"><a id="goToForm" class="btn" href="#" style="letter-spacing: 5px;font-size: 1.48rem;width: 100%;padding:0;">'+btnFinalStatus+'</a></div>';
            goToForm.onclick = function () {
                buildForm();
            }
        }else {

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
}

// build form Button click event
var form = '';
function buildForm() {
    console.log('build form');
    output.innerHTML = form;
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
/*for(var q=0; q<output.children.length;q++){
 console.log(output.children[q].children);
 }*/