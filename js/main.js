$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minWords: 2
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email',
            cpf: 'Por favor, insira seu CPF',
            endereço: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            console.log(form);
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if(camposIncorretos) {
                alert(`Há ${camposIncorretos} campos incorretos`);
            }
        }
    })
})