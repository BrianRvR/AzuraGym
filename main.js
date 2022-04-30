document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.beneficio', { delay: 500 });
  ScrollReveal().reveal('.texto2', { delay: 500 });
  ScrollReveal().reveal('.texto', { delay: 600 });
  ScrollReveal().reveal('.new-cards', { delay: 500 });
  ScrollReveal().reveal('.new-cards2', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

/* Aixo comprova la localStorage si ja té la variable guardada */
function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies == 'true'){
    cajacookies.style.display = 'none';
  }
}

/* Aqui guardem la variable de que s'ha
acceptat l'ús de cookies així no es tornarà a mostrar un altre cop*/
function aceptarCookies() {
  localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';
}

/* Això s'executa quan la web està guardada */
(document).ready(function () {
  compruebaAceptaCookies();
});

