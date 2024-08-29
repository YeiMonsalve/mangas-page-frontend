// Barra de navegación
const logo = document.getElementById("logo");
const barraLateral = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circle = document.querySelector(".circle");
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

palanca.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    circle.classList.toggle("actived");
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

    window.addEventListener('load', () => {
        const activeSection = localStorage.getItem('activeSection');
        showSection(activeSection || home);
    });
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

            localStorage.setItem('activeSection', targetId);
        }
    });
});

showSection('home');

// Filtrador/Buscador
const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchbar');
const rows = document.querySelectorAll('.table tbody tr');

searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchTable();
    }
});

function searchTable() {
    const input = searchBar.value.toLowerCase();

    rows.forEach(row => {
        const rowData = row.textContent.toLowerCase();
        if (rowData.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

function handleInputChange() {
    const input = searchBar.value.toLowerCase();

    rows.forEach(row => {
        row.style.display = (input === '') ? '' : row.style.display;
    });
}

searchButton.addEventListener('click', searchTable);
searchBar.addEventListener('input', handleInputChange);