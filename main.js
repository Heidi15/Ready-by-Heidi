document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('destSearch');
    const searchBtn = document.querySelector('.btn-search');
    const cards = document.querySelectorAll('.card');

    const filterDestinations = () => {
        const query = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const country = card.getAttribute('data-country').toLowerCase();
            // Affiche la carte si le nom du pays contient la recherche
            if (country.includes(query)) {
                card.style.display = "block";
                setTimeout(() => card.style.opacity = "1", 10);
            } else {
                card.style.opacity = "0";
                card.style.display = "none";
            }
        });
    };

    // Recherche au clic sur le bouton
    searchBtn.addEventListener('click', filterDestinations);

    // Recherche instantanée pendant la frappe
    searchInput.addEventListener('input', filterDestinations);
});