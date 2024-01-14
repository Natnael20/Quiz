//Before the the quiz the start button should be cilcked
document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
});

//all questions
let questions = [
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Rosalind Franklin", correct: false },
            { text: "Jane Goodall", correct: false },
            { text: "Dorothy Crowfoot Hodgkin", correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Arabian Desert", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Gobi Desert", correct: false }
        ]
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            { text: "Charlotte Brontë", correct: false },
            { text: "Jane Austen", correct: true },
            { text: "Emily Brontë", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "In which year did the first manned moon landing occur?",
        answers: [
            { text: "1965", correct: false },
            { text: "1969", correct: true },
            { text: "1973", correct: false },
            { text: "1979", correct: false }
        ]
    },
    {
        question: "What is the capital city of South Africa?",
        answers: [
            { text: "Cape Town", correct: false },
            { text: "Johannesburg", correct: false },
            { text: "Pretoria", correct: true },
            { text: "Durban", correct: false }
        ]
    },
    {
        question: "Who painted 'Starry Night'?",
        answers: [
            { text: "Claude Monet", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: false }
        ]
    },
    {
        question: "What is the world's second-largest continent by land area?",
        answers: [
            { text: "Asia", correct: false },
            { text: "North America", correct: false },
            { text: "Africa", correct: true },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the currency of China?",
        answers: [
            { text: "Yuan", correct: true },
            { text: "Yen", correct: false },
            { text: "Won", correct: false },
            { text: "Ringgit", correct: false }
        ]
    },
    {
        question: "Which gas is the Earth's most abundant atmospheric gas?",
        answers: [
            { text: "Nitrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        answers: [
            { text: "J.D. Salinger", correct: true },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "George Orwell", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Queen of Pop'?",
        answers: [
            { text: "Madonna", correct: true },
            { text: "Beyoncé", correct: false },
            { text: "Lady Gaga", correct: false },
            { text: "Taylor Swift", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Vietnam", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Louis Pasteur", correct: false },
            { text: "Robert Koch", correct: false }
        ]
    },
    {
        question: "What is the capital city of Russia?",
        answers: [
            { text: "Moscow", correct: true },
            { text: "St. Petersburg", correct: false },
            { text: "Kiev", correct: false },
            { text: "Warsaw", correct: false }
        ]
    },
    {
        question: "In what year did the United States declare its independence?",
        answers: [
            { text: "1765", correct: false },
            { text: "1776", correct: true },
            { text: "1789", correct: false },
            { text: "1800", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: false },
            { text: "Brain", correct: false },
            { text: "Skin", correct: true }
        ]
    },
    {
        question: "Who is the author of 'The Lord of the Rings' trilogy?",
        answers: [
            { text: "J.K. Rowling", correct: false },
            { text: "J.R.R. Tolkien", correct: true },
            { text: "C.S. Lewis", correct: false },
            { text: "George R.R. Martin", correct: false }
        ]
    },
];


//changing the color of the question into the desired one
question.style.color = "#172554";


// Get the HTML element that will display the question
const questionElement = document.getElementById("question");

// Get the HTML element that will contain the answer buttons
const answerButtons = document.getElementById("answer-buttons");

// Get the HTML element for the "Next" button
const nextbutton = document.getElementById("next-btn");
// Get the HTML element for the home button
const homeButton = document.getElementById("home-btn");
// Get the HTML element for the skip button
const skipButton = document.getElementById("skip-btn");
// Get the HTML element for the luck button
const luck = document.querySelector('.luck');

// Answers that are stored in the option arrays;
let currentQuestionIndex = 0;  //out of the 20 question, this will control it
let score = 0; // score statement
let attempts = 0; // New variable to track user attempts
let remainingSkips = 3; // Set the initial number of allowed skips

//this is for the quit button
document.addEventListener("DOMContentLoaded", function () {
    homeButton.addEventListener("click", function () {
        window.location.href = "index.html"; //if clicked it will automatically take user to home page
    });
});

//skip question function
function skipQuestion() {
    // Check if the user has remaining skips
    if (remainingSkips > 0) {
        currentQuestionIndex++;
        attempts = 0; // Reset attempts counter
        remainingSkips--; // Decrement the remaining skips
        //the skip button will work as it long it is not used from 3 times
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore(); 
        }
    } 
    //or this message will show up
    else {
        alert("You've used all your skips, now you are out of use!");
        skipButton.style.display = "none"; //hide the skip button
    }
}

//this will make the skip button function
skipButton.addEventListener("click", skipQuestion);

//the main part which the start of quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;  
    attempts = 0; // Reset attempts counter
    nextbutton.innerHTML = "Next";
    homeButton.innerHTML = "Quit";
    showQuestion();
}

