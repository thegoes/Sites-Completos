// sonic.js

document.addEventListener('DOMContentLoaded', function () {
    function validarEmail(email) {
        if (!email.includes('@')) {
            alert('Email inválido');
            return false;
        }
        return true;
    }

    function validarNome(nome) {
        if (nome.length < 3) {
            alert('Nome inválido');
            return false;
        }
        return true;
    }

    function validarAssunto(assunto) {
        if (assunto.split(/\s+/).length > 2000) {
            alert('Por favor, digite um assunto com até 2000 palavras');
            return false;
        }
        return true;
    }

    document.getElementById('contatoForm').addEventListener('submit', function (event) {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var assunto = document.getElementById('assunto').value;

        if (validarNome(nome) && validarEmail(email) && validarAssunto(assunto)) {
            alert('Formulário enviado com sucesso!');
        }

        event.preventDefault();
    });
});
