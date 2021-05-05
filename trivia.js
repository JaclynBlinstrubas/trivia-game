//initialize variables

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
let isHidden = document.querySelector('#answer-buttons')

//initialize array: each object in the array contains a question, an array of possible choices,
//and the correct answer for that particular question

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

// function for setting a new question
function newQuestion(){
    question.innerText = questions[currentQuestion].question
}
newQuestion() 

// function for setting a new set of answers
function newAnswers(){
    button1.innerText = questions[currentQuestion].choices[0]
    button2.innerText = questions[currentQuestion].choices[1]
    button3.innerText = questions[currentQuestion].choices[2]
    button4.innerText = questions[currentQuestion].choices[3]
}
newAnswers()

// function for reset button & to hide the answer choices at the end of the game
function toggleReset() {
    if (scoreNumber === 100) { 
        isHidden.style.display = 'none'
    }
}

//event listener to work through the question sequence
const answerButtons = document.querySelector('#answer-buttons') //calls #answer-buttons from the HTML document

answerButtons.addEventListener('click', (event) => {  //when an answer button is clicked, do the following: 

    if (event.target.tagName === 'BUTTON') {    // checking to see if we actually clicked a button
        if (event.target.innerText === questions[currentQuestion].answer) {     //checking if the button we clicked was the correct corresponding answer
            currentQuestion ++  //once the correct answer is clicked, go to the next question
            scoreNumber += 10   //once correct answer is clicked, add 10 points to scoreNumber
            newQuestion()   //call newQuestion function to set a new question
            newAnswers()    //call newAnswers function to set a new set of answers


            score.innerText = scoreNumber   //sets the score text on the page to match scoreNumber
            if (scoreNumber === 100) {  //once score reaches 100
                window.alert('Winner Winner Chicken Dinner!')   //alert the player they have won
            }
            toggleReset()   //when score reaches 100, call this toggelReset function 
        }
    }
})

//reset button restets the game
reset.addEventListener('click', (event) => {    //when reset button is clicked, do the following: 
    scoreNumber = 0     //reset scoreNumber back to 0
    score.innerText = scoreNumber
    currentQuestion = 0     //reset currentQuestion back to 0, or the 1st question
    isHidden.style.display = 'block'    //this will display the answer buttons
    newQuestion()   //call newQuestion function to set a new question
    newAnswers()    //call newAnswers function to set a new set of answers
})