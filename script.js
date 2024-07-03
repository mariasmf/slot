// Função para mostrar o jogo selecionado
function mostrarJogo(jogo) {
    const container = document.getElementById('jogo');
    container.innerHTML = '';

    switch (jogo) {
        case 'slots':
            jogoSlots(container);
            break;
        case 'adivinhacao':
            jogoAdivinhacao(container);
            break;
        case 'pedraPapelTesoura':
            jogoPedraPapelTesoura(container);
            break;
        case 'memoria':
            jogoMemoria(container);
            break;
        case 'roleta':
            jogoRoleta(container);
            break;
        case 'jogoDaVelha':
            jogoDaVelha(container);
            break;
        default:
            container.innerHTML = 'Selecione um jogo';
    }
}

// Jogo de Slots
function jogoSlots(container) {
    let saldo = 100;

    const saldoP = document.createElement('p');
    saldoP.id = 'saldo';
    saldoP.innerText = `Seu saldo inicial é: ${saldo}`;
    container.appendChild(saldoP);

    const resultadoP = document.createElement('p');
    resultadoP.id = 'resultado';
    container.appendChild(resultadoP);

    const girarBtn = document.createElement('button');
    girarBtn.innerText = '
