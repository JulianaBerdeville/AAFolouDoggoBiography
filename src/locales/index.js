import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import fr from './fr';
import es from './es';
import ptBr from './ptBr';

Vue.use(VueI18n);

const messages = {
  en: en,
  es: es,
  fr: fr,
  ptBr: ptBr,
};

// Create VueI18n instance with options
export default new VueI18n({
  locale: localStorage.getItem("lang"), // set locale
  messages, // set locale messages
});
