export default function Modal(){

    const cancelButton = document.querySelector('.button .cancel')
    cancelButton.addEventListener("click", close)

    function open(){
        //atribuir a classe active a modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        //remover a classe active da modal
        document.querySelector('.modal-wrapper').classList.remove("active")
    }
     
    return{
        open,
        close
    }
}