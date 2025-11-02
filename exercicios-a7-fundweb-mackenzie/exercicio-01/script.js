document.addEventListener('DOMContentLoaded', function() {

    const moraEmSP = confirm("Você mora na cidade de São Paulo?");

    const imagemSaoPaulo = "sao-paulo.jpg";      
    const imagemOutraCidade = "brasilia.jpg"; 

    const container = document.getElementById("image-container");

    const imgElement = document.createElement("img");

    if (moraEmSP) {
        imgElement.src = imagemSaoPaulo;
        imgElement.alt = "Imagem da cidade de São Paulo"; 
    } else {
        imgElement.src = imagemOutraCidade;
        imgElement.alt = "Imagem de outra cidade"; 
    }

    container.appendChild(imgElement);

});