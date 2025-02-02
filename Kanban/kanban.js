const tasks = document.querySelectorAll(".task");
const lanes = document.querySelectorAll(".lane");
const allLanes = document.querySelectorAll(".allLanes");
let curTask = null;

const form = document.getElementById("addItem");
const inputField = document.getElementById("itemInput");
const toDoLane = document.getElementById("toDoLane");

//Predefined tasks
tasks.forEach(task =>{
    task.addEventListener("dragstart", () =>{
        task.classList.add("is-dragging");
        curTask = task;
    });
    task.addEventListener("dragend", () =>{
        task.classList.remove("is-dragging");
        curTask = null;
    });

    task.addEventListener("dblclick", ()=>{
        task.remove();
    })
});

lanes.forEach((zone) => {
    zone.addEventListener("dragover", (e) =>{
        e.preventDefault();

        zone.appendChild(curTask);
    });
});

//New Tasks
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = inputField.value;

    if (!value)
    {
        return;
    }

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", true);
    newTask.innerText = value;

    // This does not automatically get added with the other JS file? Experiment with this.
    newTask.addEventListener("dragstart", () =>{
        newTask.classList.add("is-dragging");
        curTask = newTask;
    });
    newTask.addEventListener("dragend", () =>{
        newTask.classList.remove("is-dragging");
        curTask = null;
    });

    newTask.addEventListener("dblclick", ()=>{
        newTask.remove();
    })

    toDoLane.appendChild(newTask);
    inputField.value = "";
})