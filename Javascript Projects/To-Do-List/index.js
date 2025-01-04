document.addEventListener("DOMContentLoaded", () => {
    const tasksContainer = document.querySelector(".tasks");
    const addBtn = document.getElementById("add_btn");
    const inputBox = document.querySelector("#input_box");
  
    const loadTasks = () => 
    {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(({ name, progress }) => {
            createTaskElement(name, progress);
        });
    };
  
    const saveTasks = () => 
    {
        const tasks = [];
        tasksContainer.querySelectorAll(".task").forEach((task) => 
        {
            const name = task.querySelector("span").textContent;
            const progress = task.querySelector("#progress").value;
            tasks.push({ name, progress });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    const createTaskElement = (taskName, progressValue = 0) => {
        const task = document.createElement("div");
        task.classList.add("task");
    
        task.innerHTML = `
            <div class="show_content">
                <span>${taskName}</span>
                <div class="buttons">
                    <svg id="edit_btn" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                    </svg>
                    <svg id="del_btn" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                    </svg>
                </div>
            </div>
            <input type="range" name="progress" id="progress" min="0" max="100" value="${progressValue}">
        `;
    
        const progress = task.querySelector("#progress");
        const span = task.querySelector("span");
    
        task.addEventListener("click", (e) => 
        {
            if (!e.target.closest(".buttons") && !e.target.closest("input")) {
                progress.classList.toggle("visible");
            }
        });
    
        progress.addEventListener("input", () => {
            if (progress.value === "100") {
                span.style.textDecoration = "line-through";
                span.style.color = "#ff3538";
            } else {
                span.style.textDecoration = "none";
                span.style.color = "inherit";
            }
            saveTasks();
        });
    
        task.querySelector("#edit_btn").addEventListener("click", (e) => {
            e.stopPropagation();
            const newName = prompt("Edit Task Name:", span.textContent);
            if (newName) {
                span.textContent = newName;
                saveTasks();
            }
        });
    
        task.querySelector("#del_btn").addEventListener("click", (e) => {
            e.stopPropagation();
            task.remove();
            saveTasks();
        });
    
        tasksContainer.appendChild(task);
        saveTasks();
    };

    addBtn.addEventListener("click" , ()=> 
    {
        const taskName = inputBox.value.trim();
        if (taskName) {
            createTaskElement(taskName);
            inputBox.value = "";
        }
    })
  
    loadTasks();
});
