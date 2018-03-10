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
	//When buttons is clicked clear triviabox
	$('.startbutton').click(function() {
		//Emptys trivia section
        $('.triviabox').empty();
        $('.introfont').empty();
        $('.namefont').empty();
        $('img').remove();
        $('.mainboxfont').append('Trivia Game');
        // $('.mainboxfont').empty();
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
	AnswerButtons();
}

start();