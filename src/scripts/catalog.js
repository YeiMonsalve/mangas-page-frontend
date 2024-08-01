document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los elementos del manga
  const mangaItems = document.querySelectorAll('.manga-item');

  // Recorrer cada elemento del manga y agregar un event listener a los volúmenes dentro de cada manga
  mangaItems.forEach(manga => {
    // Seleccionar los elementos de volumen dentro del manga actual
    const volumeItems = manga.querySelectorAll('.volume-item');
    const mangaImg = manga.querySelector('img');
    const mangaTitle = manga.querySelector('.tittle-span');
    const mangaDescription = manga.querySelector('.title-descrition');
    const mangaPrice = manga.querySelector('.main-Price')

    // Recorrer cada elemento del volumen dentro del manga actual y agregar un event listener
    volumeItems.forEach(item => {
      item.addEventListener('click', function () {
        // Obtener la imagen, texto, descripción y precio del volumen seleccionado
        const imgSrc = item.querySelector('img').src;
        const volText = item.querySelector('span').textContent;
        const volDescription = item.querySelector('p.description').textContent;
        const volPrice = item.querySelector('span.price').textContent;

        // Guardar la imagen, texto y descripción original del manga actual
        const originalImgSrc = mangaImg.src;
        const originalVolText = mangaTitle.textContent;
        const originalDescription = mangaDescription.textContent;
        const originalPrice = mangaPrice.textContent;

        // Actualizar la imagen, texto y descripción del manga actual con el volumen seleccionado
        mangaImg.src = imgSrc;
        mangaTitle.textContent = volText;
        mangaDescription.textContent = volDescription;
        mangaPrice.textContent = volPrice;

        // Restaurar la imagen, texto y descripción del volumen seleccionado con el manga principal original
        item.querySelector('img').src = originalImgSrc;
        item.querySelector('span').textContent = originalVolText;
        item.querySelector('p.description').textContent = originalDescription;
        item.querySelector('span.price').textContent = originalPrice
      });
    });
  });
});