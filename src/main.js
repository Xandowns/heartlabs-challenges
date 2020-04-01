function calculo(){
    const informacoes = document.getElementsByClassName('valor');

    let valorProjeto = informacoes[3].value;
    let diasEfetivos = informacoes[1].value;
    let horasDiarias = informacoes[0].value;
    let diasFerias = informacoes[2].value;

    let valorHora = valorProjeto / (diasEfetivos * 4 * horasDiarias) + ( diasFerias * diasEfetivos * horasDiarias);

    let resultante = document.getElementById('valorFinal');

    if (resultante.firstChild !== null) {
        resultante.removeChild(resultante.firstChild);
    }

    resultante.appendChild(document.createTextNode('Valor hora é: ' + valorHora.toFixed(2)));

}