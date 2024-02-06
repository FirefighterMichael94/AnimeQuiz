// This is where I set my Questions and their answers. Along with an image that was added from the system vs a url. 
//questions can easily be added here.

const questions = [
    { 
        question: "What does the term Isekai mean",
        options: ["In a different world", "Die embarassingly", "Teleport", "Life"],
        answer: "In a different world",
        imageUrl: "Assets/Inanotherworld.jpe" 
    },
    {
        question: "Which is of these is considered an Isakai?",
        options: ["Reincarnated as a Slime", "Death Note", "My Hero Academia", "HunterxHunter"],
        answer: "Reincarnated as a Slime",
        imageUrl: "Assets/183aa89af7da4843887aa1b9dc67b252.jpe"
    },
    {
        question: "In this Anime it is ok to?",
        options:["Own a slave","Use a sheild","be free","plant magical seeds"],
        answer: "Own a slave",
       imageUrl: "Assets/Sheildhero.jpg"
    }
    { 
        question: "What does the term Isekai mean",
        options: ["In a different world", "Die embarassingly", "Teleport", "Life"],
        answer: "In a different world",
        imageUrl: "Assets/Inanotherworld.jpe"
    },
    {
        question: "Which is of these is considered an Isakai?",
        options: ["Reincarnated as a Slime", "Death Note", "My Hero Academia", "HunterxHunter"],
        answer: "Reincarnated as a Slime",
        imageUrl: "Assets/183aa89af7da4843887aa1b9dc67b252.jpe"
    },
    {
        question: "In this Anime it is ok to?",
        options:["Own a slave","Use a sheild","be free","plant magical seeds"],
        answer: "Own a slave",
       imageUrl: "Assets/Sheildhero.jpg"
    }
    { 
        question: "What does the term Isekai mean",
        options: ["In a different world", "Die embarassingly", "Teleport", "Life"],
        answer: "In a different world",
        imageUrl: "Assets/Inanotherworld.jpe" 
    },
    {
        question: "Which is of these is considered an Isakai?",
        options: ["Reincarnated as a Slime", "Death Note", "My Hero Academia", "HunterxHunter"],
        answer: "Reincarnated as a Slime",
        imageUrl: "Assets/183aa89af7da4843887aa1b9dc67b252.jpe"
    },
    {
        question: "In this Anime it is ok to?",
        options:["Own a slave","Use a sheild","be free","plant magical seeds"],
        answer: "Own a slave",
       imageUrl: "Assets/Sheildhero.jpg"
    }
    {
        question: "In this Anime it is ok to?",
        options:["Own a slave","Use a sheild","be free","plant magical seeds"],
        answer: "Own a slave",
       imageUrl: "Assets/Sheildhero.jpg"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let timerSeconds = 10; // Timer duration in seconds
let timerInterval;
// These are the constructs that i want to call up to show on each page of my quiz.
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const finalScoreText = document.getElementById('final-score');
const timerDisplay = document.getElementById('timer-display');
const scoreDisplay = document.getElementById('score');

//Pulls from the Css file to style the containers. Head to css if anything like borders and fonts need or want to be changed.

const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('quiz-container');

//This is a function for showing the question in it is what i decided to display.
//you can also add here if another const is added to display it using innerHTML

function showQuestion() {
    resetTimer();
    updateTimerDisplay(timerSeconds);
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    imageContainer.innerHTML = `<img src="${currentQuestion.imageUrl}" alt="Question Image" />`;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(option));

        optionsContainer.appendChild(optionElement);
    });

    startTimer();
}
// This Conteol the start of my timer and picks how long that timer is. The 10 above just shows how you want to display the timer.
function startTimer() {
    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay(timerSeconds);
        } else {
            clearInterval(timerInterval);
            currentQuestionIndex++;
            showQuestion();
        }
    }, 1000);
}
//simple enough like the rest this will set funtion for reseting timer also 
function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 10; // Reset timer duration
}

function updateTimerDisplay(seconds) {
    timerDisplay.textContent = seconds;
}


//Function to check your answer and update the score for the board.
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        scoreDisplay.textContent = score;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = '';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    finalScoreText.textContent = score;
}

showQuestion();