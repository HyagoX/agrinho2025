document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const form = document.querySelector('.contato-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            input.style.border = '2px solid #ff6b6b';
            isValid = false;
          } else {
            input.style.border = 'none';
          }
        });
        
        if (isValid) {
          alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
          this.reset();
        } else {
          alert('Por favor, preencha todos os campos obrigatórios.');
        }
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bloco, .sobre-bloco, .destaque-quote').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    window.addEventListener('load', function() {
      setTimeout(function() {
        const loader = document.querySelector('.loader-container');
        loader.classList.add('hidden');
        
        loader.addEventListener('transitionend', function() {
          loader.remove();
        });
      }, 1500);
    });
