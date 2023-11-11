
let lastScrollTop = 0;
let isScrolling = false;
let header = document.querySelector(".header");
let opacity = 1;
let delay = 400; // Tempo de atraso em milissegundos (por exemplo, 500ms)

window.addEventListener("scroll", () => {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            const currentScrollTop = window.scrollY;
            const scrollDirection = currentScrollTop > lastScrollTop ? "down" : "up";

            if (scrollDirection === "down" && opacity === 1) {
                fadeOut();
            } else if (scrollDirection === "up" && opacity === 0) {
                fadeIn();
            }

            lastScrollTop = currentScrollTop;
            isScrolling = false;
        }, delay);
    }
});

function fadeOut() {
    let interval = 50; // Intervalo de tempo para a animação em milissegundos (por exemplo, 50ms)
    let steps = delay / interval;
    let step = 1 / steps;
    let timer = setInterval(() => {
        opacity -= step;
        if (opacity <= 0) {
            clearInterval(timer);
            opacity = 0;
        }
        header.style.opacity = opacity;
    }, interval);
}

function fadeIn() {
    let interval = 50; // Intervalo de tempo para a animação em milissegundos (por exemplo, 50ms)
    let steps = delay / interval;
    let step = 1 / steps;
    let timer = setInterval(() => {
        opacity += step;
        if (opacity >= 1) {
            clearInterval(timer);
            opacity = 1;
        }
        header.style.opacity = opacity;
    }, interval);
}

let headerImages = document.querySelector(".header-images");
let images = headerImages.querySelectorAll(".h-img");
let imageDelay = 200; // Tempo de atraso em milissegundos (por exemplo, 500ms)

images.forEach((image) => {
    let timer;
    image.addEventListener("mouseover", () => {
        timer = setTimeout(() => {
            image.style.transition = "transform 0.3s ease"; // Adiciona uma transição suave de escala
            image.style.transform = "scale(1.3)"; // Aumenta a escala em 10% quando o mouse passa por cima
        }, imageDelay);
    });

    image.addEventListener("mouseout", () => {
        clearTimeout(timer);
        image.style.transition = "transform 0.3s ease"; // Adiciona uma transição suave de escala
        image.style.transform = "scale(1)"; // Restaura a escala original quando o mouse sai
    });
});