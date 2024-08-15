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