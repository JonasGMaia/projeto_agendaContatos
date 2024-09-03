const form = document.getElementById('formulario');
const listaNomes = [];
const listaNumeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('telefone');

    if (listaNumeros.includes(inputNumero.value)) {
        alert(`${inputNumero.value} já faz parte da sua lista`);
    }

    else{
        listaNomes.push(inputNome.value);
        listaNumeros.push(inputNumero.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }


    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}