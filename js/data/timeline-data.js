/**
 * Timeline Data - Capítulo 2: Viaje en el Tiempo
 * Cronología evolutiva de la Inteligencia Artificial.
 */
const timelineData = [
    {
        era: "Precedentes Ficticios", year: "1726", title: "Gulliver's Travels",
        desc: "Jonathan Swift satiriza la ciencia imaginando 'El Motor': una máquina de madera que combinaba palabras al azar para generar libros.",
        insight: "Swift imaginó la 'creatividad' como un ejercicio de permutaciones estadísticas. Hoy, los Modelos de Lenguaje operan bajo la misma premisa: calculan la probabilidad de la siguiente palabra."
    },
    {
        era: "Máquinas Físicas", year: "1914", title: "El Ajedrecista",
        desc: "El ingeniero español Leonardo Torres y Quevedo presenta un autómata capaz de jugar ajedrez (Rey y Torre contra Rey) usando electroimanes.",
        insight: "Mito derribado: La automatización de la lógica no requirió microchips ni código de software. Nació mucho antes."
    },
    {
        era: "Términos", year: "1921", title: "La invención del 'Robot'",
        desc: "Karel Čapek estrena la obra 'R.U.R.'. Introduce mundialmente el término 'robot', derivado del checo 'robota' (trabajo forzado).",
        insight: "Etiquetar a los sistemas autónomos como 'esclavos' de trabajo forzado sigue moldeando el miedo y la tensión laboral en la adopción empresarial."
    },
    {
        era: "Lógica", year: "1943", title: "Redes Neuronales Teóricas",
        desc: "McCulloch y Pitts publican un modelo matemático innovador sobre cómo podrían computar las neuronas del cerebro.",
        insight: "La teoría pura se adelantó décadas. La arquitectura esencial del 'Deep Learning' de hoy se escribió en una pizarra hace más de 80 años."
    },
    {
        era: "Lógica", year: "1950", title: "Test de Turing",
        desc: "Alan Turing propone un experimento para evaluar si una máquina puede exhibir un comportamiento indistinguible del de un humano.",
        insight: "Turing nos dio un marco pragmático: en los negocios importan los resultados observables, no el debate filosófico sobre si el software 'siente'."
    },
    {
        era: "Bautizo", year: "1955", title: "Acuñación del término 'IA'",
        desc: "John McCarthy usa el término 'Inteligencia Artificial' por primera vez en la propuesta de la Conferencia de Dartmouth.",
        insight: "Bautizar el campo como 'Inteligencia' fue un éxito de marketing, pero generó la expectativa destructiva de crear mentes humanas de inmediato."
    },
    {
        era: "Inviernos", year: "1969-1993", title: "Backpropagation y los Inviernos",
        desc: "Se refina cómo aprenden las redes neuronales. Simultáneamente, el campo colapsa financieramente en dos brutales 'Inviernos' al no poder entregar ROI.",
        insight: "La innovación científica sobrevive, pero el mercado castiga el 'hype'. Advertencia: si la tecnología no aporta valor real, la inversión desaparece."
    },
    {
        era: "Datos", year: "1997", title: "Deep Blue",
        desc: "La supercomputadora Deep Blue hace historia al derrotar al campeón mundial de ajedrez Garry Kasparov en un torneo.",
        insight: "La fuerza bruta de la computación sobrepasó al análisis intuitivo humano en sistemas con reglas cerradas."
    },
    {
        era: "Deep Learning", year: "2012", title: "El momento AlexNet",
        desc: "Una red neuronal destruye a la competencia en reconocimiento visual. ¿El secreto? Entrenarla usando tarjetas gráficas (GPUs).",
        insight: "El Big Bang moderno. Matemáticas antiguas + Big Data + Hardware GPU barato = La revolución actual."
    },
    {
        era: "Generativa", year: "2017", title: "Transformers",
        desc: "Se propone el mecanismo de 'Atención'. En lugar de procesar datos secuencialmente, la red procesa toda la frase en paralelo.",
        insight: "El motor de combustión moderno. Eliminó el cuello de botella de la memoria, dando a luz a todos los modelos generativos (LLMs)."
    },
    {
        era: "Agéntica", year: "2020-2026", title: "Agentes Autónomos",
        desc: "El mercado se satura de asombro por el texto de los LLMs. La industria pivotea hacia Agentes capaces de utilizar herramientas y tomar acciones.",
        insight: "La IA dejó de ser un oráculo pasivo al que se le hacen preguntas, para convertirse en un motor que ejecuta flujos de trabajo completos."
    }
];

export default timelineData;
