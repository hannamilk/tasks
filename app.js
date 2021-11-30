
// user input form
const form = document.querySelector("form");
form.addEventListener("submit", addTask);

// tasklist
const tasklist = document.querySelector("ul")
tasklist.addEventListener("click", delTask)

// delete-button-Link
const deleteBtn = document.querySelector("#delete-tasks")
deleteBtn.addEventListener("click", delTasks)

function delTasks(){
    //tasklist.innerHTML = ""
    while(tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild)
    }
}

//deltask
function delTask(event){
    if(event.target.textContent === "X"){
        if(confirm("Do you want to delete this task?")){
            event.target.parentElement.remove()
        }
    }
}


// add task function
function addTask(event){
    // get task value from form input
    const task = document.querySelector("#task").value
    // get element from DOM
    const tasklist = document.querySelector("ul")
    // create element to DOM
    const li = document.createElement("li")
    // add CSS class
    li.className = "collection-item"
    // add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)

    // create link
    const link = document.createElement("a")
    //add css style
    link.className = "secondary-content"
    // add text to link
    link.appendChild(document.createTextNode("X"))
    // add href attribute
    link.setAttribute("href", "#")
    // add link to li
    li.appendChild(link)


    // add li to tasklist
    tasklist.appendChild(li)

    //clear form input value
    document.querySelector("#task").value = " "
    event.preventDefault()
}

//console´i: document.querySelector("ul") leiab ul´i dokumendist
