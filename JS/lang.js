const translations = {
  pt: {
    nav: {
      home: "Início",
      company: "Empresa",
      training: "Treinamentos",
      videos: "Vídeos",
      events: "Eventos e Feiras",
      partners: "Parceiros",
    },
    title: "Tecnologia que Protege seu Grão",
    subtitle:
      "Preserve a qualidade e o valor da sua safra com a nossa tecnologia",
    button: "Conheça nossos produtos",
    footer1: "Todos os direitos reservados.",
    footer2: "Desenvolvido por Pedro Emilio Martinelli",
    footerLinks: [
      "Política de Privacidade",
      "Termos de Uso",
      "Contato",
      "Trabalhe Conosco",
    ],
  },
  en: {
    nav: {
      home: "Home",
      company: "About Us",
      training: "Training",
      videos: "Videos",
      events: "Events & Fairs",
      partners: "Partners",
    },
    title: "Technology that Protects Your Grain",
    subtitle:
      "Keep your harvest’s quality and value with our advanced technology",
    button: "Explore our products",
    footer1: "All rights reserved.",
    footer2: "Developed by Pedro Emilio Martinelli",
    footerLinks: ["Privacy Policy", "Terms of Use", "Contact", "Careers"],
  },
  es: {
    nav: {
      home: "Inicio",
      company: "Nosotros",
      training: "Capacitaciones",
      videos: "Videos",
      events: "Eventos y Ferias",
      partners: "Socios",
    },
    title: "Tecnología que Protege su Grano",
    subtitle:
      "Mantenga la calidad y el valor de su cosecha con nuestra tecnología avanzada",
    button: "Conozca nuestros productos",
    footer1: "Todos los derechos reservados.",
    footer2: "Desarrollado por Pedro Emilio Martinelli",
    footerLinks: [
      "Política de Privacidad",
      "Términos de Uso",
      "Contacto",
      "Trabaja con Nosotros",
    ],
  },
};

const switcher = document.getElementById("lang-switcher");

switcher.addEventListener("change", () => {
  const lang = switcher.value;

  // Header
  document.querySelector(".nav-home").textContent = translations[lang].nav.home;
  document.querySelector(".nav-company").textContent =
    translations[lang].nav.company;
  document.querySelector(".nav-training").textContent =
    translations[lang].nav.training;
  document.querySelector(".nav-videos").textContent =
    translations[lang].nav.videos;
  document.querySelector(".nav-events").textContent =
    translations[lang].nav.events;
  document.querySelector(".nav-partners").textContent =
    translations[lang].nav.partners;

  // Main
  document.querySelector(".HomeText").textContent = translations[lang].title;
  document.querySelector(".subtitle").textContent = translations[lang].subtitle;
  document.querySelector(".botaoBotao").textContent = translations[lang].button;

  // Footer
  document.querySelector(
    ".footer-content p:first-child"
  ).innerHTML = `&copy; 2025 QualyAgro - ${translations[lang].footer1}`;
  document.querySelector(".footer-content p:nth-child(2)").textContent =
    translations[lang].footer2;

  const footerLinks = document.querySelectorAll(".footer-links a");
  footerLinks.forEach((link, index) => {
    link.textContent = translations[lang].footerLinks[index];
  });
});
