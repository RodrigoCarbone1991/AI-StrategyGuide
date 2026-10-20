# 🧠 Entendiendo la Inteligencia Artificial — Guía para todos

> Guía interactiva en español para entender qué es la IA, cómo funciona por dentro y cómo usarla bien. Pensada para público general, sin conocimientos técnicos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📖 Descripción

Recorrido de **8 capítulos** para cualquier persona que usa o va a usar IA: empleados que recién empiezan con ChatGPT o Claude, estudiantes y curiosos. Explica el mecanismo con laboratorios interactivos y siempre cierra con lo práctico: *¿qué cambia esto en cómo uso la herramienta mañana?*

Toda cifra y todo caso real de la guía tienen fuente visible. Los ejemplos inventados con fines didácticos están rotulados como **Escenario ilustrativo**.

### Capítulos

| # | Capítulo | Contenido |
|---|----------|-----------|
| 1 | **La IA hoy** | Qué es (y qué no es) la IA, el colapso del costo con datos verificados, los 3 catalizadores |
| 2 | **Historia y evolución** | Línea de tiempo interactiva de 19 hitos (1726–2026) y el ciclo entusiasmo-invierno-avance |
| 3 | **El cerebro: cómo funciona un modelo de lenguaje** | Muñecas rusas, paradigmas de aprendizaje, las 3 etapas de entrenamiento de un asistente, tokens y Transformer |
| 4 | **¿Qué pasa cuando apretás Enter?** | La app y el modelo, el viaje de un mensaje en 9 pasos, qué hay en el paquete, memoria, herramientas y MCP |
| 5 | **Hablarle bien: cómo el modelo lee tu prompt** | Qué produce un prompt adentro del modelo, por qué la forma de pedir importa, técnicas, prompt design vs. engineering |
| 6 | **Usarla bien: RAG, skills y agentes** | Usar / ajustar / entrenar, RAG, skills, agentes y cuándo usar cada cosa |
| 7 | **Riesgos y uso responsable** | Fuga de datos, sesgo, agencia excesiva, alucinaciones, prompt injection, propiedad intelectual y checklist |
| 8 | **Recursos y autoevaluación** | Reglas prácticas, quiz de 8 situaciones, cursos y lecturas |

---

## 🚀 Inicio rápido

No requiere instalación, build ni servidor:

```bash
# Clonar el repositorio
git clone https://github.com/RodrigoCarbone1991/AI-StrategyGuide.git

# Abrir en el navegador (doble clic en index.html, o:)
start index.html    # Windows
open index.html     # macOS
xdg-open index.html # Linux
```

> También disponible en línea vía **GitHub Pages**: `https://rodrigocarbone1991.github.io/AI-StrategyGuide/`

> **Requisito:** conexión a internet para cargar Tailwind CSS y Chart.js desde CDN.

---

## 📁 Estructura del proyecto

```
AI-StrategyGuide/
├── index.html   # La guía completa: HTML, estilos y JavaScript inline (archivo único)
├── img/         # Portadas de libros y cursos del Capítulo 8
├── .gitignore
├── LICENSE
└── README.md
```

El sitio es **un solo archivo autocontenido** a propósito: así abre con doble clic, sin servidor. Todo el JavaScript (navegación, gráfico, línea de tiempo, laboratorios, stepper, quiz y tooltips) está en el bloque `<script>` al final de `index.html`.

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura del contenido |
| **Tailwind CSS** (CDN) | Diseño y utilidades responsive |
| **Chart.js** (CDN) | Gráfico de costos del Capítulo 1 |
| **JavaScript inline** | Navegación, laboratorios interactivos, quiz y tooltips |

### Convenciones

- **Paleta:** `slate-900` (sidebar), `emerald-*` (acentos), `red-*` (riesgos), `purple-*` (mecanismo interno)
- **Paneles:** clase `glass-panel` para tarjetas; `guru-quote` para la cita de apertura de cada capítulo
- **Idioma:** español rioplatense con voseo ("probalo", "fijate"); "costo", no "coste"
- **Evidencia:** cifras con fuente y año en letra chica; casos rotulados como `Caso real` (con fuente) o `Escenario ilustrativo`
- **Cierre práctico:** los bloques técnicos terminan con un recuadro **"¿Y esto qué me cambia?"**

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si querés mejorar el contenido, agregar un capítulo o corregir información:

1. Hacé fork del repositorio
2. Creá una rama (`git checkout -b feature/mejora-capitulo-3`)
3. Hacé tus cambios y el commit (`git commit -m 'Mejora contenido Cap 3'`)
4. Subí tu rama (`git push origin feature/mejora-capitulo-3`)
5. Abrí un Pull Request

Si agregás una cifra o un caso real, incluí la fuente.
