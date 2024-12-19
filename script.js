// Adiciona funcionalidade ao carrossel
document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
        // Esconde todas as seções de conteúdo
        document.querySelectorAll('.conteudo-materia').forEach(secao => {
            secao.style.display = 'none';
        });

        // Mostra o conteúdo correspondente
        const idConteudo = `conteudo-${item.id}`;
        document.getElementById(idConteudo).style.display = 'block';
    });
});
