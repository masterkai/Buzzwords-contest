function loadQuestion(){var a=new XMLHttpRequest;a.open("GET",quizData,!0),a.onreadystatechange=function(){4==a.readyState&&(myObj=JSON.parse(a.responseText),buildQuiz(0))},a.send()}function hideShow(){myObj.length<=page?$("#btnNxt").css("display","none"):$("#btnNxt").css("display","block")}function buildQuiz(a){if(console.log(page),console.log(myObj.length),page=a,hideShow(),page>=0)if(myObj.length<page+1){page=myObj.length,console.log("Completed");var b,c="",d=0,e="網紅：,意見領袖：,引戰文：,原PO：,鄉民：".split(","),f="",g="",h="",i="",j="";for(var k in myObj)console.log("questions:"+e[k]),console.log("myObj[item]"+myObj[k].correct),console.log("myQueRep[item]"+myQueRep[k]),myObj[k].correct==myQueRep[k]?(d++,f="answerCorrect"):f="answerWrong",5==d?(g="恭喜過關!!",h="100分獎勵領取",i="Treasure-Open",b=myObj[k].answer[myQueRep[k]],j="character"):(g="闖關失敗",h="再接再厲好禮領取",i="Treasure-UnOpen",b=myObj[k].answer[0],j="slideInDown"),c+='<div class="col-sm-12 finalResult__answer">'+e[k]+'<span class="'+f+'">'+b+"</span></div>";$("#instruction").css("display","none"),output.innerHTML='<h1 class="finalResult__status">'+g+'</h1><div class="finalResult"><div class="finalResult__flexitem">'+c+'<img src="prize.png" class="responsive-img"></div><div class="finalResult__flexitem"><img class="responsive-img '+j+'" src="'+i+'.svg"></div></div><div class="tac tal--m align-center"><a id="goToForm" class="btn" href="#" style="letter-spacing: 5px;font-size: 1.48rem;width: 100%;padding:0;">'+h+"</a></div>",goToForm.onclick=function(){buildForm()}}else{var l=myObj[page].question,m=myObj[page].correct;correctAnswer=myObj[page].answer[m];var n="";for(var o in myObj[page].answer){var p="";myObj[page].mySel==o&&(p="is-selected"),o==m?"*":"",n+='<li class="answer"><a href="#" class="answer-link '+p+'" data-id="'+parseInt(o)+'">'+myObj[page].answer[o]+" </a></li>"}instruction.innerHTML="「依照題目，選出正確的英文單字 」",output.innerHTML="<h2>"+l+" ?</h2>",output.innerHTML+='<ul class="has-answer">'+n+"</ul>",console.log(myObj[page].question);for(var q=0;q<bAnswer.length;q++)bAnswer[q].addEventListener("click",myAnswer,!1);console.log(bAnswer)}}function buildForm(){console.log("build form"),$("#instruction").css("display","none"),output.innerHTML='<iframe class="iframeHeight" src="form.html" scrolling="yes" style="width:100%;"></iframe>'}function myAnswer(a){console.dir(this.innerText),console.log(correctAnswer),a.preventDefault(),$(".answer-link").removeClass("is-selected"),this.classList.add("is-selected"),$("#btnNxt").attr("data-status",1);var b="",c=this.getAttribute("data-id");myObj[page].mySel=c,b=this.innerText==correctAnswer?"correct":"incorrect",console.log(b),myQueRep[page]=c,console.log(myQueRep)}var quizData="https://api.myjson.com/bins/v3b3d",instruction=document.getElementById("instruction"),output=document.getElementById("output"),bAnswer=document.getElementsByClassName("answer-link"),myObj="",page=0,correctAnswer=0,myQueRep=[];loadQuestion(),btnNxt.onclick=function(){1==$("#btnNxt").attr("data-status")&&buildQuiz(page+1),$("#btnNxt").attr("data-status",0)};