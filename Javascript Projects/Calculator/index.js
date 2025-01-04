const del_btn = document.getElementById("del_btn")
const percentage_btn = document.getElementById("percentage_btn")
const exp_btn = document.getElementById("exp_btn")
const divide_btn = document.getElementById("divide_btn")
const seven_btn = document.getElementById("seven_btn")
const eight_btn = document.getElementById("eight_btn")
const nine_btn = document.getElementById("nine_btn")
const multiply_btn = document.getElementById("multiply_btn")
const four_btn = document.getElementById("four_btn")
const five_btn = document.getElementById("five_btn")
const six_btn = document.getElementById("six_btn")
const subtract_btn = document.getElementById("subtract_btn")
const one_btn = document.getElementById("one_btn")
const two_btn = document.getElementById("two_btn")
const three_btn = document.getElementById("three_btn")
const add_btn = document.getElementById("add_btn")
const zero_btn = document.getElementById("zero_btn")
const equal_btn = document.getElementById("equal_btn")
const decimal_btn = document.getElementById("decimal_btn")
const result = document.getElementById("result")

let currentInput = "0"
let previousInput = ""
let operator = ""
let isResultDisplayed = false

function updateDisplay(value) 
{
    if (!isNaN(value) && value.toString().length > 10) 
    {
        value = parseFloat(value).toPrecision(9)
    }
    result.textContent = value
}

del_btn.addEventListener("click", () => 
{
    currentInput = "0"
    previousInput = ""
    operator = ""
    isResultDisplayed = false
    updateDisplay(currentInput)
});

const numberButtons = [zero_btn, one_btn, two_btn, three_btn, four_btn, five_btn, six_btn, seven_btn, eight_btn, nine_btn]

numberButtons.forEach((btn, index) => 
{
    btn.addEventListener("click", () => 
    {
        if (isResultDisplayed) 
        {
            currentInput = ""
            isResultDisplayed = false
        }
        if (currentInput === "0" && index === 0)
        {
            return
        }
        currentInput = currentInput === "0" ? `${index}` : currentInput + `${index}`;
        updateDisplay(currentInput)
    })
})

decimal_btn.addEventListener("click", () => 
{
    if (!currentInput.includes(".")) 
    {
        currentInput += ".";
        updateDisplay(currentInput)
    }
})
 
const operatorButtons = 
[
    { button: add_btn, symbol: "+" },
    { button: subtract_btn, symbol: "-" },
    { button: multiply_btn, symbol: "\u00d7" },
    { button: divide_btn, symbol: "\u00f7" },
    { button: exp_btn, symbol: "^" },
]

operatorButtons.forEach(({ button, symbol }) => 
{
    button.addEventListener("click", () => 
    {
        if (operator && previousInput && currentInput) 
        {
            calculate()
        }
        operator = symbol
        previousInput = currentInput
        currentInput = "0"
        updateDisplay(operator)
    })
})

percentage_btn.addEventListener("click", () => 
{
    currentInput = (parseFloat(currentInput) / 100).toString()
    updateDisplay(currentInput)
})

function calculate() 
{
    let resultValue
    const num1 = parseFloat(previousInput)
    const num2 = parseFloat(currentInput)

    switch (operator) 
    {
        case "+":
            resultValue = num1 + num2
            break
        case "-":
            resultValue = num1 - num2
            break
        case "\u00d7":
            resultValue = num1 * num2
            break
        case "\u00f7":
            resultValue = num2 !== 0 ? num1 / num2 : "Error"
            break
        case "^":
            resultValue = Math.pow(num1, num2);
            break
        default:
            resultValue = "Error"
    }

    currentInput = resultValue.toString()
    operator = ""
    previousInput = ""
    isResultDisplayed = true
    updateDisplay(currentInput)
}

equal_btn.addEventListener("click", () => 
{
    if (operator && previousInput && currentInput) 
    {
        calculate()
    }
})