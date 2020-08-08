// Procurar o botão
document.querySelector("#add-time")
// Quando clinar no botão
.addEventListener('click', cloneField)


// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    // colar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}