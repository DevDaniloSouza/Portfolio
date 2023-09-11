let aside = document.getElementById('aside')
let linha1 = document.getElementById('linha1')
let linha2 = document.getElementById('linha2')

function Calc() {
    let ipeso = document.getElementById('ipeso')
    let ialtura = document.getElementById('ialtura')

    let aside = document.getElementById('aside')
    let linha1 = document.getElementById('linha1')
    let linha2 = document.getElementById('linha2')    

    linha1.style.display = 'block'
    aside.style.display = 'flex'
    linha2.style.display = 'block'

    let peso = parseFloat(ipeso)
    let altura = parseFloat(ialtura)

    let imc = document.getElementById('imc')
    let info = document.getElementById('info')

    let resultado = peso / altura * altura

    imc.textContent = parseFloat(resultado)

    ipeso.value = ''
    ialtura.value = ''
}