

   
   
   const razones = [
    "Porque preparaste tiramisu cuando tenia ganas de pastel.",
    "Porque me das de comer.",
    "Porque trabajas en ti misma para tener una relacion sana.",
    "Porque me inspiras a ser mejor.",
    "Porque sabes las cosas que me gustan.",
    "Porque te esfuerzas por comprenderme.",
    "Porque tus besos son lo mas bonito del mundo mundial.",
    "Porque me haces sentir amado.",
    "Porque me compras cositas que sabes que me gustan.",
    "Porque me gusta mimarte mucho muchote muchisimo.",
    "Porque cuando te enojas se nota que te gusta que te mime.",
    "Porque me escuchas hablar de cosas que me interesan.",
    "Porque tus abrazos son lo mejor que existe.",
    "Porque me haces sentir que soy humano.",
    "Porque me gusta oir tu voz hablandome de tu dia.",
    "Porque vez un futuro conmigo.",
    "Porque tu sonrisa es lo mas hermoso de este planeta.",
    "Porque me gusta los detallitos que me haces.",
    "Porque eres comprensiva conmigo.",
    "Porque me gusta que me escribas antes de dormir.",
    "Porque a travez de tus besitos siento mucho mucho mucho cariño.",
    "Porque confiaz en mi.",
    "Porque me gusta poder apoyarte/ayudarte en cada cosa que pueda.",
    "Porque a pesar de las dificultades que tengo, eligas estar aqui.",
    "Porque me gusta tu mirada calidad cuando me miras.",
    "Porque estamos casados btw.",
    "Porque me gusta acariciarte.",
    "Porque me gusta que me hables en ingles.",
    "Porque tu cariño es sincero.",
    "Porque me gusta tu olor.",
    "Porque puedo contarte todo sin miedo a ser juzgado.",
    "Porque me tomas atencion en las pequeñas cosas."
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

/* CREAR TARJETAS */

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

/* GENERAR PÉTALOS */

function crearPetalo() {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo");

    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.getElementById("petalos-container").appendChild(petalo);

    setTimeout(function() {
        petalo.remove();
    }, 10000);
}

setInterval(crearPetalo, 300);
