 
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

function playerChoice(event) {
    //event.target.innerText 
    const choices = questions[currentQuestion].choices   //actual choices
    const answer = questions[currentQuestion].answer    //answer
    const answerText = choices[answer]
    
    if (answer === answerText) {   //check if event.target.innerText = same as answerText
        //IF correct then increment score and go to next question
        //ELSE do not log and move to next question
    }

}


//add event listener to multiple buttons with the same id
let answers = document.querySelectorAll('.answer')
let question = document.querySelector('#question-box')

let currentQuestion = 0

function newQuestion(){
    //set corresponding answers

    question.innerText = questions[currentQuestion].question
}
newQuestion()  


//set next button/ when user clicks run new question
//incriment current question BEFORE we run the function to get to next question










    
    
    
    

//     // ELSE move to next question
//     if (condition) {
        
//     } else {
        
//     }
// }





// for (let i = 0; i < questions.length; i++) {
// questions[i].addEventListener('click', function() {

//     })
// }

