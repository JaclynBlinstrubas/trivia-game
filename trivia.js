let answers = document.querySelectorAll('.answer')
let question = document.querySelector('#question-box')
let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let currentQuestion = 0
let score = 0

let questions = 
[
    {
        question: 'Gene, Louise, Tina, Bob, and Linda are the main characters of which animated sitcom?',
        choices: ['The Simpsons', 'Family Guy', 'Bob\'s Burgers', 'The Great North'],
        answer: 2
    },
    {
        question: 'In what city would you find the infamous Alcatraz? A: San Francisco',
        choices: ['New York', 'Detroit', 'San Jose', 'San Francisco'],
        answer: 3
    },
]
// console.log(questions)

function newQuestion(){
    //set corresponding answers

    question.innerText = questions[currentQuestion].question
}
newQuestion() 

function playerChoice(event) {
    //event.target.innerText 
    const choices = questions[currentQuestion].choices   //actual choices
    const answer = questions[currentQuestion].answer    //answer
    const answerText = choices[answer]
      
}


//add event listener to multiple buttons with the same id

button1.addEventListener('click', (event) => {
    currentQuestion ++
    newQuestion()
})   

button2.addEventListener('click', (event) => {
    currentQuestion ++
    newQuestion()
})

button3.addEventListener('click', (event) => {
    score ++
    currentQuestion ++
    newQuestion()
})

button4.addEventListener('click', (event) => {
    currentQuestion ++
    newQuestion()
})

//when an answer button is clicked - check if event.target.innerText = same as answerText
// ++ 1 //IF correct then increment score and go to next question
// } //ELSE do not log and move to next question ...... 
   









// function newQuestion(){
//     //set corresponding answers

//     question.innerText = questions[currentQuestion].question
// }
// newQuestion()  


//set next button/ when user clicks run new question
//incriment current question BEFORE we run the function to get to next question



// // for (let i = 0; i < questions.length; i++) {
// // questions[i].addEventListener('click', function() {

// //     })
// // }

