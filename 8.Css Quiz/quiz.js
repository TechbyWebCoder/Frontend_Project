const quizData = [
    {
        question: "Which property is used to change the background color in CSS?",
        a: "background-color",
        b: "color",
        c: "background",
        d: "bgcolor",
        correct: "a",
    },
    {
        question: "How do you apply a CSS style to an HTML element with the ID 'header'?",
        a: "#header { }",
        b: ".header { }",
        c: "header { }",
        d: "id=header { }",
        correct: "a",
    },
    {
        question: "What does the 'display: flex' property do in CSS?",
        a: "It makes the element hidden",
        b: "It applies a border to the element",
        c: "It creates a flexible layout",
        d: "It changes the font size",
        correct: "c",
    },
    {
        question: "Which CSS property is used to change the font size?",
        a: "text-size",
        b: "font-size",
        c: "font-style",
        d: "text-style",
        correct: "b",
    },
    {
        question: "How do you make a list horizontal instead of vertical in CSS?",
        a: "list-style-type: horizontal;",
        b: "display: inline;",
        c: "list-style-type: none;",
        d: "display: flex;",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
