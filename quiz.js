var score = 0;
var currentQuestion = 0;
const questionArea = document.getElementById('question-placement');
const firstAnswer = document.getElementById('first');
const secondAnswer = document.getElementById('second');
const thirdAnswer = document.getElementById('third');
const scoreArea = document.getElementById('score');
const openingTitle = document.getElementById('intro-question');

var myQuestions= [
    {
        question: "what's my name?",
        answers: {
            a: 'Jonny',
            b: 'Fred',
            c: 'Manny'
        },
        correct_answer: 'A'
    },
    {
        question: "what's my dog's name?",
        answers: {
            a: 'Azula',
            b: 'Fred',
            c: 'Sis'
        },
        correct_answer: 'A'
    },
    {
        question: "what's my favorite baseball team?",
        answers: {
            a: 'Yankees',
            b: 'Dodgers',
            c: 'Pirates'
    },
        correct_answer: 'B'
    },{
        question: "What is the name of my favorite band?",
        answers: {
            a: 'Paramore',
            b: 'Ballyhoo!',
            c: 'Sublime'
    },
        correct_answer: 'C'
    }
]


function check_ans(val) { 
    for (var i = currentQuestion; i < myQuestions.length; i++){
        if(currentQuestion + 1 == myQuestions.length){
            if(val == myQuestions[i].correct_answer){
                score += 1;
                scoreArea.innerHTML = "";
                scoreArea.innerHTML = "Score: " + score;
                questionArea.innerHTML = "Thank you for playing! End of Quiz!"
                firstAnswer.remove(); secondAnswer.remove(); thirdAnswer.remove();
                scoreArea.innerHTML =  score + " / " + myQuestions.length;
                return
            }else{
                questionArea.innerHTML = "Thank you for Playing! End of Quiz!"
                firstAnswer.remove(); secondAnswer.remove(); thirdAnswer.remove();
                scoreArea.innerHTML =  score + " / " + myQuestions.length;
            }
            return
        }
        else if(val == myQuestions[i].correct_answer){
            score += 1;
            scoreArea.innerHTML = "";
            scoreArea.innerHTML = "Score: " + score;
        }
        openingTitle.innerHTML = "";
        questionArea.innerHTML = myQuestions[i + 1].question;
        firstAnswer.innerHTML = myQuestions[i + 1].answers.a;
        secondAnswer.innerHTML = myQuestions[i + 1].answers.b;
        thirdAnswer.innerHTML = myQuestions[i + 1].answers.c;
        currentQuestion += 1;
        return
    }
}

