//barra de navegación
const logo = document.getElementById("logo");
const barraLateral = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const submenu = document.querySelectorAll(".list-item a");

menu.addEventListener("click", () => {
    barraLateral.classList.toggle("max-sidebar");
    if (barraLateral.classList.contains("max-sidebar")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if (window.innerWidth <= 320) {
        barraLateral.classList.add("mini-sidebar");
        main.classList.add("min-main");
        spans.forEach((span) => {
            span.classList.add("oculto");
        })
    }
});

logo.addEventListener("click", () => {
    barraLateral.classList.toggle("mini-sidebar");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
});

submenu.forEach(item => {
    item.addEventListener('click', (event) => {
        const submenu = item.nextElementSibling;

        if (submenu && submenu.classList.contains('submenu')) {
            event.preventDefault();
            submenu.classList.toggle('submenu-visible');
        }
    });
});

// Función para mostrar el main de cada opcion de la barra de navegación
function showSection(targetId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

document.querySelectorAll('.list-item a, .submenu-item a').forEach(link => {
    link.addEventListener('click', (event) => {

        if (link.getAttribute('data-target') === 'close-sesion') {
            return;
        }

        event.preventDefault();

        const targetId = link.getAttribute('data-target');
        if (targetId) {
            showSection(targetId);

        }
    });
});

showSection('home');

// Filtrador/Buscador
document.querySelectorAll('.searchButton').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.closest('.section');
        searchTable(section);
    });
});

document.querySelectorAll('.searchbar').forEach(input => {
    input.addEventListener('input', () => {
        const section = input.closest('.section');
        handleInputChange(section);
    });
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const section = input.closest('.section');
            searchTable(section);
        }
    });
});

function searchTable(section) {
    const rows = section.querySelectorAll('.table tbody tr');
    const input = section.querySelector('.searchbar').value.toLowerCase();

    rows.forEach(row => {
        const rowData = row.textContent.toLowerCase();
        row.style.display = rowData.includes(input) ? '' : 'none';
    });
}

function handleInputChange(section) {
    const rows = section.querySelectorAll('.table tbody tr');
    const input = section.querySelector('.searchbar').value.toLowerCase();

    rows.forEach(row => {
        row.style.display = (input === '') ? '' : row.style.display;
    });
}

// Manejo de la imagen al editar o registrar
document.addEventListener('DOMContentLoaded', function() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    const imagePreviews = document.querySelectorAll('img.manga-image-edit');

    fileInputs.forEach((fileInput, index) => {
        const imagePreview = imagePreviews[index];
        
        fileInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                };

                reader.readAsDataURL(file);
            }
        });
    });
});