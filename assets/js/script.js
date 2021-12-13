var startButton = document.getElementById('start');
var questionsCon = document.getElementById('question-container');
var answerButtons = document.getElementById('answer-buttons');
var timer = document.getElementById('timer')
var changeButton = document.getElementById('ChangeButton');
var answerButton = document.getElementsByClassName('answer-button');

// // var score = questions[0];
var time = 60;
// var currentTimer;
// var currentQuestion = -1;

function runTimer(){
currentTimer= setTimeout(() => {
        time--
        timer.innerHTML = time
        if(time > 0){
            runTimer()
        } else {
            stopTimer()
        }
    }, 1000);
}

const questions = [
    {
        question: "Commonly used data types do NOT include",
        answers: [
            { text: "alerts", correct: true},
            { text: "booleans", correct: false},
            { text: "strings", correct: false},
            { text: "square bracket", correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answers: [
            { text: "quotes", correct: false},
            { text: "curly brackets", correct: false},
            { text: "parenthesis", correct: true},
            { text: "square brackets", correct: false}
        ]
    },
    {
        question: "Which is a data type?",
        answers: [
            { text: "function", correct: false},
            { text: "boolean", correct: true},
            { text: "variable", correct: false},
            { text: "message", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: [
            { text: "other arrays", correct: false},
            { text: "boolean", correct: false},
            { text: "numbers and strings", correct: false},
            { text: "all of the above", correct: true}
        ]
    },
]

let finalQuestion = questions.length
let answer1 = document.getElementById('ans1');
let answer2 = document.getElementById('ans2');
let answer3 = document.getElementById('ans3');
let answer4 = document.getElementById('ans4');
let questionEl = document.getElementById('question');
console.log(questions[0].answers[0].text)
function showQuestions(){
    if (finalQuestion > 0){
        questionEl.textContent = questions[0].question;
        answer1.textContent = questions[0].answers[0].text;
        answer2.textContent = questions[0].answers[1].text;
        answer3.textContent = questions[0].answers[2].text;
        answer4.textContent = questions[0].answers[3].text;
    }

}

function startQuiz() {
    startButton.classList.add('hide');
    document.getElementById('question-container').classList.remove('hide');
    runTimer();
    console.log('start');
    showQuestions()

    // for (i=0; )


nextQuestion();

}

function nextQuestion(){
    currentQuestion++
    if (currentQuestion > questions.length){
        showScore();
    } else {
        questionsCon.innerHTML= questions[currentQuestion].text
    }
}




// function showQuestionAndAnswer(){
//     questionEl.text = 
//     answer0.text =  
//     answer1.text =  
//     answer2.text = 
//     answer3.text = 
// }





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

