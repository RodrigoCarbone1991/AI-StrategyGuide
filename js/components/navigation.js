/**
 * Navigation Module
 * Handles sidebar navigation between chapters.
 */

export function nav(sectionId) {
    document.querySelectorAll('main > section').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('flex-col');
    });

    document.querySelectorAll('#nav-menu button').forEach(el => {
        el.classList.remove('nav-active', 'bg-slate-800', 'border-emerald-400', 'text-emerald-400');
        el.classList.add('text-slate-400', 'border-transparent');
        if (el.id === 'btn-cap6') el.classList.add('text-emerald-300');
    });

    const target = document.getElementById(sectionId);
    target.classList.remove('hidden');
    if (sectionId === 'cap6') target.classList.add('flex-col');

    const activeBtn = document.getElementById('btn-' + sectionId);
    activeBtn.classList.remove('text-slate-400', 'border-transparent');
    activeBtn.classList.add('nav-active', 'bg-slate-800', 'border-emerald-400', 'text-emerald-400');
}
