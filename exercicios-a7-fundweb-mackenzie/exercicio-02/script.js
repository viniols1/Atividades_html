document.addEventListener('DOMContentLoaded', function() {

    let notas = [];
    let soma = 0;

    for (let i = 1; i <= 4; i++) {
        
        let notaDigitada;
        let notaValida = false;

        while (!notaValida) {
            notaDigitada = prompt("Digite a nota " + i + " (de 4):");

            if (notaDigitada === null) {
                alert("Operação cancelada pelo usuário.");
                return; 
            }

            let nota = parseFloat(notaDigitada);

            if (isNaN(nota)) {
                alert("Valor inválido. Por favor, digite apenas números.");
            } else {
                notas.push(nota);
                soma += nota;
                notaValida = true;
            }
        }
    }

    alert("As notas digitadas foram: " + notas.join(", "));

    let media = soma / notas.length;

    const listaElement = document.getElementById("lista-notas");
    const mediaElement = document.getElementById("media-final");

    listaElement.textContent = notas.join(" - ");
    mediaElement.textContent = media.toFixed(2);
});