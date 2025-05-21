// Importaciones de módulos de preguntas
import { unit1Questions } from './unit1_questions.js';
import { unit2Questions } from './unit2_questions.js';
import { unit3Questions } from './unit3_questions.js';
import { unit4Questions } from './unit4_questions.js';
import { unit5Questions } from './unit5_questions.js';
import { unit6Questions } from './unit6_questions.js';
import { unit7Questions } from './unit7_questions.js';
import { unit8Questions } from './unit8_questions.js';

// --- REFERENCIAS A ELEMENTOS DEL DOM ---
let startGameBtn, startScreen, gameScreen, endScreen;
let questionCounter, scoreCounter, questionTextElem;
let optionsContainer, feedbackContainer, feedbackTextElem, explanationTextElem;
let nextQuestionBtn, playAgainBtn, errorMessageStart;

// --- ESTADO DEL JUEGO ---
let allQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let mistakes = 0;
const QUESTIONS_PER_GAME = 40; // Cada partida constará de 40 preguntas
const MIN_QUESTIONS_PER_UNIT = 5; // Mínimo de 5 preguntas de cada unidad por partida
let lastGameQuestionIds = []; // Almacena IDs de preguntas de la partida anterior

// --- CONSTANTES ---
const MIN_TOTAL_QUESTIONS_TO_START = 40; // Mínimo total para que el juego sea viable (5 preg * 8 unidades)
const MIN_QUESTIONS_PER_UNIT_TO_START = 5; // Mínimo por unidad para que el juego sea viable

// --- ASIGNACIÓN DE ELEMENTOS DEL DOM ---
function assignDOMelements() {
    startGameBtn = document.getElementById('start-game-btn');
    startScreen = document.getElementById('start-screen');
    gameScreen = document.getElementById('game-screen');
    endScreen = document.getElementById('end-screen');
    
    questionCounter = document.getElementById('question-counter');
    scoreCounter = document.getElementById('score-counter');
    questionTextElem = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    
    feedbackContainer = document.getElementById('feedback-container');
    feedbackTextElem = document.getElementById('feedback-text');
    explanationTextElem = document.getElementById('explanation-text');
    
    nextQuestionBtn = document.getElementById('next-question-btn');
    playAgainBtn = document.getElementById('play-again-btn');
    errorMessageStart = document.getElementById('error-message-start');
}

// --- LÓGICA DE CARGA Y SELECCIÓN DE PREGUNTAS ---

function loadAllQuestions() {
    allQuestions = []; // Limpiar antes de cargar
    
    // Concatenar todas las preguntas importadas
    if (typeof unit1Questions !== 'undefined') allQuestions = allQuestions.concat(unit1Questions);
    if (typeof unit2Questions !== 'undefined') allQuestions = allQuestions.concat(unit2Questions);
    if (typeof unit3Questions !== 'undefined') allQuestions = allQuestions.concat(unit3Questions);
    if (typeof unit4Questions !== 'undefined') allQuestions = allQuestions.concat(unit4Questions);
    if (typeof unit5Questions !== 'undefined') allQuestions = allQuestions.concat(unit5Questions);
    if (typeof unit6Questions !== 'undefined') allQuestions = allQuestions.concat(unit6Questions);
    if (typeof unit7Questions !== 'undefined') allQuestions = allQuestions.concat(unit7Questions);
    if (typeof unit8Questions !== 'undefined') allQuestions = allQuestions.concat(unit8Questions);

    if (allQuestions.length === 0) {
         console.warn("No se pudo cargar ninguna pregunta. Verifica los archivos de preguntas y sus exportaciones.");
    }
    console.log(`Total de preguntas cargadas en el banco: ${allQuestions.length}`);
}


