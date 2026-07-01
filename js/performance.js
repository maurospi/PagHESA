(function () {
  const doc = document;
  const win = window;
  const root = doc.documentElement;

  if (!('IntersectionObserver' in win)) {
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }

      const target = entry.target;
      if (target.getAttribute('data-src')) {
        target.src = target.getAttribute('data-src');
        target.removeAttribute('data-src');
      }
      if (target.getAttribute('data-srcset')) {
        target.srcset = target.getAttribute('data-srcset');
        target.removeAttribute('data-srcset');
      }
      if (target.tagName === 'SOURCE' && target.getAttribute('data-src')) {
        target.src = target.getAttribute('data-src');
        target.removeAttribute('data-src');
      }
      observer.unobserve(target);
    });
  }, { rootMargin: '240px 0px' });

  function connectObserver() {
    doc.querySelectorAll('img[data-src], iframe[data-src], video[data-src], source[data-src]').forEach(function (el) {
      observer.observe(el);
    });
  }

  if ('requestIdleCallback' in win) {
    win.requestIdleCallback(connectObserver, { timeout: 1000 });
  } else {
    win.setTimeout(connectObserver, 250);
  }

  const reduceMotion = win.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) {
    root.classList.add('reduce-motion');
  }
})();
