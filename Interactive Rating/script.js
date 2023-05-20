let buttons = document.getElementsByClassName('btn')

let submit = document.getElementById('submit')
submit.addEventListener('click', function (ev) {
    ev.preventDefault()

    submit.style.backgroundColor = 'white'
})