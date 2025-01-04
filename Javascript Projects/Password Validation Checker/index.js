const input_area = document.getElementById("password")
const character_condition = document.getElementById("character")
const number_condition = document.getElementById("number")
const uppercase_condition = document.getElementById("uppercase")
const lowercase_condition = document.getElementById("lowercase")
const symbol_condition = document.getElementById("symbol")
const visible_btn = document.getElementById("visible_btn")
const submit_btn = document.getElementById("submit_btn")

let password_visible = false
let has_lowercase = false
let has_uppercase = false
let has_number = false
let has_symbol = false

visible_btn.addEventListener("click" , function()
{
    if(!password_visible)
    {
        password_visible = true
        input_area.type = "text"
    }
    else
    {
        password_visible = false
        input_area.type = "password"
    }
})

input_area.addEventListener("input", function()
{
    let password = input_area.value

    if(password.length >= 8)
    {
        character_condition.style.color = "gray"
        character_condition.style.fontWeight = "100"
    }
    else
    {
        character_condition.style.color = "black"
        character_condition.style.fontWeight = "600"
    }

    has_uppercase = /[A-Z]/.test(password)

    if(has_uppercase)
    {
        uppercase_condition.style.color = "gray"
        uppercase_condition.style.fontWeight = "100"
    }
    else
    {
        uppercase_condition.style.color = "black"
        uppercase_condition.style.fontWeight = "600"
    }

    has_lowercase = /[a-z]/.test(password)

    if(has_lowercase)
    {
        lowercase_condition.style.color = "gray"
        lowercase_condition.style.fontWeight = "100"
    }
    else
    {
        lowercase_condition.style.color = "black"
        lowercase_condition.style.fontWeight = "600"
    }

    has_number = /[0-9]/.test(password)
    if(has_number)
    {
        number_condition.style.color = "gray"
        number_condition.style.fontWeight = "100"
    }
    else
    {
        number_condition.style.color = "black"
        number_condition.style.fontWeight = "600"
    }

    has_symbol = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
    if(has_symbol)
    {
        symbol_condition.style.color = "gray"
        symbol_condition.style.fontWeight = "100"
    }
    else
    {
        symbol_condition.style.color = "black"
        symbol_condition.style.fontWeight = "600"
    }

    if(password.length>=8 && has_lowercase && has_number && has_symbol && has_uppercase)
    {
        submit_btn.style.display = "block"
    }
    else
    {
        submit_btn.style.display = "none"
    }
})

submit_btn.addEventListener("click", function()
{
    alert("Password Validated")
    input_area.value = ""
    submit_btn.style.display = "none"
    symbol_condition.style.color = "black"
    symbol_condition.style.fontWeight = "600"
    character_condition.style.color = "black"
    character_condition.style.fontWeight = "600"
    uppercase_condition.style.color = "black"
    uppercase_condition.style.fontWeight = "600" 
    lowercase_condition.style.color = "black"
    lowercase_condition.style.fontWeight = "600"
    number_condition.style.color = "black"
    number_condition.style.fontWeight = "600"
})