const preguntaElement = document.getElementById("question");
const opcion1Element = document.getElementById("a_text");
const opcion2Element = document.getElementById("b_text");
const opcion3Element = document.getElementById("c_text");
const opcion4Element = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const mensaje = document.getElementById("toasts");
const header = document.getElementsByClassName("quiz-header")
const lista = document.querySelector("ul");
let quizTerminado = false;

let totalPregunta = 0;
let aciertos = 0;

const preguntas = [
  {
    pregunta: "Quien va a ganar la champions",
    Respuestas: ["Real Madrid", "Bayern Munchen", "PSG", "Dortmund"],
    correcta: "A",
  },
  {
    pregunta: "Que pais tiene la mayor esperanza de vida",
    Respuestas: ["España", "EEUU", "Hong Kong", "Tailandia"],
    correcta: "C",
  },
  {
    pregunta:
      "¿En qué ciudad estarías si te encontraras en las escaleras de la Plaza de España?",
    Respuestas: ["Roma", "Lodres", "Berlin", "Kiev"],
    correcta: "A",
  },
  {
    pregunta: "¿Qué lengua tiene más hablantes nativos: inglés o español?",
    Respuestas: ["Inglés", "Español", "Frances", "Aleman"],
    correcta: "B",
  },
];

const iniciarQuiz = () => {
  lista.style.display="block";
  totalPregunta = 0;
  aciertos = 0;
  submitButton.textContent = 'Enviar';
  mostrarPreguntas();
  quizTerminado = false;
};

const mostrarPreguntas = () => {
  if (totalPregunta < preguntas.length) {
    const preguntaActual = preguntas[totalPregunta];
    preguntaElement.textContent = preguntaActual.pregunta;
    opcion1Element.textContent = preguntaActual.Respuestas[0];
    opcion2Element.textContent = preguntaActual.Respuestas[1];
    opcion3Element.textContent = preguntaActual.Respuestas[2];
    opcion4Element.textContent = preguntaActual.Respuestas[3];

    
    const opciones = document.querySelectorAll(".answer");
    opciones.forEach((opcion) => {
      opcion.checked = false;
    });
  } else {
    mostrarResultado();
  }
};

const verificarRespuesta = () => {
  if(quizTerminado){
    iniciarQuiz();
  }
  const respuestas = document.getElementsByName("answer");
  let seleccionada = null;
  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i].checked) {
      seleccionada = respuestas[i].id;
      break;
    }
  }
  if (seleccionada === preguntas[totalPregunta].correcta.toLowerCase()) {
    aciertos++;
  }
  totalPregunta++;
  console.log(aciertos);
  if (totalPregunta < preguntas.length) {
    mostrarPreguntas();
  } else {
    mostrarResultado();
  }
};

const mostrarResultado = () => {
  preguntaElement.textContent = `Has respondido correctamente a ${aciertos} de ${totalPregunta} preguntas.`;
  submitButton.textContent = 'Reiniciar';
  
  submitButton.removeEventListener("click", verificarRespuesta);
  
  submitButton.addEventListener("click", iniciarQuiz);
  quizTerminado = true;
  lista.style.display="none";
  mostrarPreguntas();
};

submitButton.addEventListener("click", verificarRespuesta);

iniciarQuiz();
