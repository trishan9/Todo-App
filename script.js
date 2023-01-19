const addSection = document.querySelector('.addTasks')
let taskInputButton = document.querySelector('.task-input-button')
let addTaskBtn, userInput, checkBox, deleteBtn
const taskDiv = document.querySelector('.addedTasks')


// updates Local Storage
const updateLS = () => {
<<<<<<< HEAD
    localStorage.setItem('tasks', JSON.stringify(tasksArr))
}
let tasksArr = JSON.parse(localStorage.getItem('tasks'))
=======
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
}
let tasksArr = JSON.parse(localStorage.getItem('tasks'));
>>>>>>> 4cfdd43a1904e93d2d126ff79cb49d10e666beab

// creates an input field and a button for the user to add a task.
const fetchAddTask = () => {
    let ihtml = `
    <div class = "addTask">
    <input type = "text" class = "taskArea" placeholder = "Add your task here">
    <button class = "add-button">Add</button
    </div>
    `
    addSection.innerHTML = ihtml
    addTaskBtn = document.querySelector('.add-button')
    addTaskBtn.addEventListener('click', fetchTask)
}

// fetch Tasks in the Tasks Section
const fetchTask = () => {
    userInput = document.querySelector('.taskArea')
    tasksArr.push(userInput.value)
    updateLS()
    addTaskToList()
}

// adds task to the task list
const addTaskToList = () => {
    taskDiv.innerHTML += `
    <div class = "todo">
    <p class = "task"> ${userInput.value} </p>
    <img src = "images/check.png" class = "check func">
    <img src = "images/delete.png" class = "delete func">
    </div>
    `
    addSection.innerHTML = `<button class="task-input-button">Add Task</button>`
    taskInputButton = document.querySelector('.task-input-button')
    taskInputButton.addEventListener('click', fetchAddTask)
    checkAndDelete()
}

// delete and check functions
const checkAndDelete = () => {
    checkBox = document.querySelectorAll('.check')
    checkBox.forEach((check) => {
        check.addEventListener('click', () => {
            let element = check.previousElementSibling
            element.classList.toggle('line-through')
        })
    })

    deleteBtn = document.querySelectorAll('.delete')
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            let elementParent = btn.parentElement
            let elementText = elementParent.firstElementChild.textContent.trim()
            elementParent.remove()
            let index = tasksArr.indexOf(elementText)
            tasksArr.splice(index, 1)
            updateLS()
        })
    })
}

// fetching the tasks even after refreshing
const refresh = () => {
    tasksArr.forEach((task) => {
        taskDiv.innerHTML += `
            <div class = "todo">
            <p class = "task"> ${task} </p>
            <img src = "images/check.png" class = "check func">
            <img src = "images/delete.png" class = "delete func">
            </div>
            `
        addSection.innerHTML = `<button class="task-input-button">Add Task</button>`
        taskInputButton = document.querySelector('.task-input-button')
        taskInputButton.addEventListener('click', fetchAddTask)

        checkAndDelete()
    })
}
<<<<<<< HEAD

tasksArr ? refresh() : tasksArr = []
=======
refresh()
>>>>>>> 4cfdd43a1904e93d2d126ff79cb49d10e666beab

taskInputButton.addEventListener('click', fetchAddTask)