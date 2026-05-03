/**
 * Cost Chart Module - Capítulo 1
 * Renders the GPU cost reduction chart using Chart.js.
 */

let chartRendered = false;

export function renderCostChart() {
    if (chartRendered) return;

    const ctx = document.getElementById('costChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2016', '2018', '2020', '2022', '2024', '2026'],
            datasets: [{
                label: 'Coste relativo de Procesamiento (GPUs)',
                data: [100, 60, 25, 8, 2, 0.4],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#047857',
                pointRadius: 5,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { color: '#e2e8f0' } },
                x: { grid: { display: false } }
            }
        }
    });
    chartRendered = true;
}

export function isChartRendered() {
    return chartRendered;
}
