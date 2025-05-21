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
const QUESTIONS_PER_GAME = 40; 
const MIN_QUESTIONS_PER_UNIT = 5; 
let lastGameQuestionIds = []; 

// --- CONSTANTES ---
const MIN_TOTAL_QUESTIONS_TO_START = 40; 
const MIN_QUESTIONS_PER_UNIT_TO_START = 5; 

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
    allQuestions = []; 
    
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
        if(errorMessageStart) errorMessageStart.textContent = "Error: No hay preguntas cargadas en el banco. No se puede iniciar el juego.";
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

    let unitsAvailableCount = 0;
    for (const unitNum in questionsByUnit) {
        if (questionsByUnit[unitNum].length >= MIN_QUESTIONS_PER_UNIT_TO_START) {
            unitsAvailableCount++;
        } else {
            console.warn(`La unidad ${unitNum} tiene ${questionsByUnit[unitNum].length} preguntas, menos que el mínimo de ${MIN_QUESTIONS_PER_UNIT_TO_START} requerido para considerar la unidad viable para el inicio.`);
        }
    }
    
    const totalUnitsWithEnoughQuestions = Object.keys(questionsByUnit).filter(unitNum => questionsByUnit[unitNum].length >= MIN_QUESTIONS_PER_UNIT_TO_START).length;
    const totalExpectedUnits = 8; 

    if (allQuestions.length < MIN_TOTAL_QUESTIONS_TO_START || totalUnitsWithEnoughQuestions < totalExpectedUnits ) {
         let errorMsg = `Error: No hay suficientes preguntas para iniciar una partida según los criterios.`;
         if (allQuestions.length < MIN_TOTAL_QUESTIONS_TO_START) {
            errorMsg += ` Se necesitan al menos ${MIN_TOTAL_QUESTIONS_TO_START} preguntas en total (actualmente hay ${allQuestions.length}).`;
         }
         if (totalUnitsWithEnoughQuestions < totalExpectedUnits) {
            errorMsg += ` Además, cada una de las ${totalExpectedUnits} unidades temáticas debe tener al menos ${MIN_QUESTIONS_PER_UNIT_TO_START} preguntas (actualmente ${totalUnitsWithEnoughQuestions} unidades cumplen este requisito).`;
         }
        if(errorMessageStart) errorMessageStart.textContent = errorMsg;
        if(startGameBtn) startGameBtn.disabled = true;
        console.error("Insuficientes preguntas totales o por unidad para iniciar.");
        return [];
    }
    
    let selectedQuestions = [];
    let tempLastGameQuestionIds = [...lastGameQuestionIds]; 

    const unitNumbers = Object.keys(questionsByUnit).map(Number);
    
    for (const unitNum of unitNumbers) {
        let unitSpecificQuestions = questionsByUnit[unitNum];
        if (!unitSpecificQuestions || unitSpecificQuestions.length === 0) { // Comprobación adicional
            console.warn(`No hay preguntas para la unidad ${unitNum}.`);
            continue;
        }
        
        if (unitSpecificQuestions.length < MIN_QUESTIONS_PER_UNIT) {
            console.warn(`La unidad ${unitNum} tiene menos de ${MIN_QUESTIONS_PER_UNIT} preguntas. Se usarán todas las disponibles.`);
            // Añadir solo las que no estén ya en selectedQuestions para evitar duplicados si una pregunta pertenece a múltiples "unidades" lógicas (aunque no debería pasar con tu estructura)
            unitSpecificQuestions.forEach(q => {
                if (!selectedQuestions.find(sq => sq.id === q.id)) {
                    selectedQuestions.push(q);
                }
            });
            continue;
        }

        let questionsForThisUnit = [];
        let availableNewInUnit = unitSpecificQuestions.filter(q => !tempLastGameQuestionIds.includes(q.id));
        
        shuffleArray(availableNewInUnit);
        questionsForThisUnit = availableNewInUnit.slice(0, MIN_QUESTIONS_PER_UNIT);
        
        const remainingNeededInUnit = MIN_QUESTIONS_PER_UNIT - questionsForThisUnit.length;
        if (remainingNeededInUnit > 0) {
            let availableOldInUnit = unitSpecificQuestions.filter(q => tempLastGameQuestionIds.includes(q.id) && !questionsForThisUnit.find(sq => sq.id === q.id));
            shuffleArray(availableOldInUnit);
            questionsForThisUnit = questionsForThisUnit.concat(availableOldInUnit.slice(0, remainingNeededInUnit));
        }
         questionsForThisUnit.forEach(q => { // Evitar duplicados al añadir
            if (!selectedQuestions.find(sq => sq.id === q.id)) {
                selectedQuestions.push(q);
            }
        });
    }
    
    let questionsToComplete = QUESTIONS_PER_GAME - selectedQuestions.length;

    if (questionsToComplete > 0) {
        let remainingPool = allQuestions.filter(q => !selectedQuestions.find(sq => sq.id === q.id));
        
        let newRemainingPool = remainingPool.filter(q => !tempLastGameQuestionIds.includes(q.id));
        shuffleArray(newRemainingPool);
        
        const takeFromNew = Math.min(questionsToComplete, newRemainingPool.length);
        newRemainingPool.slice(0, takeFromNew).forEach(q => { // Evitar duplicados
             if (!selectedQuestions.find(sq => sq.id === q.id)) {
                selectedQuestions.push(q);
            }
        });
        questionsToComplete = QUESTIONS_PER_GAME - selectedQuestions.length; // Recalcular

        if (questionsToComplete > 0) {
            let oldRemainingPool = remainingPool.filter(q => tempLastGameQuestionIds.includes(q.id) && !selectedQuestions.find(sq => sq.id === q.id));
            shuffleArray(oldRemainingPool);
             oldRemainingPool.slice(0, questionsToComplete).forEach(q => { // Evitar duplicados
                 if (!selectedQuestions.find(sq => sq.id === q.id)) {
                    selectedQuestions.push(q);
                }
            });
        }
    }
    
    if (selectedQuestions.length < MIN_TOTAL_QUESTIONS_TO_START && selectedQuestions.length > 0) { 
        if(errorMessageStart) errorMessageStart.textContent = `Error: No se pudieron seleccionar suficientes preguntas variadas para una partida completa de ${QUESTIONS_PER_GAME} (solo ${selectedQuestions.length} seleccionadas). Se necesitan al menos ${MIN_TOTAL_QUESTIONS_TO_START} para jugar.`;
        if(startGameBtn) startGameBtn.disabled = true;
        console.error("Insuficientes preguntas seleccionadas para la partida.");
        return [];
    } else if (selectedQuestions.length < QUESTIONS_PER_GAME) {
         console.warn(`Se seleccionaron ${selectedQuestions.length} preguntas, menos que las ${QUESTIONS_PER_GAME} deseadas, pero suficientes para jugar.`);
    }
    
    shuffleArray(selectedQuestions);
    
    currentQuestions = selectedQuestions.slice(0, QUESTIONS_PER_GAME); 
    
    lastGameQuestionIds = currentQuestions.map(q => q.id); 

    if(errorMessageStart) errorMessageStart.textContent = ""; 
    if(startGameBtn) startGameBtn.disabled = false;
    return currentQuestions;
}


