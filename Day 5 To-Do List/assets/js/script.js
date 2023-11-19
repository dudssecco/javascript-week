const inputText = document.querySelector('.input-task')
const addButton = document.querySelector('.add-task')
const boxTasks = document.querySelector('.box-tasks')


function criaTask(texto){
    const divTask = criaDivTask()
    boxTasks.appendChild(divTask)

    const li = criaLi()
    li.innerText = texto
    divTask.appendChild(li)

    const divControl = criaDivControl()
    divTask.appendChild(divControl)

    const btnApagar = criaBtnApagar()
    btnApagar.innerHTML = '<i class="bi bi-x"></i>'
    divControl.appendChild(btnApagar)

    limpaInput()
    saveTask()
}


    /* Funcionalidades */

function criaDivTask(){
    const divTask = document.createElement('div')
    divTask.setAttribute('class', 'task')
    return divTask
}

function criaDivControl(){
    const divControl = document.createElement('div')
    divControl.setAttribute('class', 'control')
    return divControl
}

function criaLi(){
    const li = document.createElement('li')
    li.setAttribute('class', 'item-list')
    return li
}

function criaBtnApagar(){
    const apagar = document.createElement('button')
    apagar.setAttribute('class', 'apagar')
    apagar.setAttribute('title', 'Delete this task')
    return apagar
}

function limpaInput(){
    inputText.value = ''
    inputText.focus()
}



    /* Save Task */

function saveTask(){
    const liTasks = boxTasks.querySelectorAll('li')
    const liList = []

    for(let task of liTasks){
        let taskText = task.innerText
        liList.push(taskText)
    }

    const taskJSON = JSON.stringify(liList)
    localStorage.setItem('tasksaved', taskJSON)
}

function addTask(){
    const tasks = localStorage.getItem('tasksaved')
    const liList = JSON.parse(tasks)
    console.log(liList)

    for(let t of liList)
    criaTask(t)
}

    

    /* Eventos */

addButton.addEventListener('click', function(){
    if(inputText.value === ''){
        return;
    }
    criaTask(inputText.value)
})


inputText.addEventListener('keypress', function(event){
    if(event.keyCode === 13 && inputText.value !== ''){
        criaTask(inputText.value)
    }
})
document.addEventListener('click', function(e){
    const Task = document.querySelector('.task')
    const el = e.target
    if(el.classList.contains('bi-x') || el.classList.contains('apagar')){
        Task.remove()
        saveTask()
    }
})

addTask()