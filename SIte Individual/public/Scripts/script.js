//funções da página Index
function manager() {
    if (aparece_manager.style.display == 'none') {
        aparece_manager.style.display = 'block';
        gi.style.display = 'block';
    }
    else {
        aparece_manager.style.display = 'none';
    }
}

function abreLixeira() {
    lixo.style.display = 'block';
}

function fechaLixeira() {
    lixo.style.display = 'none';
}

function abrePainel() {
    painel.style.display = 'block';
}

function fechaPainel() {
    painel.style.display = 'none';
}

function abreConexao() {
    conexao.style.display = 'block';
}

function fechaConexao() {
    conexao.style.display = 'none';
}

function abreInternet() {
    internet.style.display = 'block';
}

function fechaInternet() {
    internet.style.display = 'none';
}

function abreTexto() {
    historia.style.display = 'block';
    tips_texto_sp.style.display = 'block';
    tips_texto_anime.style.display = 'block';
    tips_texto_vaporwave.style.display = 'block';
    tips_texto_unity.style.display = 'block';
    tips_texto_engine.style.display = 'block';
    tips_texto_unreal.style.display = 'block';
    tips_texto_pixel.style.display = 'block';
    tips_texto_tresD.style.display = 'block';
    tips_texto_semiotica.style.display = 'block';
}

function fechaTexto() {
    historia.style.display = 'none';
    tips_texto_sp.style.display = 'none';
    tips_texto_anime.style.display = 'none';
    tips_texto_unity.style.display = 'none';
    tips_texto_vaporwave.style.display = 'none';
    tips_texto_engine.style.display = 'none';
    tips_texto_unreal.style.display = 'none';
    tips_texto_pixel.style.display = 'none';
    tips_texto_tresD.style.display = 'none';
    tips_texto_semiotica.style.display = 'none';
}
//fim das funções da página Index

// começo das funções da página preview

function showTheCroc() {
    var erros = validaForm();
    mensagemErro.innerHTML = "";

    if (erros.length > 0) {
        for (var i = 0; i < erros.length; i++) {
            var erro = erros[i];
            var li = document.createElement("li");
            li.innerHTML = erro;
            mensagemErro.appendChild(li);
        }
    }
    else {
        formulario.style.display = 'none';

    }
}

function validaForm() {
    let validado = false;
    var erros = [];

    var nm = txtname.value;

    let usuario = {
        nickname: nm,
        email: email.value,
        senha: password.value
    };

    if (!nm) {
        erros.push("please, fill out your name");
    }

    if (nm.search(" ") == -1 || nm[nm.length - 1] == " " || nm[0] == " ") {
        erros.push("Please, insert at least 1 surname");
    }

    if (!nickname.value) {
        erros.push("Please, choose a nickname for you");
    }

    if (nickname.value.length > 25) {
        erros.push("isn't that too long for a nick? just kidding, but, you nickname should have at max 25 characters");
    }

    if (nickname.value.length < 4) {
        erros.push("that's a really short nick, would you please choose one bigger than 4 characters?");
    }

    if (email.value.indexOf("@") == -1) {
        erros.push("the email format should be: user@domain.com , you don't have '@' in yours");
    }
    else {
        var parts = email.value.split("@");
        var domain = parts[1];
        if (domain.indexOf(".") == -1) {
            erros.push("the email format should be: user@domain.com , you don't have '.' in yours")
        }
        else {
            var domainParts = domain.split(".");
            var ext = domainParts[1];

            if (ext.length > 4 || ext.length <= 2) {
                erros.push("the email format should be: user@domain.com , you don't have '.com' in yours")
            }
        }
    }

    if (password.value.length < 5) {
        erros.push("That's too short, your password should have at least 5 characters");
    }

    if (password.value.length > 20) {
        erros.push("That's too long, your password should have at max 20 characters");
    }

    validado = true;

    if (validado && erros.length == 0) {
        fetch('/usuarios/cadastrarUsuario', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario)
        }).then(function (response) {
            response.status;
        });
        window.location.href = 'video.html';
    }
    return erros;
}

// script's página Login
function entrar() {
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.nick;
                sessionStorage.nome_usuario_meuapp = json.nome;

                window.location.href = 'video.html';
            });

        } else {

            console.log('Erro de login!');

            response.text().then(texto => {
                console.error(texto);
            });
        }
    });

    return false;
}