function selectGameQuestions() {
    if (allQuestions.length === 0) {
        errorMessageStart.textContent = "Error: No hay preguntas cargadas en el banco. No se puede iniciar el juego.";
        if(startGameBtn) startGameBtn.disabled = true;
        console.error("Banco de preguntas vacío.");
        return [];
    }

    const questionsByUnit = {};
    allQuestions.forEach(q => {
        if (!questionsByUnit[q.unit]) {
            questionsByUnit[q.unit] = [];
        }
        questionsByUnit[q.unit].push(q);
    });

    // Validar si hay suficientes preguntas en total y por unidad para que el juego sea viable
    let unitsAvailableCount = 0;
    for (const unitNum in questionsByUnit) {
        if (questionsByUnit[unitNum].length >= MIN_QUESTIONS_PER_UNIT_TO_START) {
            unitsAvailableCount++;
        } else {
            console.warn(`La unidad ${unitNum} tiene ${questionsByUnit[unitNum].length} preguntas, menos que el mínimo de ${MIN_QUESTIONS_PER_UNIT_TO_START} requerido para considerar la unidad viable para el inicio.`);
        }
    }
    
    const totalUnitsWithEnoughQuestions = Object.keys(questionsByUnit).filter(unitNum => questionsByUnit[unitNum].length >= MIN_QUESTIONS_PER_UNIT_TO_START).length;
    const totalExpectedUnits = 8; // Asumiendo que esperas 8 unidades

    if (allQuestions.length < MIN_TOTAL_QUESTIONS_TO_START || totalUnitsWithEnoughQuestions < totalExpectedUnits ) {
         let errorMsg = `Error: No hay suficientes preguntas para iniciar una partida según los criterios.`;
         if (allQuestions.length < MIN_TOTAL_QUESTIONS_TO_START) {
            errorMsg += ` Se necesitan al menos ${MIN_TOTAL_QUESTIONS_TO_START} preguntas en total (actualmente hay ${allQuestions.length}).`;
         }
         if (totalUnitsWithEnoughQuestions < totalExpectedUnits) {
            errorMsg += ` Además, cada una de las ${totalExpectedUnits} unidades temáticas debe tener al menos ${MIN_QUESTIONS_PER_UNIT_TO_START} preguntas (actualmente ${totalUnitsWithEnoughQuestions} unidades cumplen este requisito).`;
         }
        errorMessageStart.textContent = errorMsg;
        if(startGameBtn) startGameBtn.disabled = true;
        console.error("Insuficientes preguntas totales o por unidad para iniciar.");
        return [];
    }
    
    let selectedQuestions = [];
    let tempLastGameQuestionIds = [...lastGameQuestionIds]; 

    // 1. Garantizar representación de unidades (al menos MIN_QUESTIONS_PER_UNIT de cada unidad)
    const unitNumbers = Object.keys(questionsByUnit).map(Number);
    
    for (const unitNum of unitNumbers) {
        let unitSpecificQuestions = questionsByUnit[unitNum];
        if (unitSpecificQuestions.length < MIN_QUESTIONS_PER_UNIT) {
            // Esto no debería pasar si la validación anterior de MIN_QUESTIONS_PER_UNIT_TO_START funcionó para todas las unidades
            console.warn(`La unidad ${unitNum} tiene menos de ${MIN_QUESTIONS_PER_UNIT} preguntas. Se usarán todas las disponibles.`);
            selectedQuestions = selectedQuestions.concat(unitSpecificQuestions.filter(q => !selectedQuestions.find(sq => sq.id === q.id)));
            continue;
        }

        let questionsForThisUnit = [];
        let availableNewInUnit = unitSpecificQuestions.filter(q => !tempLastGameQuestionIds.includes(q.id));
        
        shuffleArray(availableNewInUnit);
        questionsForThisUnit = availableNewInUnit.slice(0, MIN_QUESTIONS_PER_UNIT);
        
        // Si no hay suficientes preguntas NUEVAS, completar con las ya jugadas de ESA UNIDAD
        const remainingNeededInUnit = MIN_QUESTIONS_PER_UNIT - questionsForThisUnit.length;
        if (remainingNeededInUnit > 0) {
            let availableOldInUnit = unitSpecificQuestions.filter(q => tempLastGameQuestionIds.includes(q.id) && !questionsForThisUnit.find(sq => sq.id === q.id));
            shuffleArray(availableOldInUnit);
            questionsForThisUnit = questionsForThisUnit.concat(availableOldInUnit.slice(0, remainingNeededInUnit));
        }
        selectedQuestions = selectedQuestions.concat(questionsForThisUnit);
    }
    
    // 2. Completar aleatoriamente hasta QUESTIONS_PER_GAME
    let questionsToComplete = QUESTIONS_PER_GAME - selectedQuestions.length;

    if (questionsToComplete > 0) {
        let remainingPool = allQuestions.filter(q => !selectedQuestions.find(sq => sq.id === q.id));
        
        // Priorizar preguntas que no estuvieron en la última partida Y no fueron seleccionadas para garantía de unidad
        let newRemainingPool = remainingPool.filter(q => !tempLastGameQuestionIds.includes(q.id));
        shuffleArray(newRemainingPool);
        
        const takeFromNew = Math.min(questionsToComplete, newRemainingPool.length);
        selectedQuestions = selectedQuestions.concat(newRemainingPool.slice(0, takeFromNew));
        questionsToComplete -= takeFromNew;

        if (questionsToComplete > 0) {
            // Si aún faltan, usar del pool restante (que incluye las de la partida anterior no seleccionadas para garantía)
            let oldRemainingPool = remainingPool.filter(q => tempLastGameQuestionIds.includes(q.id) && !selectedQuestions.find(sq => sq.id === q.id));
            shuffleArray(oldRemainingPool);
            selectedQuestions = selectedQuestions.concat(oldRemainingPool.slice(0, questionsToComplete));
        }
    }
    
    // Si después de todo no se llega a QUESTIONS_PER_GAME (porque el banco total es pequeño o por la lógica de selección)
    // pero se tiene el mínimo para empezar, se juega con las que haya.
    if (selectedQuestions.length < MIN_TOTAL_QUESTIONS_TO_START && selectedQuestions.length > 0) { // Ajuste para permitir jugar si hay menos de 40 pero más que el mínimo absoluto
        errorMessageStart.textContent = `Error: No se pudieron seleccionar suficientes preguntas variadas para una partida completa de ${QUESTIONS_PER_GAME} (solo ${selectedQuestions.length} seleccionadas). Se necesitan al menos ${MIN_TOTAL_QUESTIONS_TO_START} para jugar.`;
        if(startGameBtn) startGameBtn.disabled = true;
        console.error("Insuficientes preguntas seleccionadas para la partida.");
        return [];
    } else if (selectedQuestions.length < QUESTIONS_PER_GAME) {
         console.warn(`Se seleccionaron ${selectedQuestions.length} preguntas, menos que las ${QUESTIONS_PER_GAME} deseadas, pero suficientes para jugar.`);
    }
    
    // 3. Mezcla Final
    shuffleArray(selectedQuestions);
    
    // Asegurar que no exceda el límite de QUESTIONS_PER_GAME
    currentQuestions = selectedQuestions.slice(0, QUESTIONS_PER_GAME); 
    
    lastGameQuestionIds = currentQuestions.map(q => q.id); // Actualizar con las preguntas de la partida actual

    if(errorMessageStart) errorMessageStart.textContent = ""; 
    if(startGameBtn) startGameBtn.disabled = false;
    return currentQuestions;
}


