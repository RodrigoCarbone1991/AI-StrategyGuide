/**
 * Quiz Module - Capítulo 6: El Reto Socrático
 * Interactive decision-making quiz engine.
 */

import quizScenarios from '../data/quiz-data.js';

let currentQuizIndex = 0;

export function loadQuizScenario() {
    const chatArea = document.getElementById('quiz-chat-area');
    const optionsArea = document.getElementById('quiz-options-area');

    if (currentQuizIndex >= quizScenarios.length) {
        chatArea.innerHTML += `
            <div class="flex justify-start fade-in mt-6">
                <div class="bg-slate-800 text-white p-5 md:p-6 rounded-2xl rounded-tl-none max-w-[95%] shadow-lg border-2 border-emerald-500 relative">
                    <strong class="text-emerald-400 block mb-3 font-bold uppercase tracking-wider text-xs">Tu Asesor dice:</strong>
                    <p class="text-base md:text-lg leading-relaxed">Ha completado con éxito la Masterclass, demostrando que posee la brújula conceptual necesaria para liderar la transformación digital en esta década. Ya no está cegado por el marketing tecnológico: comprende el valor innegociable de sus datos, la diferencia crítica entre buscar (RAG) y memorizar (Fine-Tuning), y por qué el gobierno de los Agentes no es un freno, sino el volante que le permite acelerar con seguridad. Excelente trabajo.</p>
                </div>
            </div>`;
        optionsArea.innerHTML = '';
        chatArea.scrollTop = chatArea.scrollHeight;
        return;
    }

    const scenario = quizScenarios[currentQuizIndex];
    chatArea.innerHTML += `
        <div class="flex justify-start fade-in mt-6">
            <div class="bg-white text-slate-800 p-5 md:p-6 rounded-2xl rounded-tl-none max-w-[90%] shadow-sm border border-slate-200">
                <strong class="text-emerald-700 block mb-2 font-bold uppercase tracking-wider text-xs">Decisión Ejecutiva ${currentQuizIndex + 1}:</strong>
                <p class="text-base md:text-[1.05rem] font-medium leading-relaxed">${scenario.question}</p>
            </div>
        </div>`;

    renderOptions(scenario, optionsArea);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function renderOptions(scenario, optionsArea) {
    optionsArea.innerHTML = '';
    scenario.options.forEach((optText, index) => {
        const btn = document.createElement('button');
        btn.className = 'text-left p-3 md:p-4 border border-slate-300 bg-slate-50 rounded-lg hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-900 transition-all font-medium text-slate-700 fade-in text-sm shadow-sm group';
        btn.innerHTML = `<span class="group-hover:translate-x-1 inline-block transition-transform duration-200">${optText}</span>`;
        btn.addEventListener('click', () => processAnswer(index));
        optionsArea.appendChild(btn);
    });
}

function processAnswer(selectedIndex) {
    const scenario = quizScenarios[currentQuizIndex];
    const chatArea = document.getElementById('quiz-chat-area');
    const optionsArea = document.getElementById('quiz-options-area');

    chatArea.innerHTML += `
        <div class="flex justify-end fade-in mt-4">
            <div class="bg-slate-200 text-slate-800 font-medium p-4 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm text-sm border border-slate-300">
                ${scenario.options[selectedIndex]}
            </div>
        </div>`;
    optionsArea.innerHTML = '<div class="p-5 text-center text-slate-500 font-medium text-sm animate-pulse tracking-wide">Analizando el riesgo de tu decisión...</div>';

    setTimeout(() => {
        const isCorrect = selectedIndex === scenario.correct;
        chatArea.innerHTML += `
            <div class="flex justify-start fade-in mt-4 mb-4">
                <div class="${isCorrect ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'} text-slate-800 p-5 md:p-6 rounded-2xl rounded-tl-none max-w-[90%] shadow-sm border">
                    <span class="text-sm md:text-base leading-relaxed block">${scenario.feedback[selectedIndex]}</span>
                </div>
            </div>`;

        if (isCorrect) {
            currentQuizIndex++;
            setTimeout(() => loadQuizScenario(), 2000);
        } else {
            const retryBtn = document.createElement('button');
            retryBtn.className = 'text-center p-3 border-2 border-slate-300 bg-white rounded-lg hover:bg-slate-100 transition-all font-bold text-slate-600 fade-in text-sm shadow-sm uppercase tracking-wider mt-2';
            retryBtn.textContent = '↺ Reevaluar Decisión Estratégica';
            retryBtn.addEventListener('click', () => retryQuestion());
            optionsArea.innerHTML = '';
            optionsArea.appendChild(retryBtn);
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }, 1800);
}

function retryQuestion() {
    const chatArea = document.getElementById('quiz-chat-area');
    chatArea.innerHTML += `
        <div class="flex justify-start fade-in mt-4">
            <div class="bg-slate-100 text-slate-600 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm italic border border-slate-200">
                Evaluemos el riesgo corporativo nuevamente. Escoja otra opción...
            </div>
        </div>`;

    const scenario = quizScenarios[currentQuizIndex];
    const optionsArea = document.getElementById('quiz-options-area');
    renderOptions(scenario, optionsArea);
    chatArea.scrollTop = chatArea.scrollHeight;
}
