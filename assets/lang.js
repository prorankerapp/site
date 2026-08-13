/**
 * EN/EL toggle via ?lang=el or ?lang=en — no cookies, no localStorage.
 */
(function () {
  const SUPPORTED = ['en', 'el'];
  const DEFAULT = 'en';

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q && SUPPORTED.includes(q)) return q;
    return DEFAULT;
  }

  function setLang(lang) {
    const url = new URL(window.location.href);
    if (lang === DEFAULT) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.location.href = url.toString();
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === 'el' ? 'el' : 'en';

    document.querySelectorAll('[lang-block]').forEach((el) => {
      const blockLang = el.getAttribute('lang-block');
      el.classList.toggle('lang-visible', blockLang === lang);
    });

    document.querySelectorAll('.lang-toggle button').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
      btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
    });
  }

  function init() {
    const lang = getLang();
    applyLang(lang);

    document.querySelectorAll('.lang-toggle button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-lang');
        if (target && SUPPORTED.includes(target)) {
          setLang(target);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
