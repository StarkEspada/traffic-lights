
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
var answer = document.querySelector(".answer")
var container = document.querySelector(".container")
var timer = document.querySelector(".timer")

/*var dataSignal = [
	{
		one: trafficLightsHeadlightRed.style.background = "red",
		two: trafficLightsHeadlightOrange.style.background = "orange",
		tree: trafficlightsheadlightGreen.style.background = "green",
		for: housingTrafficArrowTwoContainer.style.background = "green",
		five: housingTrafficArrowContainer.style.background = "green",
		oneWite: trafficLightsHeadlightRed.style.background = "white",
		twoWite: trafficLightsHeadlightOrange.style.background = "white",
		treeWite: trafficlightsheadlightGreen.style.background = "white",
		forWite: housingTrafficArrowTwoContainer.style.background = "white",
		fiveWite: housingTrafficArrowContainer.style.background = "white"

	}
	
		
	
]*/

	peopleSignalStopContainer.style.background = "red";
	trafficLightsHeadlightRed.style.background = "red";

function signalSwitchingRed(){
	trafficLightsHeadlightRed.style.background = "red";
	trafficlightsheadlightGreen.style.background = "white";
	housingTrafficArrowTwoContainer.style.background = "white";
	peopleSignalWalkContainer.style.background = "white"
	peopleSignalStopContainer.style.background = "red";

}

function signalSwitchingOrange(){
	trafficLightsHeadlightRed.style.background = "white";
	trafficLightsHeadlightOrange.style.background = "orange";
}

function signalSwitchingGreen(){
	trafficLightsHeadlightOrange.style.background = "white";
	trafficlightsheadlightGreen.style.background = "green";
}

function reverseSignalGreen(){
	trafficlightsheadlightGreen.style.background = "white";
	trafficLightsHeadlightOrange.style.background = "orange";
}

function reverseSignalOrange(){
	trafficLightsHeadlightRed.style.background = "red";
	trafficLightsHeadlightOrange.style.background = "white";
}
function signalArrowRight(){
	trafficLightsHeadlightRed.style.background = "red";
	housingTrafficArrowContainer.style.background = "green";
}
function signalArrowLeft(){
	trafficLightsHeadlightRed.style.background = "red";
	housingTrafficArrowContainer.style.background = "white";
	housingTrafficArrowTwoContainer.style.background = "green";
}
function signalWalk(){
	peopleSignalStopContainer.style.background = "white";
	peopleSignalWalkContainer.style.background = "green"
	housingTrafficArrowTwoContainer.style.background = "white";
}

function start(){
	setTimeout(signalSwitchingRed, 1000);
	setTimeout(signalSwitchingOrange, 4000);
	setTimeout(signalSwitchingGreen, 6000);
	setTimeout(reverseSignalGreen, 10000);
	setTimeout(reverseSignalOrange, 12000);
	setTimeout(signalArrowRight, 13000);
	setTimeout(signalArrowLeft, 18000)
	setTimeout(signalWalk, 23000)
}

setTimeout(start, 1000);
setInterval(start, 33000);