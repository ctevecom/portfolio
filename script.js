document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
  
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent successfully! (Form submission is not connected yet)');
      form.reset();
    });
  }
  