const form = document.getElementById('form-numeros');
let formValido = false;

function analisarMaiorNumero(primeiro, segundo) {
    return segundo > primeiro;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('campo-a').value;
    const numeroB = document.getElementById('campo-b').value;
    const mensagemSucesso = "Correto: Número B maior que Número A";
    const mensagemErro = "[ERRO] Número A maior que Número B"

    formValido = analisarMaiorNumero(numeroA, numeroB);
    if(formValido) {
        const containerMensagemSucesso = document.getElementById('msg-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        const containerMensagemErro = document.getElementById('msg-erro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block'
    }

})

