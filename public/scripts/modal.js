export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper').classList
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close)

    function open(){
        //atribuir a classe active a modal
        modalWrapper.add("active")
    }
    function close(){
        //remover a classe active da modal
        modalWrapper.remove("active")
    }
     
    return{
        open,
        close
    }
}