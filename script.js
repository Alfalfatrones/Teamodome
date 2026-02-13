const razones = [
    "Porque tu sonrisa me desarma.",
    "Porque contigo me siento en casa.",
    "Porque tu risa mejora cualquier día.",
    "Porque me inspiras a ser mejor.",
    "Porque nuestras conversaciones fluyen sin esfuerzo.",
    "Porque me encanta cómo ves el mundo.",
    "Porque tu abrazo tiene poderes mágicos.",
    "Porque me haces sentir elegido.",
    "Porque confías en mí.",
    "Porque compartimos tonterías que solo nosotros entendemos.",
    "Porque me encanta escucharte hablar de lo que te apasiona.",
    "Porque haces especiales los días normales.",
    "Porque tu mirada dice más que mil palabras.",
    "Porque me apoyas incluso en mis días difíciles.",
    "Porque contigo el tiempo vuela.",
    "Porque haces que todo tenga más sentido.",
    "Porque nuestras diferencias nos complementan.",
    "Porque me encanta cómo me miras cuando sonríes.",
    "Porque me haces sentir tranquilo.",
    "Porque contigo puedo ser yo mismo.",
    "Porque cada recuerdo contigo es valioso.",
    "Porque haces que mi corazón lata más fuerte.",
    "Porque me das paz.",
    "Porque compartimos sueños.",
    "Porque contigo todo se siente más ligero.",
    "Porque tu energía ilumina mi vida.",
    "Porque cada día contigo es diferente.",
    "Porque me encanta tu forma de pensar.",
    "Porque tu cariño es sincero.",
    "Porque nuestras risas son reales.",
    "Porque amo nuestra historia.",
    "Porque esto recién comienza."
];

const botonEntrar = document.getElementById("botonEntrar");
const pantallaInicial = document.getElementById("pantallaInicial");
const cajaContainer = document.getElementById("cajaContainer");
const caja = document.getElementById("caja");
const cajon = document.getElementById("cajon");
const modal = document.getElementById("modal");
const textoCarta = document.getElementById("textoCarta");
const cerrarCarta = document.getElementById("cerrarCarta");

botonEntrar.addEventListener("click", function() {
    pantallaInicial.style.display = "none";
    cajaContainer.style.display = "block";
});

caja.addEventListener("click", function() {
    caja.style.display = "none";
    cajon.style.display = "block";

    for (let i = 0; i < 32; i++) {
        const cartita = document.createElement("div");
        cartita.classList.add("cartita");
        cartita.textContent = i + 1;

        cartita.style.left = Math.random() * 80 + "%";
        cartita.style.top = Math.random() * 80 + "%";
        cartita.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)";

        cartita.addEventListener("click", function() {
            textoCarta.textContent = razones[i];
            modal.style.display = "flex";
        });

        cajon.appendChild(cartita);
    }
});

cerrarCarta.addEventListener("click", function() {
    modal.style.display = "none";
});

/* PÉTALOS */

function crearPetalo() {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo");
    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.getElementById("petalos-container").appendChild(petalo);
    setTimeout(function() { petalo.remove(); }, 10000);
}

setInterval(crearPetalo, 300);
