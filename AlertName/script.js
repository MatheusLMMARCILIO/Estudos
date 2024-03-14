const nome = document.querySelector('.nome')
const btnSubmit = document.querySelector('.btnSubmit')

btnSubmit.addEventListener('click', () => {
    const namevalue = nome.value
    alert(namevalue)
})