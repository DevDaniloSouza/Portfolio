function Calc() {
    let ipeso = document.getElementById('ipeso').value
    let ialtura = document.getElementById('ialtura').value

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

    let resultado = peso / (altura * altura)
    imc.textContent = Math.round(resultado)

    if (resultado < 18.5) {
        info.textContent = 'Abaixo do peso!'
    } else if (resultado >= 18.5 && resultado < 25) {
        info.textContent = 'Peso ideal!'
    } else if (resultado >= 25 && resultado < 30) {
        info.textContent = 'Acima do peso!'
    } else if (resultado >= 30) {
        info.textContent = 'Obesidade!'
    }
}