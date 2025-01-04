const counter = document.getElementById("counter")
const reset_btn = document.getElementById("reset")
const increase_btn = document.getElementById("increase")
const decrease_btn = document.getElementById("decrease")

reset_btn.addEventListener("click", function()
{
    counter.textContent = 0    
})

increase_btn.addEventListener("click" , function()
{
    let current_val = parseInt(counter.textContent)
    current_val += 1
    counter.textContent = current_val
})

decrease_btn.addEventListener("click" , function()
{
    let current_val = parseInt(counter.textContent)
    current_val -= 1
    counter.textContent = current_val
})