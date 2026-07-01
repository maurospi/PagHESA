/* ==========================================
   MODAL / LIGHTBOX - Hablando EnSeñas
   ========================================== */
(function () {
  'use strict';

  function loadExternalScript(src, checkFn, onLoad) {
    if (checkFn && checkFn()) { onLoad && onLoad(); return; }
    var existing = document.querySelector('script[src="' + src + '"]');
    if (existing) {
      existing.addEventListener('load', function () { onLoad && onLoad(); });
      return;
    }
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () { onLoad && onLoad(); };
    document.body.appendChild(s);
  }

  // AHORA DETECTA MUCHAS MÁS PLATAFORMAS AUTOMÁTICAMENTE
  function detectPlatform(url) {
    if (!url) return null;
    if (/instagram\.com/i.test(url)) return 'instagram';
    if (/facebook\.com|fb\.watch/i.test(url)) return 'facebook';
    if (/tiktok\.com/i.test(url)) return 'tiktok';
    if (/twitter\.com|x\.com/i.test(url)) return 'twitter';
    if (/youtube\.com|youtu\.be/i.test(url)) return 'youtube';
    if (/vimeo\.com/i.test(url)) return 'vimeo';
    if (/spotify\.com/i.test(url)) return 'spotify';
    return null;
  }

  function buildModal() {
    const overlay = document.createElement('div');
    overlay.className = 'hesLbx-overlay';
    overlay.id = 'hesLbxOverlay';
    overlay.innerHTML = `
      <div class="hesLbx-box" role="dialog" aria-modal="true" aria-labelledby="hesLbxTitle">
        <button class="hesLbx-close" id="hesLbxClose" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="hesLbx-media" id="hesLbxMedia"></div>
        <div class="hesLbx-body">
          <span class="hesLbx-badge" id="hesLbxBadge">Vista</span>
          <h3 class="hesLbx-title" id="hesLbxTitle"></h3>
          <p class="hesLbx-text" id="hesLbxText"></p>
          
          <div class="hesLbx-actions">
            <a class="hesLbx-link" id="hesLbxLink" href="#" target="_blank" rel="noopener" hidden>
              <span id="hesLbxLinkText">Ver más</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a class="hesLbx-link hesLbx-link-secondary" id="hesLbxLink2" href="#" target="_blank" rel="noopener" hidden>
              <span id="hesLbxLinkText2">Registro</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }

  function getDescription(triggerBtn) {
    if (triggerBtn.dataset.desc) return triggerBtn.dataset.desc;
    const item = triggerBtn.closest('.newworks-item');
    if (!item) return '';
    const descEl = item.querySelector('.newworks-item-desc, .newworks-project-desc');
    return descEl ? descEl.textContent.trim() : '';
  }

  function getBadgeLabel(type, platform) {
    if (type === 'social') {
      switch (platform) {
        case 'instagram': return 'Instagram';
        case 'facebook': return 'Facebook';
        case 'tiktok': return 'TikTok';
        case 'twitter': return 'X / Twitter';
        case 'youtube': return 'YouTube';
        case 'vimeo': return 'Vimeo';
        case 'spotify': return 'Spotify';
        default: return 'Publicación';
      }
    }
    return (type === 'video' || type === 'iframe') ? 'Video' : 'Imagen';
  }

  function renderSocialEmbed(mediaEl, src, platformOverride, rawEmbedCode) {
    // 1. Si el usuario puso un código de inserción personalizado (LinkedIn, Pinterest, etc), lo usamos directo.
    if (rawEmbedCode && rawEmbedCode.trim() !== '') {
      mediaEl.innerHTML = rawEmbedCode;
      return;
    }

    const platform = platformOverride || detectPlatform(src);

    // 2. Lógica para cada plataforma conocida
    if (platform === 'instagram') {
      mediaEl.innerHTML = '<blockquote class="instagram-media" data-instgrm-permalink="' + src + '?utm_source=ig_embed" data-instgrm-version="14" style="margin:0 auto; width:100%;"></blockquote>';
      loadExternalScript('https://www.instagram.com/embed.js', 
        () => !!(window.instgrm && window.instgrm.Embeds), 
        () => window.instgrm && window.instgrm.Embeds.process());
      return;
    }

    if (platform === 'youtube') {
      const videoId = src.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
      const id = videoId ? videoId[1] : '';
      mediaEl.innerHTML = `<iframe width="100%" height="450" src="https://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      return;
    }

    if (platform === 'spotify') {
      const embedUrl = src.replace('open.spotify.com', 'open.spotify.com/embed');
      mediaEl.innerHTML = `<iframe src="${embedUrl}" width="100%" height="352" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
      return;
    }

    if (platform === 'tiktok') {
      mediaEl.innerHTML = `<blockquote class="tiktok-embed" cite="${src}" style="max-width:605px; min-width:325px; margin:0 auto;"><section></section></blockquote>`;
      loadExternalScript('https://www.tiktok.com/embed.js', () => !!window.tiktokEmbedLoaded, () => { window.tiktokEmbedLoaded = true; });
      return;
    }

    // 3. Fallback genérico para cualquier otro link (Iframe genérico)
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.style.width = '100%';
    iframe.style.minHeight = '480px';
    iframe.style.border = 'none';
    iframe.allowFullscreen = true;
    mediaEl.appendChild(iframe);
  }

  function openModal(overlay, data) {
    const mediaEl = overlay.querySelector('#hesLbxMedia');
    const titleEl = overlay.querySelector('#hesLbxTitle');
    const textEl = overlay.querySelector('#hesLbxText');
    const badgeEl = overlay.querySelector('#hesLbxBadge');
    const linkEl = overlay.querySelector('#hesLbxLink');
    const linkTextEl = overlay.querySelector('#hesLbxLinkText');
    const link2El = overlay.querySelector('#hesLbxLink2');
    const linkText2El = overlay.querySelector('#hesLbxLinkText2');

    mediaEl.innerHTML = '';
    mediaEl.classList.remove('hesLbx-media-social');

    // Manejo de contenido visual
    if (data.type === 'video') {
      mediaEl.innerHTML = `<video src="${data.src}" controls autoplay playsinline style="width:100%;"></video>`;
    } else if (data.type === 'iframe') {
      mediaEl.innerHTML = `<iframe src="${data.src}${data.src.includes('?') ? '&' : '?'}autoplay=1" width="100%" height="480" allowfullscreen style="border:none;"></iframe>`;
    } else if (data.type === 'social') {
      mediaEl.classList.add('hesLbx-media-social');
      renderSocialEmbed(mediaEl, data.src, data.platform, data.embedCode); // Pasamos el custom embed!
    } else {
      mediaEl.innerHTML = `<img src="${data.src}" alt="${data.title || ''}">`;
    }

    titleEl.textContent = data.title || '';
    textEl.textContent = data.desc || '';
    badgeEl.textContent = getBadgeLabel(data.type, data.platform || detectPlatform(data.src));

    // Lógica Botón 1
    if (data.linkUrl && data.linkUrl.trim() !== '') {
      linkEl.href = data.linkUrl;
      linkTextEl.textContent = data.linkText || 'Ver más';
      linkEl.hidden = false;
      linkEl.style.display = 'inline-flex';
    } else {
      linkEl.hidden = true;
      linkEl.style.display = 'none';
    }

    // Lógica Botón 2
    if (data.link2Url && data.link2Url.trim() !== '') {
      link2El.href = data.link2Url;
      linkText2El.textContent = data.link2Text || 'Registro';
      link2El.hidden = false;
      link2El.style.display = 'inline-flex';
    } else {
      link2El.hidden = true;
      link2El.style.display = 'none';
    }

    overlay.classList.add('hesLbx-active');
    document.body.classList.add('hesLbx-open');
  }

  function closeModal(overlay) {
    overlay.classList.remove('hesLbx-active');
    document.body.classList.remove('hesLbx-open');
    const mediaEl = overlay.querySelector('#hesLbxMedia');
    setTimeout(() => { mediaEl.innerHTML = ''; }, 300);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const overlay = buildModal();
    const closeBtn = overlay.querySelector('#hesLbxClose');

    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('.newworks-btn-lightbox');
      if (!trigger) return;
      e.preventDefault();

      const src = trigger.dataset.src;
      if (!src && !trigger.dataset.embed) return; // Ahora permite abrir si hay embed aunque no haya src

      const data = {
        src: src || '',
        type: trigger.dataset.type || 'image',
        title: trigger.dataset.title || '',
        desc: getDescription(trigger),
        linkUrl: trigger.dataset.linkUrl || '',
        linkText: trigger.dataset.linkText || '',
        link2Url: trigger.dataset.link2Url || '',
        link2Text: trigger.dataset.link2Text || '',
        platform: trigger.dataset.platform || '',
        embedCode: trigger.dataset.embed || '' // Capturamos el nuevo atributo
      };

      openModal(overlay, data);
    });

    closeBtn.addEventListener('click', () => closeModal(overlay));
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('hesLbx-active')) {
        closeModal(overlay);
      }
    });
  });
})();