/**
 * Machine Learning Paradigms Data - Capítulo 3: La Caja Negra
 * Paradigmas de aprendizaje automático (tabs).
 */
const mlData = [
    {
        id: 'sup',
        label: 'Ap. Supervisado',
        content: `<b>La Metáfora del Maestro:</b> Tienes un millón de radiografías. Un médico humano las etiquetó como "Sana" o "Tumor". La máquina procesa los datos y predice; si falla, ajusta matemáticamente sus parámetros para acercarse a la etiqueta correcta.<br><br><span class="inline-block bg-slate-100 px-2 py-1 mt-3 rounded border border-slate-200 text-sm font-semibold">Uso Empresarial:</span> Predicción de fuga de clientes, Scoring crediticio.`
    },
    {
        id: 'unsup',
        label: 'Ap. No Supervisado',
        content: `<b>La Metáfora del Detective:</b> Le entregamos a la máquina millones de transacciones de tarjetas <b>sin ninguna etiqueta</b>. Debe encontrar la estructura oculta en el caos por sí sola, agrupando (clustering) matemáticamente lo que se parece.<br><br><span class="inline-block bg-slate-100 px-2 py-1 mt-3 rounded border border-slate-200 text-sm font-semibold">Uso Empresarial:</span> Segmentación profunda de mercado, Detección de anomalías en redes.`
    },
    {
        id: 'rein',
        label: 'Ap. por Refuerzo',
        content: `<b>La Metáfora del Videojuego:</b> Soltamos a la máquina en un entorno. Si toma una buena decisión recibe recompensa (+1); si falla, castigo (-100). Maximiza la recompensa a base de ensayo y error masivo.<br><br><span class="inline-block bg-slate-100 px-2 py-1 mt-3 rounded border border-slate-200 text-sm font-semibold">Uso Empresarial:</span> Robótica industrial (navegación), Trading algorítmico y afinación de respuestas en LLMs (RLHF).`
    },
    {
        id: 'self',
        label: 'Ap. Auto-Supervisado',
        content: `<b>La Metáfora de Completar la Frase:</b> Toma millones de textos de internet. El sistema oculta una palabra ("El perro persigue al ___") y se fuerza a predecirla. Como tiene el texto completo original, se califica a sí mismo. Esto eliminó el cuello de botella humano.<br><br><span class="inline-block bg-slate-100 px-2 py-1 mt-3 rounded border border-slate-200 text-sm font-semibold">Uso Empresarial:</span> Es el entrenamiento base matemático que da vida a los Grandes Modelos de Lenguaje (LLMs).`
    }
];

export default mlData;
