function loadQuestion(){var a=new XMLHttpRequest;a.open("GET",quizData,!0),a.onreadystatechange=function(){4==a.readyState&&(myObj=JSON.parse(a.responseText),buildQuiz(0))},a.send()}function hideShow(){myObj.length<=page?$("#btnNxt").css("display","none"):$("#btnNxt").css("display","block")}function buildQuiz(a){if(console.log(page),console.log(myObj.length),page=a,hideShow(),page>=0)if(myObj.length<page+1){page=myObj.length,console.log("Completed");var b,c="",d=0,e="網紅：,意見領袖：,引戰文：,原PO：,鄉民：".split(","),f="",g="",h="",i="";for(var j in myObj)console.log("questions:"+e[j]),console.log("myObj[item]"+myObj[j].correct),console.log("myQueRep[item]"+myQueRep[j]),myObj[j].correct==myQueRep[j]?(d++,f="answerCorrect"):f="answerWrong",5==d?(g="恭喜過關!!",h="100分獎勵領取",i="Treasure-Open",b=myObj[j].answer[myQueRep[j]]):(g="闖關失敗",h="再接再厲好禮領取",i="Treasure-UnOpen",b=myObj[j].answer[0]),c+='<div class="col-sm-12 finalResult__answer">'+e[j]+'<span class="'+f+'">'+b+"</span></div>";output.innerHTML='<h1 class="finalResult__status">'+g+'</h1><div class="finalResult"><div class="finalResult__flexitem">'+c+'<img src="images/prize.png" class="responsive-img"></div><div class="finalResult__flexitem"><img class="responsive-img" src="images/'+i+'.svg"></div></div><div class="tac tal--m align-center"><a class="btn" href="#" style="letter-spacing: 5px;font-size: 1.48rem;width: 100%;padding:0;">'+h+"</a></div>"}else{var k=myObj[page].question,l=myObj[page].correct;correctAnswer=myObj[page].answer[l];var m="";for(var n in myObj[page].answer){var o="";myObj[page].mySel==n&&(o="is-selected"),n==l?"*":"",m+='<li class="answer"><a href="#" class="answer-link '+o+'" data-id="'+parseInt(n)+'">'+myObj[page].answer[n]+" </a></li>"}output.innerHTML="<h2>"+k+" ?</h2>",output.innerHTML+='<ul class="has-answer">'+m+"</ul>",console.log(myObj[page].question);for(var p=0;p<bAnswer.length;p++)bAnswer[p].addEventListener("click",myAnswer,!1);console.log(bAnswer)}}function myAnswer(a){console.dir(this.innerText),console.log(correctAnswer),a.preventDefault(),$(".answer-link").removeClass("is-selected"),this.classList.add("is-selected"),$("#btnNxt").attr("data-status",1);var b="",c=this.getAttribute("data-id");myObj[page].mySel=c,b=this.innerText==correctAnswer?"correct":"incorrect",console.log(b),myQueRep[page]=c,console.log(myQueRep)}var quizData="https://api.myjson.com/bins/v3b3d",output=document.getElementById("output"),bAnswer=document.getElementsByClassName("answer-link"),myObj="",page=0,correctAnswer=0,myQueRep=[];loadQuestion(),btnNxt.onclick=function(){1==$("#btnNxt").attr("data-status")&&buildQuiz(page+1),$("#btnNxt").attr("data-status",0)};