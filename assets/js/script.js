var startButton = document.getElementById('start');
var questionElement = document.getElementById('question-element');
var questions = document.getElementById('question-container');
var answerButtons = document.getElementById('answer-buttons');

var questions = [
    {
    question: 'question',
    answers: [
        { text: 'correct' },
        { text: 'wrong' },
        { text: 'wrong' },
        { text: 'wrong' }
    ]
    },
    {
        question: 'question',
        answers: [
        { text: 'correct' },
        { text: 'wrong' },
        { text: 'wrong' },
        { text: 'wrong' }
        ]
    },
    {
        question: 'question',
        answers: [
        { text: 'correct' },
        { text: 'wrong' },
        { text: 'wrong' },
        { text: 'wrong' }
        ]
    },
]

var answers = []
var score = ""


function startQuiz() {
    startButton.classList.add('hide');
    document.getElementById('question-container').classList.remove('hide');

    
}

startButton.addEventListener('click',startQuiz);

//hide the questions
//hide the start button
//load the question
//click on the right answer
//right answer --- yay! wrong answer ---boo!
//load next question 
//repeat yay! Boo! 
//log the answers 
//finis quiz ---> go to high score page 
//put answers into an array 
//log array into local storage for the high score page
//deal with the timer if you can 
//create septate html for high scores page 

