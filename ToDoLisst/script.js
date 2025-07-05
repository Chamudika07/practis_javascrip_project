const new_todo_input = document.getElementById("new_todo_input");
const add_todo_button = document.getElementById("add_todo_button")
const listtask_list = document.getElementById("task_list");

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

// Function to render tasks in the task 

function renderTasks() {
    task_list.innerHTML = ""; // Clear the current list

    tasks.forEach ((tasks , index) => {
        const taskItem = document.createElement("li");
        taskItem.textContent = tasks.text; // Set the text of the task item

        if (tasks.completed){
            taskItem.classList.add("completed"); // Add a class for completed tasks
        }

        // Create a complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = '✔️';
        completeButton.classList.add("complete_btn");
        completeButton.addEventListener("click" , () => toggleComplete(index));

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = '❌';
        deleteButton.classList.add("delete_btn");
        deleteButton.addEventListener("click" , () => deleteTask(index));

        // Append buttons to the task item
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        task_list.appendChild(taskItem); // Append the task item to the task list
    });
}

// Function to toggle task completion
function toggleComplete(index){
    tasks[index].completed = !tasks[index].completed; // Toggle the completed status
    console.log("Task " + index + " completion status: " + tasks[index].completed); // Debugging
    renderTasks(); // Re-render the task list
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index , 1)  ; // Remove the task from the array
    console.log("Task " + index + " deleted."); // Debugging
    renderTasks(); // Re-render the task list
}

renderTasks(); // // Initial render (in case you want to load from local storage later)
