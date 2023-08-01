const form = document.querySelector('#form-contatos');
const inputNomeContato = document.querySelector('#nome-contato');
const inputTelefoneContato = document.querySelector('#telefone-contato');
let nomeContatos = [];
let telefoneContatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionarContato();
  atualizaTabela();
})

function adicionarContato() {
  if (nomeContatos.includes(inputNomeContato.value)) {
    alert(`(ERRO) O contato ${inputNomeContato} já existe! Crie um novo com um nome diferente.`);
  } else if (telefoneContatos.includes(inputTelefoneContato.value)) {
    alert(`(ERRO) O telefone ${inputTelefoneContato.value} já existe! Crie um novo com um número diferente.`);
  } else {

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += '<td><a><img src="./images/trash.svg" onclick="excluirItemTabela()"></a></td>'
    linha += `</tr>`;

    linhas += linha;
    nomeContatos.push(inputNomeContato.value);
    telefoneContatos.push(inputTelefoneContato.value);
  }

  inputNomeContato.value = '';
  inputTelefoneContato.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('#table-corpo');
  corpoTabela.innerHTML = linhas;
}

function excluirItemTabela() {
  let confirmacao = confirm('ATENÇÃO ⚠️' + '\n\nTem certeza que deseja excluir TODOS os itens da agenda?');

  if (confirmacao) {
    linhas = '';
    atualizaTabela();
  }
}