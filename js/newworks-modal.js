(function () {
  'use strict';

  var scriptsLoaded = { instagram: false, facebook: false, twitter: false, tiktok: false };

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

  function detectPlatform(url) {
    if (/instagram\.com/i.test(url)) return 'instagram';
    if (/facebook\.com|fb\.watch/i.test(url)) return 'facebook';
    if (/tiktok\.com/i.test(url)) return 'tiktok';
    if (/twitter\.com|x\.com/i.test(url)) return 'twitter';
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
        default: return 'Publicación';
      }
    }
    return (type === 'video' || type === 'iframe') ? 'Video' : 'Imagen';
  }

  function renderSocialEmbed(mediaEl, src, platformOverride) {
    const platform = platformOverride || detectPlatform(src);

    if (platform === 'instagram') {
      mediaEl.innerHTML = '<blockquote class="instagram-media" data-instgrm-permalink="' + src + '" data-instgrm-version="14" style="margin:0 auto; width:100%;"></blockquote>';
      loadExternalScript(
        'https://www.instagram.com/embed.js',
        function () { return !!(window.instgrm && window.instgrm.Embeds); },
        function () { window.instgrm && window.instgrm.Embeds.process(); }
      );
      return;
    }
    // Fallback genérico para iframe (simplificado aquí por brevedad)
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.style.width = '100%';
    iframe.style.minHeight = '480px';
    iframe.style.border = 'none';
    mediaEl.appendChild(iframe);
  }

  function openModal(overlay, data) {
    const mediaEl = overlay.querySelector('#hesLbxMedia');
    const linkEl = overlay.querySelector('#hesLbxLink');
    const link2El = overlay.querySelector('#hesLbxLink2');

    mediaEl.innerHTML = '';
    mediaEl.classList.remove('hesLbx-media-social');

    overlay.querySelector('#hesLbxTitle').textContent = data.title || '';
    overlay.querySelector('#hesLbxText').textContent = data.desc || '';
    overlay.querySelector('#hesLbxBadge').textContent = getBadgeLabel(data.type, data.platform || detectPlatform(data.src));

    // Lógica Botón 1
    if (data.linkUrl) {
      linkEl.href = data.linkUrl;
      overlay.querySelector('#hesLbxLinkText').textContent = data.linkText || 'Ver más';
      linkEl.hidden = false;
    } else {
      linkEl.hidden = true;
    }

    // Lógica Botón 2 (Nuevo)
    if (data.link2Url) {
      link2El.href = data.link2Url;
      overlay.querySelector('#hesLbxLinkText2').textContent = data.link2Text || 'Registro';
      link2El.hidden = false;
    } else {
      link2El.hidden = true;
    }

    if (data.type === 'social') {
      mediaEl.classList.add('hesLbx-media-social');
      renderSocialEmbed(mediaEl, data.src, data.platform);
    } else if (data.type === 'video') {
      mediaEl.innerHTML = `<video src="${data.src}" controls autoplay playsinline style="width:100%;"></video>`;
    } else {
      mediaEl.innerHTML = `<img src="${data.src}" alt="${data.title}" style="width:100%; height:auto;">`;
    }

    overlay.classList.add('hesLbx-active');
    document.body.classList.add('hesLbx-open');
  }

  function closeModal(overlay) {
    overlay.classList.remove('hesLbx-active');
    document.body.classList.remove('hesLbx-open');
    setTimeout(() => { overlay.querySelector('#hesLbxMedia').innerHTML = ''; }, 300);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const overlay = buildModal();
    let active = false;

    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('.newworks-btn-lightbox');
      if (!trigger) return;
      e.preventDefault();

      if (!trigger.dataset.src) return;

      if (!active) {
        active = true;
      }
      
      openModal(overlay, {
        src: trigger.dataset.src,
        type: trigger.dataset.type || 'image',
        title: trigger.dataset.title,
        desc: getDescription(trigger),
        linkUrl: trigger.dataset.linkUrl,
        linkText: trigger.dataset.linkText,
        link2Url: trigger.dataset.link2Url,
        link2Text: trigger.dataset.link2Text,
        platform: trigger.dataset.platform
      });
    });

    overlay.querySelector('#hesLbxClose').addEventListener('click', () => closeModal(overlay));
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(overlay); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(overlay); });
  });
})();