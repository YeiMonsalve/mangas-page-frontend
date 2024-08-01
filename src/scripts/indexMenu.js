function adjustContainerPosition() {
    const header = document.querySelector('header');
    const container = document.getElementById('menuIconDesp');
    container.style.top = header.offsetHeight + 'px';
}

window.addEventListener('load', adjustContainerPosition);
window.addEventListener('resize', adjustContainerPosition);

document.querySelector('header').addEventListener('transitionend', adjustContainerPosition);