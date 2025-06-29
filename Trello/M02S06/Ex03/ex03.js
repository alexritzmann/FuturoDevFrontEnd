

const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const cor = document.querySelector('#cor');
const valor = document.querySelector('#valor');
const estadoRadios = document.querySelectorAll('input[name="estado"]');
const descricao = document.querySelector('#descricao');
const botaoSalvar = document.querySelector('#botao-salvar');
const botaoVoltar = document.querySelector('#botao-voltar');
const formulario = document.querySelector('#form');


let listaCelulares = JSON.parse(localStorage.getItem('listaCelulares')) || [];

botaoSalvar.disabled = true;
botaoSalvar.style.backgroundColor = 'gray';
botaoSalvar.style.cursor = 'not-allowed';


function verificarCampos() 
{
  const estadoSelecionado = Array.from(estadoRadios).some(radio => radio.checked);
  const camposPreenchidos = (
    marca.value.trim() !== "" && 
    modelo.value.trim() !== "" && 
    cor.value.trim() !== "" && 
    valor.value.trim() !== "" && 
    estadoSelecionado
  );
  
  botaoSalvar.disabled = !camposPreenchidos;
  botaoSalvar.style.backgroundColor = camposPreenchidos ? 'green' : 'gray';
  botaoSalvar.style.cursor = camposPreenchidos ? 'pointer' : 'not-allowed';
}


marca.addEventListener('change', verificarCampos);
modelo.addEventListener('input', verificarCampos);
cor.addEventListener('input', verificarCampos);
valor.addEventListener('input', verificarCampos);
estadoRadios.forEach(radio => 
{
  radio.addEventListener('change', verificarCampos);
});


function salvarDados(event) 
{
  event.preventDefault();
  
  const estadoSelecionado = Array.from(estadoRadios).find(radio => radio.checked)?.value || '';
  
  const novoCelular = 
  {
    marca: marca.value,
    modelo: modelo.value,
    cor: cor.value,
    valor: parseFloat(valor.value),
    estado: estadoSelecionado,
    descricao: descricao.value
  };


  listaCelulares.push(novoCelular);
  localStorage.setItem('listaCelulares', JSON.stringify(listaCelulares));
  
  formulario.reset();

  window.alert('Dados salvos com sucesso');
  
  botaoSalvar.disabled = true;
  botaoSalvar.style.backgroundColor = 'gray';
  botaoSalvar.style.cursor = 'not-allowed';
}

formulario.addEventListener('submit', salvarDados);
