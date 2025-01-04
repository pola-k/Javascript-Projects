const filter_buttons = Array.from(document.getElementsByClassName("filter_btn"))
const food_headings = Array.from(document.getElementsByClassName("food_headings"))
const food_items = Array.from(document.getElementsByClassName("food_items"))
const foods = Array.from(document.getElementsByClassName("food"))
const search_box = document.getElementById("input_box")
const search_button = document.getElementById("search_btn")

let activeFilter = "All"

function ClearHeadings() 
{
    food_headings.forEach(function(heading) 
    {
        heading.style.display = "none"
    })
}

function ShowHeadings() 
{
    food_headings.forEach(function(heading) 
    {
        heading.style.display = "inline"
    })
}

filter_buttons.forEach(function(button) 
{
    button.addEventListener("click", function() 
    {
        filter_buttons.forEach(function(btn) 
        {  
            btn.classList.remove("selected")
        })
        
        activeFilter = button.textContent
        button.classList.add("selected")

        if (activeFilter === "All") 
        {
            const search_value = search_box.value
            if (search_value === "") 
            {
                ShowHeadings();
            }

            food_items.forEach(function(item) 
            {
                item.style.display = "grid"
            })
        }
        else 
        {
            ClearHeadings();

            food_items.forEach(function(item) 
            {
                if (button.textContent.toLowerCase() === item.getAttribute('id').toLowerCase()) 
                {
                    item.style.display = "grid";
                    item.style.marginTop = "2rem"
                } 
                else 
                {
                    item.style.display = "none"
                    item.style.marginTop = "0"
                }
            })
        }
    })
})

search_box.addEventListener("input", function() 
{
    const query = search_box.value.toLowerCase()

    let message = document.getElementById("message")
    if (!message) 
    {
        message = document.createElement("p")
        message.textContent = "No Results Found"
        message.id = "message"
        message.classList.add("message")
        message.style.display = "none"
        document.querySelector(".main").appendChild(message)
    }

    if (query === "") 
    {
        if (activeFilter === "All") 
        {
            ShowHeadings()
            food_items.forEach(function(item) 
            {
                item.style.display = "grid"
            })
        } 
        else 
        {
            ClearHeadings()
            food_items.forEach(function(item) 
            {
                if (item.getAttribute("id").toLowerCase() === activeFilter.toLowerCase()) 
                {
                    item.style.display = "grid"
                } 
                else 
                {
                    item.style.display = "none"
                }
            })
        }
        foods.forEach(function(food) 
        {
            food.style.display = "flex"
        })

        message.style.display = "none"
    } 
    else 
    {
        ClearHeadings()
        let found = false

        foods.forEach(function(item) 
        {
            const foodName = item.querySelector(".text_content h4").textContent.toLowerCase()
            const foodDescription = item.querySelector(".text_content p").textContent.toLowerCase()

            if (foodName.includes(query) || foodDescription.includes(query)) 
            {
                item.style.display = "flex"
                found = true
            } 
            else 
            {
                item.style.display = "none"
            }
        })

        if (!found) 
        {
            message.style.display = "block"
        }
        else 
        {
            message.style.display = "none";
        }
    }
});
