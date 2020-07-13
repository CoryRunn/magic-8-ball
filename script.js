$(document).ready(function(){//This code is needed to activate jQuery
	
    var magic8Ball = {};
    $("#answer").hide();//getElementById(answer) and hide it upon page load

	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Reply hazy, try again", "Ask again later", "Don't count on it", "My reply is no"];

	magic8Ball.askQuestion = function(question) {
		var randomNumber = Math.random();//returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberForListOfAnswers);//Rounds number down
		var answer = this.listOfAnswers[randomIndex];//randomizes an answer from the listOfAnswers array.

		$("#answer").fadeIn(4000);//fades in answer over 4 seconds
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

		$("#answer").text(answer);
		
		console.log(question);
		console.log(answer);
	};
		var onClick = function(){
			$("#answer").hide();//Hides the answer from the previous question asked.
			$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

			setTimeout(
				function() {
					
			var question = prompt("Ask a yes or no question.");//show prompt in pop-up window.
					$("#8ball").effect("shake");//Then shakes the 8ball image after asking question and clicking "ok".
			magic8Ball.askQuestion(question);
				}, 500);//wait a half a second before showing question prompt.
			
		};
	
		$("#questionButton").click(onClick);//Runs the onClick funtion when the #questionButton is clicked.
});