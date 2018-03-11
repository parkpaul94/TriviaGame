var time = 0;
var rCount = 0;
var wCount = 0;
//==================== THIS WILL MAKE IT PICK A RANDOM QUESTION FROM 1-25 ==================================
// var minQ = 1;
// var maxQ = 25;
// var QNumber = Math.floor(Math.random() * ((maxQ-minQ)+1) + minQ);
// =========================================================================================================
var QNumber = 1; //THIS WILL MAKE THE QUESTION START FROM FIRST QUESTION
var timer = '';
var QandA = {
			1:{
				question:'What was the last name of the monk who invented Champagne?',
				answers:['Perignon','Perrier','Clicquot','Macquart'],
				correct:'Perignon',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/champagne.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			   },
			2:{
				question:'Which company does VW Group not own?',
				answers:['Audi','Bentley','Lamborghini','Ferrari'],
				correct:'Ferrari',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/ferrari.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
			3:{
				question:'Where is the Sea of Tranquility?',
				answers:['Atlantic','Pacific', 'Moon', 'Artic'],
				correct:'Moon',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/moon.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
            },
            4:{
				question:'What is the name of the newest Country to be recognized by UN?',
				answers:['Kosovo','South Sudan','Serbia','Montenegro'],
				correct:'South Sudan',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/southsudan.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            5:{
				question:'What is the name of the biggest island?',
				answers:['Greenland','Australia','Antarctica','Madagascar'],
				correct:'Greenland',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/greenland.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            6:{
				question:'What is the last name of Jay-Z',
				answers:['Broadus','Roberts','Carter','Young'],
				correct:'Carter',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/jayz.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            7:{
				question:"In 'The Golden Apple of Discord' who was NOT the Goddesses fighting for the Apple?",
				answers:['Athena','Aphrodite','Hera','Eris'],
				correct:'Eris',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/eris.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            8:{
				question:"What is Lord Voldemort family name?",
				answers:['Gaunt','Selwyn','Lestrange','Greengrass'],
				correct:'Gaunt',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/voldemort.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            9:{
				question:"Who from below have won an Oscar?",
				answers:['Brad Pitt','Johnny Depp','Tom Cruise','Nicolas Cage'],
				correct:'Nicolas Cage',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/cage.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            10:{
				question:"Who was NOT born the same year as Martin Luther King Jr?", 
				answers:['Anne Frank','Grace Kelly','Elvis Presley','Audrey Hepburn'],
				correct:'Elvis Presley',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/elvis.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            11:{
				question:"According to Thomas Edison, 'genius' is one percent inspiration and 99%:",
				answers:['Perspiration','Concentration','Genetics','Education'],
				correct:'Perspiration',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/Perspiration.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            12:{
				question:"O Romeo, Romeo, ____ art thou Romeo?",
				answers:['Where','Were','Wherefore','Therefore'],
				correct:'Wherefore',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/Wherefore.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            13:{
				question:"What is the shallowest ocean in the world?",
				answers:['Atlantic','Arctic','Indian','Pacific'],
				correct:'Arctic',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/Arctic.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            14:{
				question:"In the Simpsons, what is the brand of the beer served?",
				answers:['Buzz','Alamo','Duff','Beer'],
				correct:'Duff',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/duff.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            15:{
				question:"Which of the following kills the most people annually?",
				answers:['Sharks','Football','Deer','Ants'],
				correct:'Deer',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/deer.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            16:{
				question:"What was the breakfast beverage of choice prior to Coffee?",
				answers:['OJ','Milk','Beer','Water'],
				correct:'Beer',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/beer.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            17:{
				question:"Who was the founder of Taco Bell?",
				answers:['Drake Bell','Glen Bell','Graham Bell','John Bell'],
				correct:'Glen Bell',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/taco.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            18:{
				question:"What was the largest denomination of to circulate the US?",
				answers:['$100','$1000','$10000','$100000'],
				correct:'$10000',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/money.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            19:{
				question:"What is NOT a color of an Olympic Flag rings?",
				answers:['Red','Blue','White','Green'],
				correct:'White',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/olympic.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            20:{
				question:"The M&M in M&M's chocolate stands for?",
				answers:['Milk & Malt','Mix & Match','Mars & Murrie','Mr & Mrs'],
				correct:'Mars & Murrie',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/mm.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            21:{
				question:"A ____ is a measurement of 1/100th of a second.",
				answers:['Moot','Bloit','Shake','Jiffy'],
				correct:'Jiffy',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/paint.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            22:{
				question:"What is the largest amount in coins without being able to make a dollar?",
				answers:['$1.19','$1.13','$1.01','$1.09'],
				correct:'$1.19',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/coins.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            23:{
				question:"Three Musketeers candy had which flavors prior to WWII?",
				answers:['Chocolate','Vanilla','Strawberry','All 3'],
				correct:'All 3',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/musketeers.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            24:{
				question:"Australia was originally called ____",
				answers:['New Holland','Austrialia','New Wales','Kingsland'],
				correct:'New Holland',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/australia.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
			},
            25:{
				question:"Which mascot wears a monocle?",
				answers:['Monopoly Man','Mr. Peanut','Pringles','KFC'],
				correct:'Mr. Peanut',
				right: 'Correct!',
				wrong: 'Wrong!',
				correctImage:'assets/images/answers/peanut.gif',
				wrongImage:'assets/images/answers/disappointed.gif'
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
		newbutton.addClass('answers mainbutton');
		newbutton.attr('data-type',answers);
		newbutton.text(answers);
		$('.triviabox').append(newbutton);
	}
	$(document).off('click','.answers', AnswerCheck);
	$(document).on('click','.answers', AnswerCheck);
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
	if(gameTime === -6) { // If the gameTime is set as === 0 it finishes before the timer runs out
		userAnswer = false;
		clearInterval(timer);
		AnswerCheck();
	}
}

var AnswerCheck = function() {
   var userAnswer = $(this).data('type');
   var correctAnswer = QandA[QNumber]['correct'];
   var correctImg = QandA[QNumber]['correctImage'];
   var wrongImg = QandA[QNumber]['wrongImage'];
   var right = QandA[QNumber]['right'];
   var wrong = QandA[QNumber]['wrong'];
   console.log(QNumber);

   if(userAnswer === correctAnswer) {
		$('.timerSection').empty();
		rCount++;
		$('.triviabox').empty();
		var newImg = $('<img>');
		newImg.addClass('size');
		newImg.attr('src', correctImg);
		$('.triviabox').append(newImg);
		var newDiv = $('<div>');
		newDiv.addClass('rightAnswer');
		newDiv.html(right + '<br>' + 'The answer was: ' + correctAnswer + '!');
		$('.triviabox').append(newDiv);
		clearInterval(timer)
		QNumber++;

	if(QNumber <= 25) {
		setTimeout(function() {
		$('.triviabox').empty();
		createQuestions();}, 4500);
	}
		else {
			setTimeout(gameOver, 4500);
			}
	}
	else{
        $('.timerSection').empty();
		wCount++;
		$('.triviabox').empty();
        var newImg = $('<img>');
        newImg.addClass('size');
		newImg.attr('src', wrongImg);
		$('.triviabox').append(newImg);
		var newDiv = $('<div>');
		newDiv.addClass('wrongAnswer');
		newDiv.html(wrong + '<br>' + 'The answer was: ' + correctAnswer + '!')
		$('.triviabox').append(newDiv);
		clearInterval(timer)
		QNumber++;
			if(QNumber <= 25) {  
				setTimeout(function() {
				$('.triviabox').empty();
				createQuestions();}, 4500);
			}
				else {
					setTimeout(gameOver, 4500);
					}
		}
}

var gameOver = function() {
	$('.triviabox').empty();
	$('.timerSection').empty();
	var scoreDiv = $('<div>');
	scoreDiv.addClass('score');
	scoreDiv.html('Correct: ' + rCount + '<br>' + 'Wrong: ' + wCount);
	$('.triviabox').append(scoreDiv);
	var gameoverDiv = $('<div>');
	gameoverDiv.addClass('gameOver');
	gameoverDiv.html('Game Over!');
	$('.triviabox').append(gameoverDiv);

	var newbutton = $('<button>');
    var clearbutton = $('<button>');
    newbutton.addClass('mainbutton resetbutton');
    clearbutton.addClass('clearbutton');
    newbutton.text('Replay');
    clearbutton.text('Clear');
    $('.triviabox').append(newbutton);
    $('.triviabox').append(clearbutton);
	trivTime = 4500;
	QNumber = 1;
	rCount = 0;
	wCount = 0;
	$('.resetbutton').on('click',function() {
		$('.triviabox').empty()
		createQuestions();
    });
    $('.clearbutton').on('click',function() {
        location.reload();
    });
}

start();