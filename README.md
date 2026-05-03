# 🧠 Entendiendo la Inteligencia Artificial — Guía Estratégica

> Guía interactiva en español para capacitar a perfiles no técnicos sobre Inteligencia Artificial, desde los fundamentos hasta la implementación empresarial.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📖 Descripción

Presentación web interactiva diseñada como un viaje narrativo de **6 capítulos** que desmitifica la IA para audiencias ejecutivas y no técnicas. Agnóstica de marcas y modelos, se enfoca en los conceptos fundamentales, la historia, los mecanismos internos y las implicaciones estratégicas.

### Capítulos

| # | Capítulo | Contenido |
|---|----------|-----------|
| 1 | **La IA Hoy** | Desmitificación + colapso del coste + los 3 catalizadores |
| 2 | **Historia y Evolución** | Línea de tiempo interactiva (1726–2026) con patrón hype-invierno-revolución |
| 3 | **Cómo Funciona la IA** | Taxonomía (muñecas rusas), paradigmas de aprendizaje, anatomía del LLM, tokenización interactiva, Transformer en 3D |
| 4 | **Implementación Práctica** | Arquitectura empresarial: RAG y Agentes de IA |
| 5 | **Riesgos y Gobernanza** | Fuga de datos, sesgo algorítmico, alucinaciones, agencia excesiva, checklist |
| 6 | **Recursos** | Quiz socrático interactivo + biblioteca de recursos recomendados |

---

## 🚀 Inicio Rápido

No requiere instalación, build system ni servidor. Simplemente:

```bash
# Clona el repositorio
git clone https://github.com/TU-USUARIO/ai-guia-estrategica.git

# Abre en el navegador
start IA-GuiaEstrategica.html    # Windows
open IA-GuiaEstrategica.html     # macOS
xdg-open IA-GuiaEstrategica.html # Linux
```

> **Requisito:** Conexión a internet para cargar Tailwind CSS y Chart.js desde CDN.

---

## 📁 Estructura del Proyecto

```
ai-guia-estrategica/
├── IA-GuiaEstrategica.html  # Presentación principal (archivo único autocontenido)
├── css/
│   └── main.css             # Estilos personalizados complementarios
├── js/
│   ├── app.js               # Inicialización de la aplicación
│   ├── components/
│   │   ├── cost-chart.js    # Gráfico de colapso de costes (Chart.js)
│   │   ├── ml-tabs.js       # Tabs de paradigmas de ML
│   │   ├── navigation.js    # Navegación entre capítulos
│   │   ├── quiz.js          # Motor del quiz socrático
│   │   └── timeline.js      # Línea de tiempo histórica interactiva
│   └── data/
│       ├── ml-data.js       # Datos de paradigmas de aprendizaje
│       ├── quiz-data.js     # Escenarios y respuestas del quiz
│       └── timeline-data.js # Datos históricos de la línea de tiempo
├── img/                     # Recursos gráficos (portadas de libros, cursos)
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica del contenido |
| **Tailwind CSS** (CDN) | Sistema de diseño y utilidades responsive |
| **Chart.js** (CDN) | Gráfico interactivo de costes |
| **JavaScript (ES6+)** | Lógica de navegación, quiz, timeline y componentes |

### Convenciones de Diseño

- **Paleta de colores:** `slate-900` (sidebar), `emerald-*` (acentos), `red-*` (riesgos)
- **Paneles:** Clase `glass-panel` para cards con bordes suaves y sombras
- **Citas:** Clase `guru-quote` para frases contextuales de apertura
- **Contenido:** Todo en **español**, dirigido a audiencias ejecutivas

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el contenido, agregar un capítulo o corregir información:

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feature/mejora-capitulo-3`)
3. Realiza tus cambios y haz commit (`git commit -m 'Mejora contenido Cap 3'`)
4. Push a tu rama (`git push origin feature/mejora-capitulo-3`)
5. Abre un Pull Request
