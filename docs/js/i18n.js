const translations = {
  pt: {
    metaDescription: 'Página do efeito de Ripples feito com CSS, JavaScript e jQuery',
    'nav.home': 'Início',
    'nav.examples': 'Exemplos',
    'nav.howToUse': 'Como usar',
    'nav.download': 'Download',
    'hero.description': 'Ripple Effect é uma biblioteca JavaScript leve para adicionar efeitos de ripple inspirados no Material Design a elementos do DOM, proporcionando interações visuais simples e personalizáveis.',
    'testButton': 'Teste aqui',
    'examples.title': 'Exemplos',
    'howToUse.title': 'Como usar',
    'howToUse.intro': 'Use as classes abaixo para aplicar o efeito:',
    'table.class': 'Classe',
    'table.effect': 'Efeito',
    'table.mdRipplesDesc': 'Aplica o efeito ao elemento',
    'table.ripplesLightDesc': 'Define a cor do efeito para branco',
    'table.ripplesDarkDesc': 'Define a cor do efeito para preto',
    'howToUse.changeDefaultsTitle': 'Mudando os padrões',
    'howToUse.changeDefaultsBody': 'Selecione a classe <code class="code-snippet">.ripple</code> dentro da classe <code class="code-snippet">.md-ripples</code>. Todos os elementos com a classe <code class="code-snippet">.md-ripples</code> seguirão esse padrão.',
    'howToUse.customClassTitle': 'Classes personalizadas',
    'howToUse.customClassBody': 'Dê um nome à sua classe personalizada e selecione a classe <code class="code-snippet">.ripple</code> dentro dela.',
    'download.title': 'Download',
    'download.npm': 'Baixe com:',
    'download.importJs': 'Importe com:',
    'download.manualTitle': 'Download manual',
    'download.step1': '<span>Acesse o</span> <a class="github-link" href="https://github.com/gabrielfins/ripple-effect" target="_blank" rel="noopener noreferrer"><span>github</span><span class="material-symbols-outlined">arrow_outward</span></a> <span>do projeto</span>',
    'download.step2': 'Baixe a release mais recente',
    'download.step3': 'Adicione o arquivo <code class="code-snippet">ripples.js</code> da pasta <code class="code-snippet">/dist</code> no seu projeto',
    'download.step4': 'Importe o arquivo no seu HTML com:',
    'footer.copyright': 'Criado e mantido por',
    'copyCode.tooltip': 'Copiar código',
    'copyCode.copied': 'Copiado!',
    'langToggle.label': 'EN',
    'langToggle.ariaLabel': 'Switch to English',
  },
  en: {
    metaDescription: 'Material Design ripple effect page made with CSS, JavaScript and jQuery',
    'nav.home': 'Home',
    'nav.examples': 'Examples',
    'nav.howToUse': 'How to use',
    'nav.download': 'Download',
    'hero.description': 'Ripple Effect is a lightweight JavaScript library for adding Material Design-inspired ripple effects to DOM elements, providing simple, customizable visual interactions.',
    'testButton': 'Try it here',
    'examples.title': 'Examples',
    'howToUse.title': 'How to use',
    'howToUse.intro': 'Use the classes below to apply the effect:',
    'table.class': 'Class',
    'table.effect': 'Effect',
    'table.mdRipplesDesc': 'Applies the effect to the element',
    'table.ripplesLightDesc': 'Sets the effect color to white',
    'table.ripplesDarkDesc': 'Sets the effect color to black',
    'howToUse.changeDefaultsTitle': 'Changing the defaults',
    'howToUse.changeDefaultsBody': 'Select the <code class="code-snippet">.ripple</code> class inside the <code class="code-snippet">.md-ripples</code> class. Every element with the <code class="code-snippet">.md-ripples</code> class will follow this pattern.',
    'howToUse.customClassTitle': 'Custom classes',
    'howToUse.customClassBody': 'Give your custom class a name and select the <code class="code-snippet">.ripple</code> class inside it.',
    'download.title': 'Download',
    'download.npm': 'Download with:',
    'download.importJs': 'Import with:',
    'download.manualTitle': 'Manual download',
    'download.step1': '<span>Go to the project\'s</span> <a class="github-link" href="https://github.com/gabrielfins/ripple-effect" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span class="material-symbols-outlined">arrow_outward</span></a>',
    'download.step2': 'Download the latest release',
    'download.step3': 'Add the <code class="code-snippet">ripples.js</code> file from the <code class="code-snippet">/dist</code> folder to your project',
    'download.step4': 'Import the file in your HTML with:',
    'footer.copyright': 'Created and maintained by',
    'copyCode.tooltip': 'Copy code',
    'copyCode.copied': 'Copied!',
    'langToggle.label': 'PT',
    'langToggle.ariaLabel': 'Mudar para português',
  },
};

const STORAGE_KEY = 'lang';
const htmlLang = { pt: 'pt-br', en: 'en' };

function getLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') {
      return saved;
    }
  } catch (e) {
    // localStorage unavailable, fall back to browser/default
  }

  const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
  if (browserLang) {
    return browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  return 'pt';
}

function applyLanguage(lang) {
  const dict = translations[lang];

  document.documentElement.lang = htmlLang[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.getAttribute('data-i18n-attr').split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      if (attr && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', dict.metaDescription);
  }

  const toggle = document.querySelector('.lang-toggle');
  if (toggle) {
    const toggleLabel = toggle.querySelector('.lang-toggle-label');
    if (toggleLabel) {
      toggleLabel.textContent = dict['langToggle.label'];
    } else {
      toggle.textContent = dict['langToggle.label'];
    }
    toggle.setAttribute('aria-label', dict['langToggle.ariaLabel']);
  }

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // localStorage unavailable, language just won't persist
  }
}

window.getCopiedLabel = () => translations[currentLang]['copyCode.copied'];

let currentLang = getLanguage();
applyLanguage(currentLang);

document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyLanguage(currentLang);
});
