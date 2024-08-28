// Poner el volumend el manga como principal

document.addEventListener("DOMContentLoaded", function () {
  const mangaItems = document.querySelectorAll('.manga-item');

  mangaItems.forEach(manga => {
    const volumeItems = manga.querySelectorAll('.volume-item');
    const mangaImg = manga.querySelector('img');
    const mangaTitle = manga.querySelector('.tittle-span');
    const mangaDescription = manga.querySelector('.title-descrition');
    const mangaPrice = manga.querySelector('.main-Price')

    volumeItems.forEach(item => {
      item.addEventListener('click', function () {
        const imgSrc = item.querySelector('img').src;
        const volText = item.querySelector('span').textContent;
        const volDescription = item.querySelector('p.description').textContent;
        const volPrice = item.querySelector('span.price').textContent;

        const originalImgSrc = mangaImg.src;
        const originalVolText = mangaTitle.textContent;
        const originalDescription = mangaDescription.textContent;
        const originalPrice = mangaPrice.textContent;

        mangaImg.src = imgSrc;
        mangaTitle.textContent = volText;
        mangaDescription.textContent = volDescription;
        mangaPrice.textContent = volPrice;

        item.querySelector('img').src = originalImgSrc;
        item.querySelector('span').textContent = originalVolText;
        item.querySelector('p.description').textContent = originalDescription;
        item.querySelector('span.price').textContent = originalPrice
      });
    });
  });
});

// buscador del catalogo

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

//filtrar por mangas

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