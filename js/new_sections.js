/**
 * JS FOR NEW SECTIONS (newinformation, newservices, newworks, newmission)
 * Self-contained logic inside IIFE to avoid global namespace conflicts.
 * Pure ES6 JavaScript.
 */
(function () {
  'use strict';

  // Global references for Lightbox
  let newLightboxElement = null;
  let newLightboxMediaContainer = null;
  let newLightboxTitle = null;

  // Global references for Services Modal
  let newServicesModal = null;
  let newServicesModalBody = null;

  // Service Details Data Object (Aesthetic text & integrated videos)
  const newServicesData = {
    capacitacion: {
      title: "Capacitación en Lengua de Señas Colombiana (LSC)",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
      intro: "Fomenta la verdadera inclusión en tu organización al capacitar a tus colaboradores con docentes sordos nativos en LSC.",
      video: "https://www.youtube.com/embed/FiAoMV9k8-8", // Dedicated space for video/iframe
      longDesc: "Nuestros cursos están estructurados de forma modular, lo que permite un progreso lógico y natural en el aprendizaje de la Lengua de Señas Colombiana. No se trata únicamente de memorizar señas aisladas, sino de comprender la gramática espacial, la expresión corporal y la riqueza cultural de la Comunidad Sorda. Nos enfocamos en capacitar equipos de servicio al cliente, recursos humanos y áreas directivas para establecer una comunicación empática y directa desde el primer contacto.",
      details: [
        { label: "Dirigido a", value: "Empresas, colegios, universidades y entidades públicas interesadas en romper barreras de comunicación." },
        { label: "Duración", value: "Módulos de 40 a 60 horas académicas." },
        { label: "Modalidad", value: "Presencial (in-company) o Virtual con clases síncronas en vivo." },
        { label: "Metodología", value: "Enfoque práctico-comunicativo con inmersión lingüística desde el primer día." }
      ],
      objectives: [
        "Aprender el abecedario, vocabulario cotidiano e introducciones formales en LSC.",
        "Comprender la estructura gramatical y espacial de la lengua de señas.",
        "Reconocer y respetar los aspectos socioculturales de la Comunidad Sorda Colombiana.",
        "Facilitar la atención al cliente básico para usuarios con discapacidad auditiva."
      ]
    },
    accesibilidad: {
      title: "Consultoría y Adaptación en Accesibilidad Web",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
      intro: "Adaptamos tus portales y sistemas digitales para cumplir plenamente con las pautas internacionales de accesibilidad WCAG.",
      video: "https://www.youtube.com/embed/FiAoMV9k8-8", // Dedicated space for video/iframe
      longDesc: "Garantizamos que todas las personas, independientemente de sus capacidades sensoriales o motoras, puedan navegar, comprender e interactuar de forma autónoma con tu sitio web. Llevamos a cabo auditorías de código exhaustivas según los estándares WCAG 2.1 y WCAG 2.2, optimizando la semántica HTML, la navegación mediante teclado, las alternativas de texto para lectores de pantalla y las alertas auditivas. Además, realizamos pruebas de usabilidad reales con personas ciegas y sordas.",
      details: [
        { label: "Dirigido a", value: "Desarrolladores, agencias digitales, empresas y organismos públicos con portales informativos o de servicios." },
        { label: "Estándares", value: "Cumplimiento de niveles A, AA y AAA conforme a WCAG 2.1 y 2.2." },
        { label: "Entregables", value: "Diagnósticos iniciales de usabilidad, código adaptado y sello de conformidad accesible." },
        { label: "Validación", value: "Pruebas de navegación en tiempo real realizadas por usuarios ciegos utilizando lectores de pantalla." }
      ],
      objectives: [
        "Evaluar la compatibilidad del sitio con tecnologías de asistencia (lectores de pantalla).",
        "Asegurar el contraste de color, legibilidad del texto y navegación completa vía teclado.",
        "Adaptar formularios complejos, menús de navegación y recursos multimedia.",
        "Capacitar a tu equipo de desarrollo en pautas de codificación accesible (ARIA)."
      ]
    },
    interpretacion: {
      title: "Servicios de Interpretación y Traducción LSC",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>`,
      intro: "Garantizamos el acceso a la información en tiempo real a través de intérpretes de LSC calificados y traducción de contenidos.",
      video: "https://www.youtube.com/embed/pCVPk6Frqcs", // Dedicated space for video/iframe
      longDesc: "Ofrecemos servicios de interpretación simultánea profesionales para eventos presenciales, virtuales o híbridos. Nuestro equipo de intérpretes se encuentra altamente calificado en diversas temáticas (legal, médica, corporativa, educativa, tecnológica), garantizando una traducción fiel y respetuosa de la estructura de la Lengua de Señas Colombiana. Nos encargamos de todo el flujo comunicativo, desde conferencias multitudinarias hasta trámites personalizados en tu organización.",
      details: [
        { label: "Servicios", value: "Interpretación en conferencias, eventos corporativos, asambleas de copropietarios y trámites legales." },
        { label: "Traducción", value: "Producción de videos institucionales con recuadro de LSC y subtitulado." },
        { label: "Equipo", value: "Intérpretes certificados con amplia trayectoria en contextos técnicos y académicos." },
        { label: "Formatos", value: "Soporte presencial o conexión remota mediante plataformas de videollamada." }
      ],
      objectives: [
        "Proporcionar una interpretación fluida, fiel y precisa.",
        "Adaptar terminologías técnicas de forma adecuada al contexto gestual.",
        "Garantizar la visibilidad óptima del recuadro del intérprete en producciones digitales.",
        "Promover la inclusión activa de usuarios sordos en eventos multitudinarios."
      ]
    },
    asesoria: {
      title: "Asesoría en Ajustes Razonables Laborales",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
      intro: "Evaluamos entornos de trabajo y estructuras organizativas para implementar los ajustes necesarios que faciliten la inclusión laboral exitosa.",
      video: "https://www.youtube.com/embed/FiAoMV9k8-8", // Dedicated space for video/iframe
      longDesc: "Diseñamos un plan de ruta integral que le permita a tu empresa integrar de manera segura y productiva a profesionales sordos y ciegos. Llevamos a cabo un análisis detallado del puesto de trabajo, evaluando los sistemas informáticos propios de la empresa, la accesibilidad de las herramientas internas y la dinámica del equipo inmediato. Proporcionamos pautas de comunicación, herramientas de asistencia y un acompañamiento continuo para resolver cualquier obstáculo en las etapas iniciales de la contratación.",
      details: [
        { label: "Servicios", value: "Diagnóstico de puestos de trabajo, accesibilidad de software interno y protocolos de comunicación." },
        { label: "Dirigido a", value: "Departamentos de Recursos Humanos, líderes de equipo y comités de inclusión corporativa." },
        { label: "Normativa", value: "Alineación con la Ley de Inclusión Laboral y normativas nacionales de accesibilidad." },
        { label: "Seguimiento", value: "Talleres de sensibilización inicial y acompañamiento post-contratación por 3 meses." }
      ],
      objectives: [
        "Identificar y eliminar barreras físicas, comunicativas y metodológicas en el puesto laboral.",
        "Implementar señaléticas accesibles y software adaptativo para el empleado.",
        "Capacitar al equipo de trabajo directo en pautas básicas de comunicación inclusiva.",
        "Asegurar la igualdad de oportunidades y el desempeño autónomo del trabajador."
      ]
    },
    audiovisual: {
      title: "Producción Audiovisual Accesible",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>`,
      intro: "Hacemos que tus videos corporativos, publicitarios e informativos sean 100% accesibles para personas sordas y ciegas.",
      video: "https://www.youtube.com/embed/pCVPk6Frqcs", // Dedicated space for video/iframe
      longDesc: "Nos encargamos de estructurar tus videos corporativos o publicitarios con altos estándares técnicos de accesibilidad. Esto incluye la grabación e integración de un recuadro de Lengua de Señas Colombiana con fondo de contraste y tamaño regulado, inserción de subtitulado descriptivo sincronizado (CC) para capturar no solo la voz sino también los efectos y la música del video, y la creación de una pista de audiodescripción dedicada para la población ciega.",
      details: [
        { label: "Servicios", value: "Grabación e inserción de recuadro de LSC, subtítulos descriptivos (CC) y audiodescripción para personas ciegas." },
        { label: "Formatos", value: "Exportación optimizada para redes sociales, televisión corporativa o sitios web oficiales." },
        { label: "Calidad", value: "Cumplimiento técnico de tamaño de recuadro LSC, contraste de subtítulos y sincronización de audio." },
        { label: "Edición", value: "Procesamiento digital completo en estudios profesionales con asesores sordos." }
      ],
      objectives: [
        "Garantizar que el mensaje visual y auditivo sea equivalente para todos los espectadores.",
        "Insertar subtítulos legibles y descriptivos con indicación de sonidos de fondo y tonos de voz.",
        "Lograr una sincronía impecable entre la lengua de señas, el audio original y la imagen de pantalla.",
        "Cumplir con las regulaciones estatales de comunicación y difusión accesible."
      ]
    },
    auditoria: {
      title: "Auditoría de Entornos Físicos Accesibles",
      icon: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0V9a2 2 0 012-2h2a2 2 0 012 2v12m-6 0h6" /></svg>`,
      intro: "Evaluamos tus instalaciones comerciales, corporativas o públicas para garantizar la orientación y movilidad autónoma de todos los visitantes.",
      video: "https://www.youtube.com/embed/BUYrR0LZoh0", // Dedicated space for video/iframe
      longDesc: "Analizamos de forma pormenorizada las rutas de ingreso, circulación interna, señalizaciones existentes y salidas de emergencia de tus instalaciones según las normativas nacionales de accesibilidad. Aportamos asesoría sobre la instalación correcta de pisos podotáctiles para la orientación de personas ciegas, adaptación de letreros y mapas a sistema Braille de alto contraste, e implementación de bucles de inducción magnética en taquillas o auditorios para personas con prótesis auditivas.",
      details: [
        { label: "Servicios", value: "Estudio de rutas de evacuación, señalización podotáctil, letreros en braille y señalética visual accesible." },
        { label: "Normativa", value: "Evaluación según norma técnica colombiana NTC de accesibilidad física." },
        { label: "Entregables", value: "Informe de diagnóstico detallado con plano de mejoras sugeridas y cotización de adaptaciones." },
        { label: "Certificación", value: "Reconocimiento de espacio amigable e inclusivo tras la implementación." }
      ],
      objectives: [
        "Asegurar el libre desplazamiento sin obstáculos para personas con movilidad reducida o ceguera.",
        "Diseñar señalética de alto contraste visual y relieve háptico (Braille).",
        "Implementar bucles magnéticos o puntos de asistencia accesibles en áreas de recepción.",
        "Capacitar al personal de seguridad y servicio al cliente en atención a personas con discapacidad física y sensorial."
      ]
    }
  };

  /**
   * Main initializer
   */
  function newInit() {
    newInitScrollReveal();
    newInitGalleryFilters();
    newInitLightbox();
    newInitServicesModal();
    newInitServicesExpansion();
    newInitObjectivesExpansion();
    newInitVideoHoverPreviews();
  }

  /**
   * Intersection Observer for scroll reveal animations (.newreveal)
   */
  function newInitScrollReveal() {
    const newRevealElements = document.querySelectorAll('.newreveal');
    if ('IntersectionObserver' in window) {
      const newObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
      };

      const newObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('newvisible');
            // Unobserve to trigger only once
            observer.unobserve(entry.target);
          }
        });
      }, newObserverOptions);

      newRevealElements.forEach(el => newObserver.observe(el));
    } else {
      // Fallback if IntersectionObserver is not supported
      newRevealElements.forEach(el => el.classList.add('newvisible'));
    }
  }

  /**
   * Filter controls for the masonry gallery in Section 3
   */
  function newInitGalleryFilters() {
    const newFilterButtons = document.querySelectorAll('.newworks-filter-btn');
    const newGalleryItems = document.querySelectorAll('.newworks-item');

    newFilterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        // Remove active class from all filters and apply to the clicked one
        newFilterButtons.forEach(b => b.classList.remove('newactive'));
        this.classList.add('newactive');

        const newFilterValue = this.getAttribute('data-filter');

        newGalleryItems.forEach(item => {
          const newCategory = item.getAttribute('data-category');
          if (newFilterValue === 'all' || newCategory === newFilterValue) {
            item.classList.remove('newhidden');
          } else {
            item.classList.add('newhidden');
          }
        });
      });
    });
  }

  /**
   * Lightbox initializer (Image, Video, YouTube iframe popups)
   */
  function newInitLightbox() {
    newLightboxElement = document.getElementById('newlightbox');
    if (!newLightboxElement) return;

    newLightboxMediaContainer = newLightboxElement.querySelector('.newlightbox-media-container');
    newLightboxTitle = document.getElementById('newlightbox-title');
    const newCloseBtn = document.getElementById('newlightbox-close');
    const newLightboxTriggers = document.querySelectorAll('.newworks-btn-lightbox');

    // Attach click triggers to grid items
    newLightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        const newSrc = this.getAttribute('data-src');
        const newType = this.getAttribute('data-type');
        const newTitleText = this.getAttribute('data-title') || '';

        if (!newSrc) return;
        newOpenLightbox(newSrc, newType, newTitleText);
      });
    });

    // Close on click close button
    if (newCloseBtn) {
      newCloseBtn.addEventListener('click', newCloseLightbox);
    }

    // Close on click outside the lightbox content
    newLightboxElement.addEventListener('click', function (e) {
      if (e.target === newLightboxElement) {
        newCloseLightbox();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && newLightboxElement.classList.contains('newactive')) {
        newCloseLightbox();
      }
    });
  }

  /**
   * Open Lightbox and load the specific resource type
   */
  function newOpenLightbox(src, type, title) {
    if (!newLightboxElement || !newLightboxMediaContainer) return;

    // Reset container first
    newLightboxMediaContainer.innerHTML = '';
    
    // Set title
    if (newLightboxTitle) {
      newLightboxTitle.textContent = title;
    }

    // Embed media based on type
    let newMediaHtml = '';
    if (type === 'image') {
      newMediaHtml = `<img src="${src}" alt="${title}" loading="lazy" decoding="async" />`;
    } else if (type === 'video') {
      newMediaHtml = `<video src="${src}" controls playsinline preload="metadata" style="width: 100%; max-height: 70vh;"></video>`;
    } else if (type === 'iframe') {
      newMediaHtml = `<iframe src="${src}" allow="autoplay; fullscreen" loading="lazy" style="width: 100%; height: 500px; max-height: 70vh; aspect-ratio: 16/9; border-radius: 8px;"></iframe>`;
    }

    newLightboxMediaContainer.innerHTML = newMediaHtml;
    newLightboxElement.classList.add('newactive');
    
    // Disable body scroll while lightbox is active
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close Lightbox and stop any playing media
   */
  function newCloseLightbox() {
    if (!newLightboxElement || !newLightboxMediaContainer) return;

    newLightboxElement.classList.remove('newactive');
    document.body.style.overflow = ''; // Restore scroll

    // Wait for transition before clearing DOM elements
    setTimeout(() => {
      newLightboxMediaContainer.innerHTML = '';
    }, 400);
  }

  /**
   * Services Detail Modal Logic
   */
  function newInitServicesModal() {
    newServicesModal = document.getElementById('newservices-modal');
    if (!newServicesModal) return;

    newServicesModalBody = newServicesModal.querySelector('.newservices-modal-body');
    const newCloseBtn = document.getElementById('newservices-modal-close');

    // Attach click events utilizing event delegation to support dynamically expanded services
    document.addEventListener('click', function (e) {
      const targetBtn = e.target.closest('.newservices-saber-mas-btn');
      if (targetBtn) {
        e.preventDefault();
        const newServiceKey = targetBtn.getAttribute('data-service');
        const newServiceData = newServicesData[newServiceKey];

        if (newServiceData) {
          newPopulateServicesModal(newServiceData);
          newOpenServicesModal();
        }
      }
    });

    // Close click events
    if (newCloseBtn) {
      newCloseBtn.addEventListener('click', newCloseServicesModal);
    }

    newServicesModal.addEventListener('click', function (e) {
      if (e.target === newServicesModal) {
        newCloseServicesModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && newServicesModal.classList.contains('newactive')) {
        newCloseServicesModal();
      }
    });
  }

  /**
   * Populate Services Modal with dynamic HTML structure (Support videos & longer descriptions)
   */
  function newPopulateServicesModal(data) {
    if (!newServicesModalBody) return;

    // Build details list HTML
    let detailsHtml = '';
    data.details.forEach(item => {
      detailsHtml += `
        <div class="newservices-modal-detail-item">
          <div class="newservices-modal-detail-label">${item.label}</div>
          <div class="newservices-modal-detail-value">${item.value}</div>
        </div>
      `;
    });

    // Build objectives list HTML
    let objectivesHtml = '';
    data.objectives.forEach(obj => {
      objectivesHtml += `
        <li class="newservices-modal-list-item">${obj}</li>
      `;
    });

    // Video Iframe area
    let videoHtml = '';
    if (data.video) {
      videoHtml = `
        <div class="newservices-modal-video-container">
          <iframe src="${data.video}" allow="autoplay; fullscreen" title="Video descriptivo de ${data.title}" allowfullscreen></iframe>
        </div>
      `;
    }

    // Complete layout insertion: stylized, long desc & video area
    newServicesModalBody.innerHTML = `
      <div class="newservices-modal-header">
        <div class="newservices-modal-icon-wrapper">
          ${data.icon}
        </div>
        <h2 class="newservices-modal-title">${data.title}</h2>
      </div>
      
      <!-- Video area at the top of content -->
      ${videoHtml}
      
      <div class="newservices-modal-grid">
        <div class="newservices-modal-details-list">
          <h4 class="newservices-modal-section-title">Ficha Técnica</h4>
          ${detailsHtml}
        </div>
        
        <div class="newservices-modal-main">
          <p class="newservices-modal-intro">${data.intro}</p>
          <div class="newservices-modal-long-desc">${data.longDesc || ''}</div>
          
          <h4 class="newservices-modal-section-title">Objetivos Clave</h4>
          <ul class="newservices-modal-list">
            ${objectivesHtml}
          </ul>
          
          <a href="#contacto" class="newservices-modal-cta" onclick="
            document.getElementById('newservices-modal').classList.remove('newactive');
            document.body.style.overflow = '';
          ">
            <span>Solicitar Información</span>
            <svg style="width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2;" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    `;
  }

  function newOpenServicesModal() {
    if (!newServicesModal) return;
    newServicesModal.classList.add('newactive');
    document.body.style.overflow = 'hidden'; // Stop page scroll
  }

  function newCloseServicesModal() {
    if (!newServicesModal) return;
    newServicesModal.classList.remove('newactive');
    document.body.style.overflow = ''; // Restore page scroll
  }

  /**
   * Services load more system (expand/collapse cards)
   */
  function newInitServicesExpansion() {
    const newLoadMoreBtn = document.getElementById('newservices-load-more-btn');
    const newHiddenCards = document.querySelectorAll('.newservices-hidden-card');

    if (!newLoadMoreBtn || newHiddenCards.length === 0) return;

    newLoadMoreBtn.addEventListener('click', function () {
      const newIsExpanded = this.classList.contains('newexpanded');

      if (newIsExpanded) {
        // Collapse hidden services
        newHiddenCards.forEach(card => {
          card.classList.remove('newshow');
        });
        this.classList.remove('newexpanded');
        this.querySelector('span').textContent = 'Ver Más Servicios';

        // Smooth scroll back to services anchor to maintain context
        document.getElementById('newservices').scrollIntoView({ behavior: 'smooth' });
      } else {
        // Expand and show services
        newHiddenCards.forEach(card => {
          card.classList.add('newshow');
        });
        this.classList.add('newexpanded');
        this.querySelector('span').textContent = 'Ver Menos';
      }
    });
  }

  /**
   * Objectives load more system (expand/collapse cards)
   */
  function newInitObjectivesExpansion() {
    const newLoadMoreBtn = document.getElementById('newmission-load-more-btn');
    const newHiddenObjectives = document.querySelectorAll('.newmission-hidden-objective');

    if (!newLoadMoreBtn || newHiddenObjectives.length === 0) return;

    newLoadMoreBtn.addEventListener('click', function () {
      const newIsExpanded = this.classList.contains('newexpanded');

      if (newIsExpanded) {
        // Collapse hidden objectives
        newHiddenObjectives.forEach(obj => {
          obj.classList.remove('newshow');
        });
        this.classList.remove('newexpanded');
        this.querySelector('span').textContent = 'Ver Más Objetivos';

        // Smooth scroll back to objectives section to maintain context
        document.getElementById('newmission').scrollIntoView({ behavior: 'smooth' });
      } else {
        // Expand and show objectives
        newHiddenObjectives.forEach(obj => {
          obj.classList.add('newshow');
        });
        this.classList.add('newexpanded');
        this.querySelector('span').textContent = 'Ver Menos';
      }
    });
  }

  /**
   * Auto play/pause preview on hovering video cards
   */
  function newInitVideoHoverPreviews() {
    const newVideoItems = document.querySelectorAll('.newworks-item[data-category="video"]');
    newVideoItems.forEach(item => {
      const video = item.querySelector('.newworks-video-preview');
      if (!video) return;

      const enablePreview = () => {
        if (!video.src && video.currentSrc) {
          return;
        }
        const playPromise = video.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch(() => {});
        }
      };

      item.addEventListener('mouseenter', enablePreview);
      item.addEventListener('mouseleave', () => {
        if (!video.paused) {
          video.pause();
        }
        video.currentTime = 0;
      });
    });
  }

  // Load initializer
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', newInit);
  } else {
    newInit();
  }
})();