//this function will create readable questions
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; //this variable will control the questions
    let questionNumber = currentQuestionIndex + 1; //this element will control the increasing number of questions
    //In the browser, first the question number and its question will be sown as organized
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        //creating flexiable button
        const button = document.createElement("button");
        button.innerText = answer.text;
        //this will style it
        button.classList.add("answer");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    //in the app section in question, everything will be removed including eh nextbutton
    nextbutton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correctAnswer = selectedBtn.dataset.correct;

    // Check if the user has already attempted twice
    do {
        attempts++; // Increment the attempts counter

        if (correctAnswer) {
            selectedBtn.classList.add("correct"); //if correct, the style will appear
            score++; //adding a score
            disableButtons(); //unable to click other buttons
            nextbutton.style.display = "block"; //allowing the user to go to the next question
            break; // Break out of the loop after the correct answer on the first attempt
        } else {
            selectedBtn.classList.add("incorrect"); //it is not correct so certain style will appear
        }

        // If the user has attempted twice, show the correct answer, disable the buttons, and break out of the loop
        if (attempts === 2) {
            showCorrectAnswer(); //if the user failed to answer twice, this function will help the user by revealing teh answer
            disableButtons(); //the buttons will be unclickable
            nextbutton.style.display = "block";//allowing the user to go to the next question
            break;
        }
    } while (false);
}

function showCorrectAnswer() {
    // Find the button with the correct answer and add the correct sstyle in CSS
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); 
        }
    });
}

//THe function will disable the buttons
function disableButtons() {
    // Disable all buttons
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
}

function showScore() {
    resetState(); //again, the app div will be disappear when showin gscore
    //showing how the user done or show the socre
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!` + "<br>";

    //this will guide the user how he has done with the question
    if (score === questions) { //20/20 is exceellent
        questionElement.innerHTML += "Excellent";
    } 
    else if(score >= 16) { //16 onwards
        questionElement.innerHTML += "Good Job";
    }
    else if(score >= 12) { //12 onwards
        questionElement.innerHTML += "Not Bad!";
    }
    else {
        questionElement.innerHTML += "Keep Studying!"; //below 12
    }
    nextbutton.innerHTML = "Play Again"; //next button will be transformed into play again
    nextbutton.style.display = "block"; //show button

    skipButton.style.display = "none"; //skip button will not be displayed since there is not question

    //after the quiz is ended the "Related Quiz" will be shown 
    document.querySelector('.more-quiz').style.display = 'block'; 
}

function handleNextButton() {
    currentQuestionIndex++; 
    attempts = 0; // Reset attempts counter

    if (currentQuestionIndex < questions.length) {
        showQuestion(); //show the questions until it reachs to the length
    } else {
        showScore(); //if the question are finished, then the score will be shown
    }
}

nextbutton.addEventListener('click', function () {
    //if the user clicked play again, the "related quiz" disappear again
    if (this.innerHTML.toLowerCase() === 'play again') {
        document.querySelector('.more-quiz').style.display = 'none';
    }
});

nextbutton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); //show the questions until it reachs to the length
    } else {
        startQuiz(); //if the question are finished, then the score will be shown
    }
});

// calling out the start quiz to set up the game
startQuiz();