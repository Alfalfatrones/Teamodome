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
const contenido = document.getElementById("contenido");
const grid = document.getElementById("grid");
const mensajeFinal = document.getElementById("mensajeFinal");

let tarjetasVolteadas = 0;

botonEntrar.addEventListener("click", function() {
    pantallaInicial.style.display = "none";
    contenido.style.display = "block";
});

for (let i = 0; i < 32; i++) {

    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.textContent = i + 1;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.textContent = razones[i];

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener("click", function() {
        if (!card.classList.contains("volteada")) {
            card.classList.add("volteada");
            tarjetasVolteadas++;

            if (tarjetasVolteadas === 32) {
                mensajeFinal.style.display = "block";
            }
        }
    });

    grid.appendChild(card);
}
