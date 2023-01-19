const addSection = document.querySelector('.addTasks')
let taskInputButton = document.querySelector('.task-input-button')
let addTaskBtn, userInput, checkBox, deleteBtn
const taskDiv = document.querySelector('.addedTasks')


const updateLS = () => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
}
let tasksArr = JSON.parse(localStorage.getItem('tasks'));

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

const refresh = () => {
    tasksArr.forEach((task) => {
        taskDiv.innerHTML += `
            <div class = "todo">
            <p class = "task"> ${task} </p>
            <img src = "check.png" class = "check func">
            <img src = "delete.png" class = "delete func">
            </div>
            `
        addSection.innerHTML = `<button class="task-input-button">Add Task</button>`
        taskInputButton = document.querySelector('.task-input-button')
        taskInputButton.addEventListener('click', fetchAddTask)

        checkBox = document.querySelectorAll('.check')
        checkBox.forEach((check) => {
            check.addEventListener('click', () => {
                let element = check.previousElementSibling
                element.classList.toggle('stroke')
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
    })
}
refresh()


const fetchTask = () => {
    userInput = document.querySelector('.taskArea')
    tasksArr.push(userInput.value)
    updateLS()
    taskDiv.innerHTML += `
            <div class = "todo">
            <p class = "task"> ${userInput.value} </p>
            <img src = "check.png" class = "check func">
            <img src = "delete.png" class = "delete func">
            </div>
            `
    addSection.innerHTML = `<button class="task-input-button">Add Task</button>`
    taskInputButton = document.querySelector('.task-input-button')
    taskInputButton.addEventListener('click', fetchAddTask)

    checkBox = document.querySelectorAll('.check')
    checkBox.forEach((check) => {
        check.addEventListener('click', () => {
            let element = check.previousElementSibling
            element.classList.toggle('stroke')
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


taskInputButton.addEventListener('click', fetchAddTask)