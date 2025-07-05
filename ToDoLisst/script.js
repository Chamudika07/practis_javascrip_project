const new_todo_input = document.getElementById("new_todo_input");
const add_todo_button = document.getElementById("add_todo_button")
const task_list = document.getElementById("task_list");

// Array to store tasks (objects for more properties like 'completed')
let tasks = []; // { text: "Learn JS", completed: false }

// Function to add a new task
add_todo_button.addEventListener("click" , () => {
    const taskText = new_todo_input.value.trim();

    if (taskText !== ""){
        // create a new task
        tasks.push({ text : taskText , completed: false });
        new_todo_input.value = ""; // Clear the input field
        
        console.log("Current tasks: " + taskText );//for debugging
         // Update the task list display
         renderTasks();
    }
});
