let number_of_questions = 3
let time_limit = 1
let correct = 0
let currentIndex = 0
let allQuestions = []
let selectedQuestions = []
let timerInterval

const number_dropdown = document.getElementById("number")
const timer_dropdown = document.getElementById("timer")
const submit_btn = document.getElementById("submit_btn")
const card = document.getElementById("card")
const questions_card = document.getElementById("questions_card")
const question_number = document.getElementById("question_number")
const questionElement = document.getElementById("question")
const timer_display = document.getElementById("timer_display")
const options = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4"),
]
const total = document.getElementById("total")
const correct_element = document.getElementById("correct")
const proceed_btn = document.getElementById("proceed_btn")
const result_card = document.getElementById("result_card")
const reset_btn = document.getElementById("reset_btn")

number_dropdown.addEventListener("change", (event) => 
{
    number_of_questions = parseInt(event.target.value)
})

timer_dropdown.addEventListener("change", (event) => 
{
    time_limit = parseInt(event.target.value)
})

submit_btn.addEventListener("click", () => 
{
    startQuiz()
})

function startQuiz() 
{
    fetch("questions.json")
        .then((response) => response.json())
        .then((data) => 
        {
            allQuestions = data
            selectedQuestions = selectRandomQuestions(allQuestions, number_of_questions)
            currentIndex = 0
            correct = 0
            card.style.display = "none"
            questions_card.style.display = "flex"
            displayQuestion()
            startTimer()
        })
        .catch((error) => console.error("Error loading questions:", error))
}

function selectRandomQuestions(questions, count) 
{
    const shuffled = questions.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

function displayQuestion() 
{
    if (currentIndex >= selectedQuestions.length) 
    {
        endQuiz()
        return
    }

    const currentQuestion = selectedQuestions[currentIndex]
    question_number.textContent = `Question ${currentIndex + 1}`
    questionElement.textContent = currentQuestion.question

    options.forEach((option, index) => 
    {
        const key = `option${index + 1}`
        option.textContent = currentQuestion[key]
        option.style.border = "2.5px solid gray"

        option.onclick = () =>
        {
            options.forEach((opt) => (opt.onclick = null))

            if (option.textContent === currentQuestion.answer) 
            {
                correct++;
                option.style.border = "2.5px solid green"
            } 
            else 
            {
                option.style.border = "2.5px solid red"
                options.forEach((opt) => 
                {
                    if (opt.textContent === currentQuestion.answer) 
                    {
                        opt.style.border = "2.5px solid green"
                    }
                });
            }

            setTimeout(() => 
            {
                currentIndex++
                displayQuestion()
            }, 1000);
        }
    })
}

function startTimer() 
{
    let time = time_limit * 60;
    timer_display.textContent = formatTime(time)

    timerInterval = setInterval(() => 
    {
        time--
        timer_display.textContent = formatTime(time)

        if (time <= 0) 
        {
            clearInterval(timerInterval)
            endQuiz()
        }
    }, 1000)
}

function formatTime(seconds) 
{
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
}

function endQuiz() 
{
    clearInterval(timerInterval)
    result_card.style.display = "flex"
    questions_card.style.display = "none"
    total.textContent = "Total Questions: " + number_of_questions
    correct_element.textContent = "Correct Answers: " + correct 
}

reset_btn.addEventListener("click", ()=>
{
    result_card.style.display = "none"
    card.style.display = "flex"
})