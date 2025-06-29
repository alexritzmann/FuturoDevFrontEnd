

const email = document.getElementById('email2');
const senha = document.getElementById('senha2');
const botaoEntrar = document.getElementById('botao-entrar');
const botaoMostrar = document.getElementById('botao-mostrar');
const senhaInput = document.getElementById('senha2');


function atualizarBotao() 
{
    const camposPreenchidos = email.value.trim() !== "" && senha.value.trim() !== "";
    botaoEntrar.disabled = !camposPreenchidos;
    botaoEntrar.style.backgroundColor = camposPreenchidos ? 'green' : 'gray';
    botaoEntrar.style.cursor = camposPreenchidos ? 'pointer' : 'not-allowed';
}

atualizarBotao();

email.addEventListener('input', atualizarBotao);
senha.addEventListener('input', atualizarBotao);


botaoMostrar.textContent = 'Mostrar Senha';

botaoMostrar.addEventListener('click', () => {
    if (senhaInput.type === 'password') 
        {
        senhaInput.type = 'text';
        botaoMostrar.textContent = 'Ocultar Senha';
    } else 
    {
        senhaInput.type = 'password';
        botaoMostrar.textContent = 'Mostrar Senha';
    }
});

