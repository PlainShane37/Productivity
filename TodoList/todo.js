let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDosContainers");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click', function(){
    addToDo();
})
document.addEventListener('keydown', event=> {
    if(event.key.startsWith("Enter"))
    {
        addToDo();
    }
})

function addToDo()
{
    if(inputField.value!="")
    {
        var task = document.createElement('p');
        task.innerText = inputField.value;
    
        toDoContainer.appendChild(task);
    
        inputField.value = "";
    
    }

    task.addEventListener('dblclick', function()
    {
        removeItem(task);
    })
}

function strikeThrough(task)
{
    task.style.textDecoration = "line-through";
}

function removeItem(task)
{
    toDoContainer.removeChild(task);
}