/**
 * ML Tabs Module - Capítulo 3
 * Builds the paradigm tabs for Machine Learning types.
 */

import mlData from '../data/ml-data.js';

export function buildMLTabs() {
    const tabs = document.getElementById('ml-tabs');
    const content = document.getElementById('ml-content');

    mlData.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = `px-4 md:px-6 py-3 text-sm transition-colors whitespace-nowrap border-b-2 font-semibold ${index === 0 ? 'tab-active' : 'border-transparent text-slate-500 hover:bg-slate-100'}`;
        btn.innerText = item.label;
        btn.onclick = (e) => {
            document.querySelectorAll('#ml-tabs button').forEach(b => {
                b.classList.remove('tab-active');
                b.classList.add('border-transparent', 'text-slate-500', 'font-medium');
            });
            e.target.classList.add('tab-active');
            e.target.classList.remove('border-transparent', 'text-slate-500');
            content.innerHTML = `<p class="leading-relaxed text-base">${item.content}</p>`;
        };
        tabs.appendChild(btn);
    });

    content.innerHTML = `<p class="leading-relaxed text-base">${mlData[0].content}</p>`;
}