// --- LÓGICA DE VISUALIZACIÓN Y JUEGO ---

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionTextElem.textContent = question.questionText;
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        // Aplicar clases para el estilo de tarjeta
        button.className = 'option-btn bg-white p-4 rounded-lg shadow-md text-slate-700 hover:bg-slate-100 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-150 ease-in-out w-full text-left border border-slate-300 hover:border-sky-400'; // Clases base de Tailwind para la tarjeta
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', handleAnswer);
        optionsContainer.appendChild(button);
    });

    feedbackContainer.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
}

function handleAnswer(event) {
    const selectedOptionButton = event.target;
    const selectedAnswerIndex = parseInt(selectedOptionButton.dataset.index);
    const question = currentQuestions[currentQuestionIndex];

    // Deshabilitar todos los botones de opción
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled'); 
    });

    feedbackContainer.classList.remove('hidden', 'correct', 'incorrect'); 
    
    if (selectedAnswerIndex === question.correctAnswerIndex) {
        score++;
        selectedOptionButton.classList.add('correct');
        feedbackTextElem.textContent = "¡Respuesta Correcta!";
        feedbackContainer.classList.add('correct');
    } else {
        mistakes++;
        selectedOptionButton.classList.add('incorrect');
        if (optionsContainer.children[question.correctAnswerIndex]) {
            optionsContainer.children[question.correctAnswerIndex].classList.add('correct');
        }
        feedbackTextElem.textContent = "Respuesta Incorrecta.";
        feedbackContainer.classList.add('incorrect');
    }
    
    explanationTextElem.textContent = question.explanation;
    scoreCounter.textContent = `Aciertos: ${score} | Fallos: ${mistakes}`;
    nextQuestionBtn.classList.remove('hidden');
    nextQuestionBtn.focus(); 
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

