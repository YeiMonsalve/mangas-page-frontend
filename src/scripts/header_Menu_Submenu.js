// menu
function adjustContainerPosition() {
    const header = document.querySelector('header');
    const container = document.getElementById('menuIconDesp');
    container.style.top = header.offsetHeight + 'px';
}

window.addEventListener('load', adjustContainerPosition);
window.addEventListener('resize', adjustContainerPosition);

document.querySelector('header').addEventListener('transitionend', adjustContainerPosition);

// submenu
document.addEventListener('DOMContentLoaded', () => {
    const profileHeaderLink = document.getElementById('profile-header-link');
    const submenu = document.getElementById('submenu');

    profileHeaderLink.addEventListener('click', (event) => {
        event.preventDefault();
        submenu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!profileHeaderLink.contains(event.target) && !submenu.contains(event.target)) {
            submenu.classList.remove('show');
        }
    });
});