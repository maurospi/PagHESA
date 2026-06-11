/* ============================================
   HABLANDO ENSEÑAS — MAIN JAVASCRIPT
   Animations, Navbar, Forms, Lazy Loading
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';



  // ============================================
  // READING PROGRESS BAR
  // ============================================
  const progressBar = document.getElementById('readingProgress');
  if (progressBar) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
      progressBar.setAttribute('aria-valuenow', Math.round(progress));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================
  const navbar = document.getElementById('mainNav');
  if (navbar) {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // Active nav link tracking
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.nav-cta)');

    const updateActiveLink = () => {
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'true');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
  }

  // Close mobile nav on link click
  const navbarCollapse = document.getElementById('navbarContent');
  if (navbarCollapse) {
    const navLinksAll = navbarCollapse.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });
  }

  // ============================================
  // SCROLL REVEAL (IntersectionObserver)
  // ============================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all elements immediately
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ============================================
  // ANIMATED COUNTERS
  // ============================================
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-count'), 10);
      const duration = 2000;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        element.textContent = current >= target ? '+' + target.toLocaleString('es-CO') : current.toLocaleString('es-CO');

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // ============================================
  // SMOOTH SCROLL (enhanced)
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        // Set focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // ============================================
  // BACK TO TOP BUTTON
  // ============================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============================================
  // CONTACT FORM VALIDATION
  // ============================================
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const sendAnother = document.getElementById('sendAnother');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear previous states
      contactForm.querySelectorAll('.form-control, .form-select').forEach(input => {
        input.classList.remove('is-invalid', 'is-valid');
      });

      // Validate name
      const name = document.getElementById('contactName');
      if (name && !name.value.trim()) {
        name.classList.add('is-invalid');
        name.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (name) {
        name.classList.add('is-valid');
        name.removeAttribute('aria-invalid');
      }

      // Validate email
      const email = document.getElementById('contactEmail');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && (!email.value.trim() || !emailRegex.test(email.value))) {
        email.classList.add('is-invalid');
        email.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (email) {
        email.classList.add('is-valid');
        email.removeAttribute('aria-invalid');
      }

      // Validate subject
      const subject = document.getElementById('contactSubject');
      if (subject && !subject.value) {
        subject.classList.add('is-invalid');
        subject.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (subject) {
        subject.classList.add('is-valid');
        subject.removeAttribute('aria-invalid');
      }

      // Validate message
      const message = document.getElementById('contactMessage');
      if (message && !message.value.trim()) {
        message.classList.add('is-invalid');
        message.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (message) {
        message.classList.add('is-valid');
        message.removeAttribute('aria-invalid');
      }

      if (isValid) {
        // Show success
        contactForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.classList.add('show');
        }

        // Announce to screen readers
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.className = 'visually-hidden';
        liveRegion.textContent = 'Mensaje enviado exitosamente.';
        document.body.appendChild(liveRegion);
        setTimeout(() => liveRegion.remove(), 3000);
      } else {
        // Focus first invalid field
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }
    });

    // Real-time validation feedback
    contactForm.querySelectorAll('.form-control, .form-select').forEach(input => {
      input.addEventListener('blur', function () {
        if (this.hasAttribute('required') && !this.value.trim()) {
          this.classList.add('is-invalid');
          this.classList.remove('is-valid');
          this.setAttribute('aria-invalid', 'true');
        } else if (this.type === 'email' && this.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(this.value)) {
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
            this.setAttribute('aria-invalid', 'true');
          } else {
            this.classList.add('is-valid');
            this.classList.remove('is-invalid');
            this.removeAttribute('aria-invalid');
          }
        } else if (this.value.trim()) {
          this.classList.add('is-valid');
          this.classList.remove('is-invalid');
          this.removeAttribute('aria-invalid');
        }
      });
    });
  }

  if (sendAnother) {
    sendAnother.addEventListener('click', () => {
      if (contactForm) {
        contactForm.style.display = '';
        contactForm.reset();
        contactForm.querySelectorAll('.form-control, .form-select').forEach(input => {
          input.classList.remove('is-invalid', 'is-valid');
          input.removeAttribute('aria-invalid');
        });
      }
      if (formSuccess) {
        formSuccess.classList.remove('show');
      }
    });
  }

  // ============================================
  // LAZY LOADING ENHANCEMENT
  // ============================================
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src], video[data-src]');

    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
          }
          if (element.dataset.srcset) {
            element.srcset = element.dataset.srcset;
            element.removeAttribute('data-srcset');
          }
          element.classList.add('loaded');
          lazyObserver.unobserve(element);
        }
      });
    }, {
      rootMargin: '200px 0px'
    });

    lazyImages.forEach(img => lazyObserver.observe(img));
  }

  // ============================================
  // PARALLAX EFFECT (subtle, for hero blobs)
  // ============================================
  const blobs = document.querySelectorAll('.hero-blob');
  if (blobs.length > 0 && window.matchMedia('(min-width: 768px)').matches) {
    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      blobs.forEach((blob, i) => {
        const speed = 0.03 + (i * 0.01);
        blob.style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================
  // THROTTLE/DEBOUNCE UTILITIES
  // ============================================
  // Used internally for scroll events - already handled via
  // IntersectionObserver and requestAnimationFrame patterns above.

  console.log('✅ Hablando Enseñas - Main JS loaded');
});
