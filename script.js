$hamburger = document.querySelector(".hamburger-content");
$close = document.querySelector(".close-content");


$hamburger.onclick = function () {

    $NavBar = document.querySelector(".NavBar-Content");
    $NavBar.classList.toggle("active");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Défilement en douceur vers la section cible
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop
            });
        }
    });
});


