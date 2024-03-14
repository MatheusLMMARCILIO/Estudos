const valor = document.querySelector('.divisor')
const dividir = document.querySelector('.btnDivisor')
const Nomeaparecer = document.querySelector('.loveU')

dividir.addEventListener('click', () => {
    const valorValue = valor.value
    Nomeaparecer.innerHTML = valorValue
})