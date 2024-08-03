function searchManga() {

    const searchTerm = document.querySelector('#search-input').value.trim().toLowerCase();
    const mangaItems = document.querySelectorAll('.manga-item');
    const searchInput = document.querySelector('#search-input');

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchManga();
        }
    });

    mangaItems.forEach(item => {
        const mangaTitle = item.querySelector('h2').innerText.trim().toLowerCase();

        if (mangaTitle.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

function filtrarMangas() {
    var categoriaSeleccionada = document.getElementById("category-select").value;
    var mangas = document.querySelectorAll(".manga-item");

    mangas.forEach(function (manga) {
        var categoriaManga = manga.getAttribute("data-categoria");
        if (categoriaSeleccionada === "todos" || categoriaManga === categoriaSeleccionada) {
            manga.classList.remove("hidden");
        } else {
            manga.classList.add("hidden");
        }
    });
}