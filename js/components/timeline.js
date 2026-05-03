/**
 * Timeline Module - Capítulo 2
 * Builds and controls the interactive AI history timeline.
 */

import timelineData from '../data/timeline-data.js';

export function buildTimeline() {
    const list = document.getElementById('timeline-list');
    timelineData.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <button class="w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-center gap-4 group" data-index="${index}">
                <span class="font-black text-slate-800 w-16 text-right group-hover:text-emerald-600 transition-colors">${item.year}</span>
                <span class="text-slate-600 font-medium truncate text-sm md:text-base">${item.title}</span>
            </button>`;
        list.appendChild(li);
    });

    // Delegate click events
    list.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-index]');
        if (!btn) return;
        selectTimeline(parseInt(btn.dataset.index), btn);
    });
}

export function selectTimeline(index, btnEl) {
    document.querySelectorAll('#timeline-list button').forEach(el =>
        el.classList.remove('bg-emerald-50', 'border-l-4', 'border-emerald-500')
    );
    btnEl.classList.add('bg-emerald-50', 'border-l-4', 'border-emerald-500');

    const item = timelineData[index];
    document.getElementById('timeline-detail').innerHTML = `
        <div class="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-600 border-b border-emerald-100 pb-2 inline-block">${item.era}</div>
        <div class="text-slate-400 font-black text-3xl mb-1">${item.year}</div>
        <h3 class="text-3xl font-bold text-slate-900 mb-4">${item.title}</h3>
        <p class="text-lg text-slate-700 leading-relaxed mb-6">${item.desc}</p>
        <div class="bg-slate-50 p-5 rounded-lg border border-slate-200 border-l-4 border-l-slate-700 mt-auto shadow-sm">
            <strong class="text-slate-900 block mb-2 text-sm uppercase tracking-wider">💡 Lección Estratégica</strong>
            <span class="text-slate-600 text-sm font-medium leading-relaxed">${item.insight}</span>
        </div>`;
}
