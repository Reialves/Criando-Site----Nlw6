import Modal  from './modal.js'

const modal = Modal()

//pegar todos os botoes existentes com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    //adicionar o ouvidor de eventos
    button.addEventListener("click", event =>{
        //abrir modal
        modal.open()
    })
})


// abrir modal qnd clicar no botão excluir

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button =>{
    //adicionar o ouvidor de eventos
    button.addEventListener("click", event =>{
        //abrir modal
        modal.open()
    })
})
