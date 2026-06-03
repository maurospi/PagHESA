//document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//    anchor.addEventListener('click', function (e) {
//      e.preventDefault();
//      const target = document.querySelector(this.getAttribute('href'));
//      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//    });
//  });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      
      if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});
