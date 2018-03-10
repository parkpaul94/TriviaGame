var time = 0;
var rCount = 0;
var wCount = 0;
var QNumber = 1;
var timer = '';
var QandA = {
			1:{
				question:'What was the last name of the monk who invented Champagne?',
				answers:['Perignon','Perrier','Clicquot','Macquart'],
				correct:'Perignon',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/answers/champagne.gif'
			   },
			2:{
				question:'Which company does VW Group not own?',
				answers:['Audi','Bentley','Lamborghini','Ferrari'],
				correct:'Ferrari',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/answers/ferrari.gif'
			},
			3:{
				question:'Where is the Sea of Tranquility?',
				answers:['Atlantic','Pacific', 'Moon', 'Artic'],
				correct:'Moon',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/answers/moon.gif'
            },
            4:{
				question:'What is the name of the newest Country to be recognized by UN?',
				answers:['Kosovo','South Sudan','Serbia','Montenegro'],
				correct:'South Sudan',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/answers/southsudan.gif'
			},
            5:{
				question:'What is the name of the biggest island?',
				answers:['Greenland','Australia','Antarctica','Madagascar'],
				correct:'Greenland',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/answers/greenland.gif'
			},
            6:{
				question:'What is the last name of Jay-Z',
				answers:['Broadus','Roberts','Carter','Young'],
				correct:'Carter',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/answers/jayz.gif'
			},
            7:{
				question:"In 'The Golden Apple of Discord' who was NOT the Goddesses fighting for the Apple?",
				answers:['Athena','Aphrodite','Hera','Eris'],
				correct:'Eris',
				right: 'Correct!',
				wrong: 'Wrong!',
				imageUrl:'assets/images/answers/eris.gif'
			}

	};

//==============================================================//
var start = function() { 
	$('.startbutton').click(function() {
        $('.triviabox').empty();
        $('.introfont').empty();
        $('.namefont').empty();
        $('img').remove();
        $('.mainboxfont').append('Trivia Game');
		createQuestions();
	});
}

var createQuestions = function() {
	timerStart();
	var question = QandA[QNumber]['question'];
	var questionDiv = $('<div>');
	questionDiv.addClass('question');
	questionDiv.text(question);
	$('.triviabox').append(questionDiv);
	Answers();
}

var Answers = function() {
	var answerLength = QandA[QNumber]['answers'].length;
	for(var i = 0; i < answerLength;i++) {
		var answers = QandA[QNumber]['answers'][i];
		var newbutton = $('<button>');
		newbutton.addClass('answers ansbtn');
		newbutton.attr('data-type',answers);
		newbutton.text(answers);
		$('.triviabox').append(newbutton);
	}
	$(document).off('click','.answers',AnswerCheck);
	$(document).on('click','.answers',AnswerCheck);
}

var timerStart = function() { 
	$('.timerSection').empty();
	gameTime = 100;
	var timeTag = $('<div>');
	timeTag.addClass('time');
	timeTag.addClass('progress');
	var progressBar = $('<div>');
    progressBar.addClass('progress-bar progress-bar-striped progress-bar-color');
	progressBar.width(gameTime + '%');
	$('.timerSection').append(timeTag);
	$('.time').append(progressBar);	
	timer = setInterval(timeDecrement, 100);
}

var timeDecrement = function() { 
	$('.progress-bar').width(gameTime + '%');
	gameTime--;
	if(gameTime === -10) { // If the gameTime is set as === 0 it finishes before the timer runs out
		userAnswer = false;
		clearInterval(timer);
		AnswerCheck();
	}
	
}

var AnswerCheck = function() {
	//Get users answer choice
   var userAnswer = $(this).data('type');
   var correctAnswer = QandA[QNumber]['correct'];
   var correctImg = QandA[QNumber]['imageUrl'];
   var right = QandA[QNumber]['right'];
   var wrong = QandA[QNumber]['wrong'];
   console.log(QNumber);
}

start();