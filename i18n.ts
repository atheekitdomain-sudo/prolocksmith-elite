import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.products": "Products",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "hero.title": "Locked Out?",
      "hero.subtitle": "We'll Be There in 20 Mins.",
      "hero.desc": "Professional automotive, residential, and commercial locksmith services. Car key programming specialists.",
      "cta.call": " Now: +94 77 438 0935",
      "cta.services": "View Services",
      "trust.response": "20 Min Response",
      "trust.licensed": "Licensed & Insured",
      "trust.rated": "5-Star Rated",
      "trust.guarantee": "Satisfaction Guaranteed"
    }
  },
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.products": "Productos",
      "nav.gallery": "Galería",
      "nav.contact": "Contacto",
      "hero.title": "¿Bloqueado?",
      "hero.subtitle": "Llegamos en 20 Minutos.",
      "hero.desc": "Servicios profesionales de cerrajería automotriz, residencial y comercial. Especialistas en programación de llaves de auto.",
      "cta.": "Llamar: +94 77 438 0935",
      "cta.services": "Ver Servicios",
      "trust.response": "Respuesta en 20 min",
      "trust.licensed": "Licenciado y Asegurado",
      "trust.rated": "Calificación 5 Estrellas",
      "trust.guarantee": "Satisfacción Garantizada"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
