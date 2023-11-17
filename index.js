function inserirAluno(){
    const nome = prompt('Digite o nome do aluno');
    const tabela = document.getElementById('dados');
    const novalinha = document.createElement('tr');
    const colunanome = document.createElement('td');
    colunanome.innerText = nome;
    colunanome.style.backgroundColor = 'red';
    novalinha.appendChild(colunanome);


    const totalaulas = parseInt(prompt('Quantas aulas teve no bimestre'));
    const totalfaltas = parseInt(prompt('Digite a quantidade de falta'));

    const percentualFaltas = ((totalfaltas/totalaulas)*100)

    const colunapercentual = document.createElement('td');
    colunapercentual.innerText = percentualFaltas;
    novalinha.appendChild(colunapercentual);

}
