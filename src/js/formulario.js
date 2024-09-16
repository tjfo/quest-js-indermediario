const campoInput = document.querySelectorAll(".campo");
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio")
const botaoEnviar = document.querySelector("#enviar")

campoInput.forEach((campo, index) => {
    campo.addEventListener('change', () => {
        if(campo.value.trim() === ''){
            campo.classList.add("ativo");
            campoObrigatorio[index].classList.add("ativo");
            campo.classList.remove("campo-preenchido");
        }else{
            campo.classList.add("campo-preenchido");
            campoObrigatorio[index].classList.remove("ativo");
        }
    })
})

botaoEnviar.addEventListener('click', (e) => {
    
    e.preventDefault()

    campoInput.forEach((campo, index)=>{
        if(campo.value.trim() === ''){
            campo.classList.add("ativo");
            campoObrigatorio[index].classList.add("ativo");
        }
    })
})