const questions = [
    {
        question: " who is pm of india",
        answers: [
            { text: "nitish", correct: false },
            { text: "modi", correct: true },
            { text: "lalu", correct: false },
            { text: "amit shah", correct: false },

        ]

    },
    {
        question: " largest animal in world",
        answers: [
            { text: "shark", correct: false },
            { text: "whale", correct: true },
            { text: "elephant", correct: false },
            { text: "giraffe", correct: false },

        ]

    },
]

const qustionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;

function startquiz() {
    currentquestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate();
    let currentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    qustionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetstate() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
 function showScore(){
    resetstate();
    qustionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start again";
    nextButton.style.display = "block";
 }

 
function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentquestionIndex < questions.length) {
        handleNextButton();
    } else {

        startquiz();
    }
})

  startquiz();