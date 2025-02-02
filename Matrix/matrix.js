const tasks = document.querySelectorAll(".task");
const sections = document.querySelectorAll(".section");
let curTask = null;

const form = document.getElementById("addItem");
const inputField = document.getElementById("itemInput");
const toDoSection = document.getElementById("do");

tasks.forEach(task =>{
    task.addEventListener("dragstart", ()=>{
        task.classList.add("is-dragging");
        curTask = task;
    });
    task.addEventListener("dragend", ()=>{
        task.classList.remove("is-dragging");
        curTask = null;
    });
    task.addEventListener("dblclick", ()=>{
        task.remove();
    });
});

sections.forEach(section =>{
    section.addEventListener("dragover", (e)=>{
        e.preventDefault();

        section.appendChild(curTask);
    });
});

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const value = inputField.value;

    if(!value)
    {
        return;
    }

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", true);
    newTask.innerText = value;

    newTask.addEventListener("dragstart", ()=>{
        newTask.classList.add("is-dragging");
        curTask = newTask;
    });
    newTask.addEventListener("dragend", ()=>{
        newTask.classList.remove("is-dragging");
        curTask = null;
    });
    newTask.addEventListener("dblclick", ()=>{
        newTask.remove();
    });

    toDoSection.appendChild(newTask);
    inputField.value = "";
})