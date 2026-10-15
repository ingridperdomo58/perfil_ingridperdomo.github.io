/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           " Estudio Ingeniería de Sistemas y actualmente curso el ciclo técnico en Programación Web. Dentro del desarrollo web, me atrae especialmente el backend, área en la que estoy fortaleciendo mis conocimientos en PHP, Java y Laravel. Actualmente estoy desarrollando mi proyecto de grado, una aplicación web para el control y trazabilidad de activos en una distribuidora de gas, que estoy completando como parte de mi proceso de graduación.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Girardot, Colombia",
  "about.labelEmail":     "iperdomo58@itfip.edu.co",
  "about.labelLanguages": "Español",
  "about.valueLanguages": "Español (nativo) · Inglés (A1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Estoy aprendiendo desarrollo web y estoy fortaleciendo mis conocimientos en PHP, Java y Laravel. Actualmente puedo desarrollar aplicaciones web y trabajar con bases de datos y tecnologías web.",
  "edu.2.title": "Tecnico en Sistemas",
  "edu.2.text":  "El mantenimiento preventivo y predictivo a equipos de computo",

  "exp.1.title": "Aplicacion web de Trazabilidad y Control de Activos de Gas Propano en la Distribuidora Distrigas de Girardot",
  "exp.1.text":  "Controlar, administrar y sistematizar el inventario de los cilindros y servicios de la empresa, utilizando herramientas como Visual Studio Code, Laravel y MySQL, junto con lenguajes como HTML, CSS y JavaScript. Como resultado, se desarrolló una aplicación web que permite organizar y consultar la información de los cilindros, mejorar el control del inventario y facilitar la gestión de los procesos de la empresa.",
  "exp.2.title": "[Rol o tipo de proyecto]",
  "exp.2.text":  "[Qué hiciste, con qué herramientas y qué resultado tuvo.]",

  "portfolio.title": "Proyectos",
  "project.1.title": "Control y trazabilidad de activos en distribuidora de gas",
  "project.1.text":  "php, laravel 12, Mysql,html5,css3 y java scrip",
  "project.2.title": "EduKist",
  "project.2.text":  "MIT App Inventor, programación visual por bloques, diseño de interfaces gráficas (UI) y Android.",
  "project.3.title": "Simulador Nequi",
  "project.3.text":  "Php, Javascrip, css y html",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes una idea, un proyecto o una oportunidad laboral? Me encantaría conocerla. ¡Hablemos y hagámosla realidad!",
  "contact.emailLabel":    "iperdomo58@itfip.edu.co",
  "contact.linkedinValue": "www.linkedin.com/in/ingrid-perdomo-395501346",

  "footer.note": "INGRID PERDOMO ACOSTA · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "My academic background has provided me with a foundation in Systems Engineering and Web Programming. I have acquired knowledge of backend technologies, particularly PHP, Java, and Laravel, and have focused my professional interests on software development. As part of my graduation process, I have undertaken a web application project aimed at improving asset management and cylinder traceability in a gas distribution company. Through this experience, I have connected my technical training with the development of practical software solutions.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Girardot, Colombia",
  "about.labelEmail":     "iperdomo58@itfip.edu.co",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (level 1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "I have strengthened my skills in web development, particularly in PHP, Java, and Laravel. I have gained experience in web applications and database management.",
  "edu.2.title": "[Course or certificate]",
  "edu.2.text":  "[What you learned and how you use it.]",

  "exp.1.title": "[Role or type of project]",
  "exp.1.text":  "[What you did, which tools you used, and what the result was.]",
  "exp.2.title": "[Role or type of project]",
  "exp.2.text":  "[What you did, which tools you used, and what the result was.]",

  "portfolio.title": "Projects",
  "project.1.title": "Asset Control and Traceability in a Gas Distribution Company",
  "project.1.text":  "php, laravel 12, Mysql,html5,css3 y java scrip",
  "project.2.title": "EduKists",
  "project.2.text":  "MIT App Inventor, visual block-based programming, graphical user interface (UI) design, and Android development.",
  "project.3.title": "Simulador Nequi",
  "project.3.text":  "Php, Javascrip, css y html",

  "contact.title":         "Contact",
  "contact.intro":         "Have a project or job opportunity in web development? Feel free to contact me!",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "[Your professional profile]",

  "footer.note": "INGRID PERDOMO · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