// --- LÓGICA DE INICIO Y FIN DE JUEGO ---

function startGame() {
    // loadAllQuestions() ya se llamó en DOMContentLoaded
    
    currentQuestions = selectGameQuestions(); // selectGameQuestions ahora actualiza currentQuestions directamente

    if (currentQuestions.length === 0) {
        console.error("No se pudo iniciar el juego porque no se seleccionaron preguntas.");
        // El mensaje de error ya lo maneja selectGameQuestions
        return; 
    }
    
    currentQuestionIndex = 0;
    score = 0;
    mistakes = 0;
    
    scoreCounter.textContent = `Aciertos: 0 | Fallos: 0`;
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    displayQuestion();
}

function endGame() {
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    document.getElementById('final-score').textContent = `Aciertos: ${score}`;
    document.getElementById('final-mistakes').textContent = `Fallos: ${mistakes}`;
}

function playAgain() {
    // lastGameQuestionIds ya fue actualizado al final de selectGameQuestions
    // con las preguntas de la partida que acaba de terminar.
    // startGame re-seleccionará preguntas, intentando no repetir de ese último set.
    startGame(); 
}

// --- UTILIDADES ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    assignDOMelements();
    
    loadAllQuestions(); // Cargar todas las preguntas al inicio
    
    // Intentar seleccionar preguntas para la validación inicial y mostrar errores si es necesario
    const initialCheckQuestions = selectGameQuestions(); 
    if (initialCheckQuestions.length === 0 && allQuestions.length > 0) {
        // Si hay preguntas cargadas pero no se cumplen los criterios de selección
        // el mensaje de error ya debería estar visible desde selectGameQuestions
        if(startGameBtn) startGameBtn.disabled = true;
    } else if (allQuestions.length === 0) {
         if(errorMessageStart) errorMessageStart.textContent = "No se han podido cargar los bancos de preguntas. Revisa la consola para más detalles.";
         if(startGameBtn) startGameBtn.disabled = true;
    } else {
        if(startGameBtn) startGameBtn.disabled = false; // Habilitar si todo está OK
    }

    if(startGameBtn) startGameBtn.addEventListener('click', startGame);
    if(nextQuestionBtn) nextQuestionBtn.addEventListener('click', showNextQuestion);
    if(playAgainBtn) playAgainBtn.addEventListener('click', playAgain);

    console.log("Trivia de Replanteos inicializada y lista.");
});
