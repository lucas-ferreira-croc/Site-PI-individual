//funções da página Index
function manager()
{
    if(gi.style.display == 'none')
    {
        gi.style.display = 'block';
    }
    else
    {
        gi.style.display = 'none';
    }
}

function abreLixeira()
{
    lixo.style.display = 'block';
}

function fechaLixeira()
{
    lixo.style.display = 'none';
}

function abrePainel()
{
    painel.style.display = 'block';
}

function fechaPainel()
{
    painel.style.display = 'none';
}

function abreConexao()
{
    conexao.style.display = 'block';
}

function fechaConexao()
{
    conexao.style.display = 'none';
}

function abreInternet()
{
    internet.style.display = 'block';
}

function fechaInternet()
{
    internet.style.display = 'none';
}

function abreTexto()
{
    historia.style.display = 'block';
}

function fechaTexto()
{
    historia.style.display = 'none';
}
//fim das funções da página Index

// começo das funções da página preview
function showTheCroc()
{
    let erros = validaForm(); 
}

// function validaForm()
// {
//     let erros = [];
    
//     if(!name.value)
//     {
//         erros.push("please, fill out your name");
//     }

//     if(
//     name.value.search(" ") == -1 || 
//     name.value[name.value.length - 1] == " " ||
//     name.value[0] == " ")
//     {
//         erros.push("Please, insert your name");
//     }

//     if (!nickname)
// }
