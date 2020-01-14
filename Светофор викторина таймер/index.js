var trafficLightsHeadlightRed = document.querySelector(".traffic-lights-headlight-red");
var trafficLightsHeadlightOrange = document.querySelector(".traffic-lights-headlight-orange");
var trafficlightsheadlightGreen = document.querySelector(".traffic-lights-headlight-green");
var housingTrafficArrowTwoContainer = document.querySelector(".housing-traffic-arrow-two-container");
var housingTrafficArrowContainer = document.querySelector(".housing-traffic-arrow-container")
var peopleSignalWalkContainer = document.querySelector(".people-signal-walk-container");
var peopleSignalStopContainer = document.querySelector(".people-signal-stop-container")
var quizContainer = document.querySelector(".quiz-container");
var quiz = document.querySelector(".quiz")
var nextQuestion = document.querySelector(".next-question")
var nextQuestionOne = document.querySelector(".next-question-one")
var nextQuestionTwo = document.querySelector(".next-question-two")
var nextQuestionTree = document.querySelector(".next-question-tree")
var nextQuestionFor = document.querySelector(".next-question-for")
var nextQuestionFive = document.querySelector(".next-question-five")
var answer = document.querySelector(".answer")
var container = document.querySelector(".container")
var timer = document.querySelector(".timer")


var data = [
      {
      	question: "Можноли начать двигаться автомобилю на этот сигнал светофора?",
      	answers: ["Да", "Нет"],
      	correctanswer: "Нет"
      },
      {
      	question: "Можно ли пешеходу переходить дорогу на этот сигнал светофора?",
      	answers: ["Да","Нет","Может если не кто не видит","Нужно спросить у родителей"],
      	correctanswer: "Нет"
      },
      {
      	question: "Как себя должне вести автомобилист увидя этот знак",
      	answers: ["Остановиться","Начать торможение","Проехать через дорогу как можно быстрей","Ехать дальше без изменения скорости"],
      	correctanswer: "Начать торможение"
      },
      {
      	question: "Разрешается ли движение автомобилям на этот сигнал",
      	answers: ["Да","Нет","Только по четным дням","Можно двигаться на любой сигнал светофора"],
      	correctanswer: "Да"
      },
      {
      	question: "Куда позволяет продолжить движение этот сигнал?",
      	answers: ["На право","На лево","Прямо","В обратную сторону"],
      	correctanswer: "На право"
      },
      {
      	question: "В какую сторону можно ехать на это сигнал светофора",
      	answers: ["На лево","На право","Прямо","В обратную сторону"],
      	correctanswer: "На лево"
      },
      {
      	question: "Может ли пешеход начать движение на этот сигнал светофора?",
      	answers: ["Может","Не может","Может если не кто не видит","Надо спросить у родителй"],
      	correctanswer: "Может"
      }

]

j = 0;
c = 31;

trafficLightsHeadlightRed.style.background = "red";

var timerID 

function startTimer(){
	c--;
	timer.innerHTML = c
	if(c == 0){
	c = 31
	}	
	if (c >= 10){
		timer.style.color = "green"
	}  else {
		timer.style.color = "red"
	}
}


setInterval(startTimer, 1000)

function addAnswer() {

	quiz.innerHTML = data[j].question


	for(i = 0; i < data[j].answers.length; i++){
		var answer = document.createElement('div');
		answer.classList.add("answer");
		container.appendChild(answer);
		console.log(answer)
		answer.innerHTML = data[j].answers[i]
		

			if(data[j].answers[i] == data[j].correctanswer){
				answer.onclick = function(){
					this.innerHTML = "Верно";
				} 
			} else {
					answer.onclick = function(){
						this.innerHTML = "Не верно"
					}
				}
		
	}
}
	


function peopleSignalStop(){
	peopleSignalStopContainer.style.background = "red";
	trafficLightsHeadlightRed.style.background = "white";
} 

function signalSwitchingOrange(){
	trafficLightsHeadlightRed.style.background = "white";
	trafficLightsHeadlightOrange.style.background = "orange";
}


function signalSwitchingGreen(){
	trafficLightsHeadlightOrange.style.background = "white";
	trafficlightsheadlightGreen.style.background = "green";
}

function signalArrowRight(){
	trafficLightsHeadlightRed.style.background = "red";
	housingTrafficArrowContainer.style.background = "green";
	trafficlightsheadlightGreen.style.background = "white";
}
function signalArrowLeft(){
	trafficLightsHeadlightRed.style.background = "red";
	housingTrafficArrowContainer.style.background = "white";
	housingTrafficArrowTwoContainer.style.background = "green";
	trafficlightsheadlightGreen.style.background = "white";
}
function signalWalk(){
	peopleSignalStopContainer.style.background = "white";
	peopleSignalWalkContainer.style.background = "green"
	housingTrafficArrowTwoContainer.style.background = "white";
	trafficlightsheadlightGreen.style.background = "white";
}

	function next(){
		if(j == data.length -1){
		return;
		};
		j++;
		container.innerHTML = "";
		
		addAnswer();
		}


addAnswer();
setTimeout(peopleSignalStop, 31500);
setTimeout(next, 31500);
setTimeout(signalSwitchingOrange, 63000);
setTimeout(next, 63000);
setTimeout(signalSwitchingGreen, 94500);
setTimeout(next, 94500);
setTimeout(signalArrowRight, 125000);
setTimeout(next, 125000);
setTimeout(signalArrowLeft, 156500);
setTimeout(next, 156500);
setTimeout(signalWalk, 188000);
setTimeout(next, 188000);