// --- LÓGICA DE VISUALIZACIÓN Y JUEGO ---

function displayQuestion() {
    if (!gameScreen || currentQuestionIndex >= currentQuestions.length) { // Añadida comprobación de gameScreen
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    if (!questionTextElem || !questionCounter || !optionsContainer || !feedbackContainer || !nextQuestionBtn) { // Comprobaciones de elementos
        console.error("Faltan elementos del DOM para mostrar la pregunta.");
        return;
    }

    questionTextElem.textContent = question.questionText;
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    
    optionsContainer.innerHTML = ''; 
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn bg-white p-4 rounded-lg shadow-md text-slate-700 hover:bg-slate-100 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-150 ease-in-out w-full text-left border border-slate-300 hover:border-sky-400';
        button.textContent = option;
        button.dataset.index = index; // Asegurar que el índice se guarda como string
        button.addEventListener('click', handleAnswer);
        optionsContainer.appendChild(button);
    });

    feedbackContainer.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
}

function handleAnswer(event) {
    const selectedOptionButton = event.target.closest('.option-btn'); // Asegurar que se obtiene el botón
    if (!selectedOptionButton) return;

    const selectedAnswerIndex = parseInt(selectedOptionButton.dataset.index);
    const question = currentQuestions[currentQuestionIndex];

    if (!question || typeof question.correctAnswerIndex === 'undefined') { // Comprobación de pregunta
        console.error("Error: Pregunta actual o respuesta correcta no definida.", question);
        return;
    }

    // Deshabilitar todos los botones de opción
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        // Quitar clases de hover para que no interfieran con los colores de feedback
        btn.classList.remove('hover:bg-slate-100', 'hover:border-sky-400');
        btn.classList.add('disabled'); 
    });

    feedbackContainer.classList.remove('hidden', 'correct', 'incorrect'); 
    
    if (selectedAnswerIndex === question.correctAnswerIndex) {
        score++;
        selectedOptionButton.classList.remove('bg-white', 'border-slate-300', 'text-slate-700'); // Quitar clases base
        selectedOptionButton.classList.add('correct'); // Aplicar clase de CSS para verde
        feedbackTextElem.textContent = "¡Respuesta Correcta!";
        feedbackContainer.classList.add('correct');
    } else {
        mistakes++;
        selectedOptionButton.classList.remove('bg-white', 'border-slate-300', 'text-slate-700'); // Quitar clases base
        selectedOptionButton.classList.add('incorrect'); // Aplicar clase de CSS para rojo
        
        const correctButton = optionsContainer.children[question.correctAnswerIndex];
        if (correctButton) {
            correctButton.classList.remove('bg-white', 'border-slate-300', 'text-slate-700'); // Quitar clases base
            correctButton.classList.add('correct'); // Aplicar clase de CSS para verde
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
    currentQuestions = selectGameQuestions(); 

    if (currentQuestions.length === 0) {
        console.error("No se pudo iniciar el juego porque no se seleccionaron preguntas.");
        return; 
    }
    
    currentQuestionIndex = 0;
    score = 0;
    mistakes = 0;
    
    if (!scoreCounter || !startScreen || !endScreen || !gameScreen) { // Comprobación de elementos
        console.error("Faltan elementos del DOM para iniciar el juego.");
        return;
    }
    scoreCounter.textContent = `Aciertos: 0 | Fallos: 0`;
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    displayQuestion();
}

function endGame() {
    if (!gameScreen || !endScreen || !document.getElementById('final-score') || !document.getElementById('final-mistakes')) { // Comprobación
        console.error("Faltan elementos del DOM para finalizar el juego.");
        return;
    }
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    document.getElementById('final-score').textContent = `Aciertos: ${score}`;
    document.getElementById('final-mistakes').textContent = `Fallos: ${mistakes}`;
}

function playAgain() {
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
    
    loadAllQuestions(); 
    
    const initialCheckQuestions = selectGameQuestions(); 
    if (initialCheckQuestions.length === 0 && allQuestions.length > 0) {
        if(startGameBtn) startGameBtn.disabled = true;
    } else if (allQuestions.length === 0) {
         if(errorMessageStart) errorMessageStart.textContent = "No se han podido cargar los bancos de preguntas. Revisa la consola para más detalles.";
         if(startGameBtn) startGameBtn.disabled = true;
    } else {
        if(startGameBtn) startGameBtn.disabled = false; 
    }

    if(startGameBtn) startGameBtn.addEventListener('click', startGame);
    if(nextQuestionBtn) nextQuestionBtn.addEventListener('click', showNextQuestion);
    if(playAgainBtn) playAgainBtn.addEventListener('click', playAgain);

    console.log("Trivia de Replanteos inicializada y lista.");
});
