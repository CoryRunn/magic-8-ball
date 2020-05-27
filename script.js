$(document).ready(function(){
	
    var magic8Ball = {};
    $("#answer").hide();

	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Reply hazy, try again", "Ask again later", "Don't count on it", "My reply is no"];

	magic8Ball.askQuestion = function(question) {
		var randomNumber = Math.random();
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberForListOfAnswers);
		var answer = this.listOfAnswers[randomIndex];

		
		

		$("#answer").fadeIn(4000);
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

		$("#answer").text(answer);
		
		console.log(question);
		console.log(answer);
	};
		var onClick = function(){
			$("#answer").hide();
			$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
//wait a half a second before showing prompt
			setTimeout(
				function() {
					//show prompt
			var question = prompt("Ask a yes or no question.");
					$("#8ball").effect("shake");
			magic8Ball.askQuestion(question);
				}, 500);
			
		};
	
		$("#questionButton").click(onClick);
});