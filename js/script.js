let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// MENU MOBILE
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// 🌍 TRADUÇÕES
const translations = {
    pt: {
        hello: "Olá, Me chamo",
        role: "Sou Desenvolvedor Full-Stack",
        home: "Página Inicial",
        about: "Sobre",
        projects: "Projetos",
        portfolio: "Portfólio",
        contact: "Contato",

        aboutTitle: "Sobre Mim",
        aboutRole: "Desenvolvedor Full Stack",
        aboutText: "Desenvolvedor Full Stack em formação, estudante de Ciência da Computação (conclusão em 2026). Experiência prática com JavaScript, Node.js, SQL e Python, atuando na criação de APIs REST, integração com banco de dados e desenvolvimento de aplicações completas (backend e frontend).",

        stack: "Stack",
        back: "Back-end",
        design: "Design Gráfico",
        marketing: "Marketing Digital",

        recentProjects: "Projetos Recentes",
        contactTitle: "Entre em Contato!",

        name: "Nome completo",
        email: "Endereço de E-mail",
        phone: "Número do Celular",
        subject: "Assunto",
        message: "Sua mensagem",
        send: "Enviar"
    },

    en: {
        hello: "Hello, my name is",
        role: "I am a Full-Stack Developer",
        home: "Home",
        about: "About",
        projects: "Projects",
        portfolio: "Portfolio",
        contact: "Contact",

        aboutTitle: "About Me",
        aboutRole: "Full Stack Developer",
        aboutText: "Full Stack Developer in training, Computer Science student (graduating in 2026). Experience with JavaScript, Node.js, SQL and Python, building REST APIs, database integration and full-stack applications.",

        stack: "Stack",
        back: "Back-end",
        design: "Graphic Design",
        marketing: "Digital Marketing",

        recentProjects: "Recent Projects",
        contactTitle: "Get in Touch!",

        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Subject",
        message: "Your message",
        send: "Send message"
    }
};

// 🔄 TROCAR IDIOMA
function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        const text = translations[lang][key];

        if (!text) return;

        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.setAttribute("placeholder", text);
        } else {
            el.textContent = text;
        }
    });

    localStorage.setItem('lang', lang);
}

// 🔁 CARREGAR IDIOMA
window.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem('lang') || 'pt';
    setLanguage(lang);
});

// 📌 SCROLL ATIVO NO MENU
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // HEADER FIXO
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // FECHAR MENU MOBILE
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};