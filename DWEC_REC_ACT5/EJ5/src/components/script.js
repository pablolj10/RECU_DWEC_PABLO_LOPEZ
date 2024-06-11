/* eslint-disable no-unused-vars */
const questionTitle = document.querySelector('#question');
const quiz = document.getElementById('quiz');
const respuesta1 = document.getElementById('a_text');
const respuesta2 = document.getElementById('b_text');
const respuesta3 = document.getElementById('c_text');
const respuesta4 = document.getElementById('d_text');
const boton = document.getElementById('submit')
const toast = document.getElementById('toasts');

let cont =0;
let aciertos =0;


const questions = [

    { 
        pregunta: '¿Quien va a ser el pichichi de la liga?', 
        answers: [ 
        'Michel Salgado', 
        'Muriqi', 
        'Fali', 
        'Coentrao' 
        ], 
        correct: 'a' 
        },

        { 
        pregunta: '¿Quién va a ganar la Champions?', 
        answers: [ 
        'Real Madrid', 
        'EuroDepor', 
        'PSG', 
        'Bayern Munchen' 
        ], 
        correct: 'b' 
        },

        { 
        pregunta: '¿Quien se estrella este fin de semana?', 
        answers: [ 
        'Ocon', 
        'Bottas', 
        'Albon', 
        'Michel Salgado' 
        ], 
        correct: 'a' 
        },

        { 
        pregunta: '¿Qué lenguaje se ejecuta en un navegador web?', 
        answers: [ 
        'Java', 
        'C', 
        'Python', 
        'JavaScript' 
        ], 
        correct: 'd' 
        }    
]

//función para crear la notificacion 
function createNotification(message, type) { 
    //crear el nodo q representa la notificacion 
    let notf = document.createElement('div'); 
    notf.classList.add('toast', type); 
    notf.textContent = message; 
    toast.appendChild(notf); 
 
    //desaparicion automatica de la notificacion 
    setTimeout(() => { 
            toast.removeChild(notf); 
        }, 1800); 
} 

function iniciarQuiz() {

    cont = 0;
    aciertos = 0;

    mostrarPregunta(cont);

}

iniciarQuiz();

function mostrarPregunta(cont) {

    const preguntaActual = questions[cont];
    questionTitle.textContent = preguntaActual.pregunta;
    
    respuesta1.textContent = preguntaActual.answers[0];
    respuesta2.textContent = preguntaActual.answers[1];
    respuesta3.textContent = preguntaActual.answers[2];
    respuesta4.textContent = preguntaActual.answers[3];
}

mostrarPregunta(cont);


function mostrarResultados() {
    // Calcular el número total de preguntas
    const totalPreguntas = questions.length;

    // Crear un mensaje de resultados
    let mensaje = `Has respondido ${aciertos} de ${totalPreguntas} preguntas correctamente.`;

    // Mostrar el mensaje de resultados en la interfaz
    toast.textContent = mensaje;
}


boton.addEventListener('click', () => {
    // Obtener la respuesta seleccionada por el usuario
    const respuestaSeleccionada = document.querySelector('input[name="answer"]:checked');

    // Verificar si se ha seleccionado una respuesta
    if (respuestaSeleccionada) {
        const respuestaId = respuestaSeleccionada.id;

        // Verificar si la respuesta seleccionada es correcta
        if (respuestaId === questions[cont].correct) {
            aciertos++; // Incrementar el contador de aciertos
        }

        // Mostrar la siguiente pregunta si hay más preguntas disponibles
        if (cont < questions.length - 1) {
            cont++; // Avanzar al siguiente índice de pregunta
            mostrarPregunta(cont); // Mostrar la siguiente pregunta
        } else {
            mostrarResultados();
        }
    }
});


window.onload = () => {
    iniciarQuiz();
};
