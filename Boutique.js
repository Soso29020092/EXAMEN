function filtreProduit(category) {
    const wrappers = document.querySelectorAll('.produits > div');
    wrappers.forEach(wrapper => {
        if (category === 'produits' || wrapper.classList.contains(category)) {
            wrapper.style.display = 'block';
        } else {
            wrapper.style.display = 'none';
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const categorie = params.get('categorie') || 'all'; // par défaut "all"
    filtreProduit(categorie);
});

