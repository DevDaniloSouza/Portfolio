let allTasks = []

let list = document.getElementById('list-container')

function addTask() {

    let input = document.getElementById('input')
    input.style.border = ''

    if (!input.value) {
        input.style.border = 'solid 3px red'
        alert('Por favor, defina uma tarefa para adicionar!')
    } else {
        const ul = document.getElementById('list-container')
        const li = document.createElement('li')
        const button = document.createElement('button')

        button.classList.add('remove')
        button.id = 'rem'
        button.textContent = "Remover"
        li.textContent = input.value
        li.appendChild(button)
        ul.appendChild(li)
    }

    input.value = ''
    saveData()
}

list.addEventListener('click', function(ev) {
    if (ev.target.classList[0] === 'checked') {
        ev.target.classList.remove('checked')
    } else if (!ev.target.classList[0]) {
        ev.target.classList.add('checked')
    } else if (ev.target.id === 'rem') {
        ev.target.parentElement.remove()
    }
    
}, false)

function saveData() {
    localStorage.setItem('data', list.innerHTML)
}