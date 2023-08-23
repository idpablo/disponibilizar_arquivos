function atualizarDataEHora() {
    const dataEHoraElement = document.getElementById("dataEHora");
    const horaAtualElement = document.getElementById("horaAtual");

    const dataAtual = new Date();
    const horaAtual = dataAtual.toLocaleTimeString();

    horaAtualElement.textContent = horaAtual;
}

setInterval(atualizarDataEHora, 1000);
atualizarDataEHora();