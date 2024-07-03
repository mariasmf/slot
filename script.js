// Função para girar os rolos do slot
function girarRolo() {
    const simbolos = ["🍒", "🍋", "🔔", "⭐", "🍀", "💎", "7"];
    let rolo = [];
    for (let i = 0; i < 3; i++) {
        rolo.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
    }
    return rolo;
}

// Função para verificar se o jogador ganhou
function verificarGanho(rolo) {
    return rolo[0] === rolo[1] && rolo[2];
}

// Função principal do jogo de slots
function jogoSlots() {
    let saldo = 100; // Saldo inicial do jogador
    document.getElementById("saldo").innerText = `Seu saldo inicial é: ${saldo}`;

    document.getElementById("girar").onclick = function() {
        let rolo = girarRolo();
        document.getElementById("resultado").innerText = `Resultado dos rolos: ${rolo.join(" ")}`;
        
        if (verificarGanho(rolo)) {
            alert("Parabéns! Você ganhou!");
            saldo += 50;
        } else {
            alert("Tente novamente!");
            saldo -= 10;
        }

        document.getElementById("saldo").innerText = `Seu saldo atual é: ${saldo}`;

        if (saldo <= 0) {
            alert("Seu saldo acabou. Fim de jogo!");
            document.getElementById("girar").disabled = true;
        }
    };
}
