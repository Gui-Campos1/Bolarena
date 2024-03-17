document.addEventListener("DOMContentLoaded", function () {
    const frame = document.querySelector('.frame');
    const images = frame.querySelectorAll('img');
    let currentImageIndex = 0;
    const intervalTime = 3000; // Tempo em milissegundos para trocar de imagem (3 segundos)

    function changeImage() {
        // Esconde todas as imagens
        images.forEach(img => img.style.display = 'none');
        // Mostra a próxima imagem
        images[currentImageIndex].style.display = 'block';
        // Incrementa o índice da imagem atual
        currentImageIndex++;
        // Volta ao início se chegou à última imagem
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        // Chama a função novamente após o intervalo de tempo
        setTimeout(changeImage, intervalTime);
    }

    // Inicia a função de troca de imagens
    changeImage();
});
