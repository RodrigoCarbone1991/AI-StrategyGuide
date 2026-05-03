/**
 * App Entry Point
 * Initializes all modules and wires up navigation.
 */

import { nav } from './components/navigation.js';
import { renderCostChart } from './components/cost-chart.js';
import { buildTimeline } from './components/timeline.js';
import { buildMLTabs } from './components/ml-tabs.js';
import { loadQuizScenario } from './components/quiz.js';

// Expose nav globally for the navigation buttons in HTML
window.nav = function (sectionId) {
    nav(sectionId);
    if (sectionId === 'cap1') renderCostChart();
};

// Initialize application on DOM ready
window.addEventListener('DOMContentLoaded', () => {
    buildTimeline();
    buildMLTabs();

    // Select the first timeline item
    const firstTimelineBtn = document.querySelector('#timeline-list button');
    if (firstTimelineBtn) firstTimelineBtn.click();

    // Navigate to chapter 1 and render its chart
    window.nav('cap1');

    // Load the first quiz scenario
    loadQuizScenario();
});
