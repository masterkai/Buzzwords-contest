function loadQuestion(){var a=new XMLHttpRequest;a.open("GET",quizData,!0),a.onreadystatechange=function(){4==a.readyState&&(myObj=JSON.parse(a.responseText),page=1,buildQuiz(1))},a.send()}function buildQuiz(a){for(var b in myObj)console.log(myObj[b].question)}$(function(){$(".answer-link").on("click",function(a){a.preventDefault(),$(".answer-link").removeClass("is-selected"),$(this).addClass("is-selected"),$(".btn[disabled]").attr("disabled",!1)})});var quizData="https://api.myjson.com/bins/v3b3d",output=document.getElementById("output"),myObj="",page=0;loadQuestion();