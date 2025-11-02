document.addEventListener('DOMContentLoaded', function() {

    const imagensBrasoes = {
        vermelho: "brasao-saopaulo.jpg",
        azul: "brasao-barcelona.jpg",
        amarelo: "brasao-dourtmond.jpg"
    };

    const times = [
        {
            modalidade: "Futebol",
            nome: "São Paulo FC",
            jogadores: 11,
            cor: "vermelho"
        },
        {
            modalidade: "Futebol",
            nome: "Barcelona FC",
            jogadores: 11,
            cor: "azul"
        },
        {
            modalidade: "Futebol",
            nome: "Borussia Dortmund",
            jogadores: 11,
            cor: "amarelo"
        }
    ];

    const arrayContainer = document.getElementById("array-container");
    arrayContainer.innerHTML = `<pre>${JSON.stringify(times, null, 2)}</pre>`;

    const destaqueContainer = document.getElementById("time-destaque-container");

    const corParaDestacar = "vermelho"; 

    times.forEach(function(time) {
        
        if (time.cor === corParaDestacar) {
            
            const imagemDoTime = imagensBrasoes[time.cor];
            destaqueContainer.innerHTML = `
                <div class="card-time card-${time.cor}">
                    <h3>Destaque (Cor: ${corParaDestacar})</h3>
                    <p><strong>Modalidade:</strong> ${time.modalidade}</p>
                    <p><strong>Time:</strong> ${time.nome}</p>
                    <p><strong>Jogadores:</strong> ${time.jogadores}</p>
                    <img src="${imagemDoTime}" alt="Brasão do ${time.nome}" class="brasao">
                </div>
            `;
        }
    });
});