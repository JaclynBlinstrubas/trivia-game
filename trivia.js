let answers = document.querySelectorAll('.answer')
let question = document.querySelector('#question-box')
let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let currentQuestion = 0
let score = document.querySelector('.score')
let scoreNumber = 0
let gameOver = false
let reset = document.querySelector('.reset-button')
isHidden = document.querySelector('#answer-buttons').hidden

let questions = 
[
    {
        question: 'Gene, Louise, Tina, Bob, and Linda are the main characters of which animated sitcom?',
        choices: ['The Simpsons', 'Family Guy', 'Bob\'s Burgers', 'The Great North'],
        answer: 'Bob\'s Burgers'
    },
    {
        question: 'In what city would you find the infamous Alcatraz?',
        choices: ['New York', 'Detroit', 'San Jose', 'San Francisco'],
        answer: 'San Francisco'
    },
    {
        question: 'Approximately how many teeth can a shark grow in a lifetime?',
        choices: ['50,000', '500', '50', '5,000'],
        answer: '50,000'
    },
    {
        question: 'How often are brain cells replaced?',
        choices: ['Every 30 Seconds', 'Never', 'Every Hour', 'Daily'],
        answer: 'Never'
    },
    {
        question: 'What is the national bird of the Bahamas?',
        choices: ['The Macaw Parrot', 'The Toucan', 'The Flamingo', 'The Cockatoo'],
        answer: 'The Flamingo'
    },
    {
        question:'Bubble Wrap was invented while researchers were trying to make what?',
        choices: ['Wallpaper', 'Styrofoam', 'Saran Wrap', 'Plastic Bags'],
        answer: 'Wallpaper'
    },
    {
        question: 'Which planet has the most gravity?',
        choices : ['Mercury', 'Earth', 'Neptune', 'Jupiter'],
        answer: 'Jupiter',
    },
    {
        question: 'In which video game did Super Mario first appear?',
        choices : ['Super Mario Bros.', 'Donkey Kong', 'Mario Kart', 'Yoshi\'s Island'],
        answer: 'Donkey Kong',
    },
    {
        question: 'How many hearts does an Octopus have?',
        choices : ['3', '1', '8', '0'],
        answer: '3',
    },
    {
        question: 'What is the most consumed manufactured drink in the world?',
        choices: ['Coca Cola', 'Tea', 'Milk', 'Coffee'],
        answer: 'Tea'
    },
    {
        question: 'What is the most consumed manufactured drink in the world?',
        choices: ['Coca Cola', 'Tea', 'Milk', 'Coffee'],
        answer: 'Tea'
    }
]


function newQuestion(){
    //set corresponding answers
    // console.log(currentQuestion)
    question.innerText = questions[currentQuestion].question

}
newQuestion() 


function newAnswers(){
    button1.innerText = questions[currentQuestion].choices[0]
    button2.innerText = questions[currentQuestion].choices[1]
    button3.innerText = questions[currentQuestion].choices[2]
    button4.innerText = questions[currentQuestion].choices[3]
}
newAnswers()


function toggleReset() {
    if (scoreNumber === 100) {
        isHidden = true
    }
}



const answerButtons = document.querySelector('#answer-buttons')
// console.log(answerButtons)
answerButtons.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.tagName === 'BUTTON') {    // checking to see if we actually clicked a button
        if (event.target.innerText === questions[currentQuestion].answer) {    //seeing if the button we clicked was the correct answer
            currentQuestion ++ 
            scoreNumber += 10
            newQuestion()
            newAnswers()

            score.innerText = scoreNumber
            if (scoreNumber === 100) {
                gameOver = true
                window.alert('Winner Winner Chicken Dinner!')

            }
        }
    }
})

//start button

//reset button
reset.addEventListener('click', (event) => {
    // console.log(event) // how do i find the innerText?
    if(event.target.innterText === 'BUTTON') {
        currentQuestion = 0
    }
})






// function playerChoice(event) {
//     //event.target.innerText 
//     const choices = questions[currentQuestion].choices   //actual choices
//     const answer = questions[currentQuestion].answer    //answer
//     const answerText = choices[answer]
      
// }





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

