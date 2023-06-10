const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('campo-a');
const numeroB = document.getElementById('campo-b');
let formValido = false;

const mensagemSucesso = "Correto: Campo B  maior que Campo A";
const containerMensagemSucesso = document.getElementById('msg-sucesso');
containerMensagemSucesso.innerHTML = mensagemSucesso;

const mensagemErro = "[ERRO] Campo B precisa ser maior que Campo A";
const containerMensagemErro = document.getElementById('msg-erro');
containerMensagemErro.innerHTML = mensagemErro;

function analisarMaiorNumero(primeiro, segundo) {
    return parseInt(segundo) > parseInt(primeiro);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formValido = analisarMaiorNumero(numeroA.value, numeroB.value);
    if(formValido) {
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        containerMensagemErro.style.display = 'block'
    }
})

numeroB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formValido = analisarMaiorNumero(numeroA.value, numeroB.value);

    if(!formValido) {
        numeroB.classList.add('erro');
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    } else {
        numeroB.classList.remove('erro');
        containerMensagemErro.style.display = 'none';
    }
})