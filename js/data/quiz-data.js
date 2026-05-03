/**
 * Quiz Scenarios Data - Capítulo 6: El Reto Socrático
 * Dilemas estratégicos para la evaluación final.
 */
const quizScenarios = [
    {
        question: "Asumes como Director de Tecnología. Tu departamento legal necesita un sistema para consultar el histórico de los contratos firmados en la última década y obtener respuestas exactas. Un proveedor te ofrece 'Hacer un Fine-Tuning de un LLM abierto cada semana con los nuevos PDFs'. Como líder, ¿qué decides?",
        options: [
            "A) 'Adelante. El Fine-Tuning es el procedimiento estándar para inyectar bases de conocimiento corporativas precisas en la memoria de un modelo neuronal.'",
            "B) 'Rechazado. Modificar los pesos de la red constantemente generará Olvido Catastrófico y el modelo alucinará cláusulas. Exijo una arquitectura RAG para consultar el texto en tiempo real.'",
            "C) 'Rechazado. Debemos utilizar Aprendizaje No Supervisado para agrupar los contratos, ya que los abogados no pueden etiquetar todos esos PDFs a mano.'"
        ],
        correct: 1,
        feedback: {
            0: "❌ <b>Incorrecto. Un error estratégico muy costoso.</b> El Fine-Tuning no es una base de datos; sirve para enseñar estilos de redacción o formatos. Forzar a un LLM a memorizar cláusulas legales ajustando sus parámetros matemáticos no solo es lentísimo, sino que el modelo no dudará en inventar (alucinar) información si la probabilidad estadística se lo sugiere.",
            1: "✅ <b>Impecable. Eso es razonamiento de Arquitecto.</b> La Generación Aumentada por Recuperación (RAG) no toca el 'cerebro' del modelo. Convierte los PDFs en vectores de búsqueda. Cuando el abogado pregunta, el sistema extrae el párrafo exacto del contrato y le dice a la IA: 'Usa SOLO este texto para armar tu respuesta'. Es económico, evita la amnesia del modelo y ofrece referencias exactas.",
            2: "❌ <b>Confusión de objetivos.</b> El Aprendizaje No Supervisado (Clustering) le serviría para agrupar los contratos por temáticas afines en carpetas, pero no para crear una interfaz conversacional donde los abogados hagan preguntas en lenguaje natural."
        }
    },
    {
        question: "Superado el problema legal, Recursos Humanos te plantea una crisis. El algoritmo que implementaron el año pasado para pre-seleccionar los currículums de los aspirantes a directivos ha resultado ser estadísticamente discriminatorio contra mujeres altamente cualificadas. El equipo técnico te asegura que 'la matemática de la red neuronal funciona sin fallos técnicos'. ¿Dónde radica el problema real?",
        options: [
            "A) En que se usó un enfoque de IA Tradicional. Para eliminar sesgos en RRHH, es imperativo utilizar IA Generativa moderna.",
            "B) El modelo está sufriendo de Sobreajuste (Alta Varianza). Memorizó los nombres propios de los aspirantes en lugar de centrarse en sus habilidades ejecutivas.",
            "C) Los algoritmos son espejos. Si los datos históricos de contrataciones de la última década (con los que se entrenó la IA) contenían ese sesgo humano, el modelo lo aprendió como una regla de éxito."
        ],
        correct: 2,
        feedback: {
            0: "❌ <b>No caigas en el 'hype'.</b> La IA Generativa no es una cura mágica para el sesgo; de hecho, los Grandes Modelos de Lenguaje (LLMs), entrenados con gran parte del texto de internet, suelen absorber e iterar los peores estereotipos si no están fuertemente alineados y censurados.",
            1: "❌ <b>Un tecnicismo mal aplicado.</b> Aunque el sobreajuste es un problema de generalización (el modelo memoriza ruido), la discriminación sistemática a gran escala no suele ser un error de memorización, sino un reflejo del patrón central que se le enseñó.",
            2: "✅ <b>Exactamente. La dura verdad de los datos.</b> La matemática no tiene malicia ni moral. La IA optimiza su objetivo en función de la verdad fundamental que recibe. Si el historial de tu empresa favoreció a un perfil específico, la red identificará ese sesgo como la 'regla' para el éxito. Debes auditar tus datos, no la matemática."
        }
    },
    {
        question: "El último reto. Quieres modernizar el servicio de atención al cliente. Un proveedor te presenta un 'Agente de IA Autónomo'. Este agente leerá los correos de quejas y <b>tendrá permiso directo en el sistema bancario para ejecutar devoluciones inmediatas a los clientes que lo merezcan, sin pasar por supervisión humana</b>. Considerando las buenas prácticas de Gobierno de IA, ¿cuál es tu diagnóstico?",
        options: [
            "A) Es una arquitectura empresarial moderna y deseable (Agencia Completa), ya que reduce a cero el coste de latencia del call center.",
            "B) Presenta un riesgo crítico de 'Agencia Excesiva'. Un fallo probabilístico podría vaciar cuentas. Debe exigirse una arquitectura 'Human-in-the-loop' (HITL) para el clic de pago final.",
            "C) El único riesgo es la Fuga de Datos (Data Leakage). Siempre que el proveedor garantice que los correos no se usarán para re-entrenar el modelo, el pago autónomo es seguro."
        ],
        correct: 1,
        feedback: {
            0: "❌ <b>Peligroso y potencialmente negligente.</b> Reducir costes operativos nunca debe estar por encima de la seguridad transaccional básica de la empresa. Delegar acciones destructivas (o irreversibles financieramente) a modelos probabilísticos es una bomba de tiempo.",
            1: "✅ <b>La respuesta de un líder seguro.</b> Otorgar poder transaccional irreversible a la IA sin validación es un riesgo de máxima prioridad. La arquitectura correcta: la IA investiga, lee las políticas y prepara la solicitud de reembolso en bandeja; luego, un humano audita la lógica y presiona 'Aprobar'. Velocidad mecánica con responsabilidad humana.",
            2: "❌ <b>Punto ciego de seguridad.</b> La Fuga de Datos es una preocupación real, pero proteger la privacidad de los correos no evita en absoluto el riesgo de que el Agente sufra una 'alucinación' lógica y envíe transferencias millonarias por error a estafadores."
        }
    }
];

export default quizScenarios;
