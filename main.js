document.addEventListener('DOMContentLoaded', function() {
    // Ensure body has loading class initially
    document.body.classList.add('loading');
    
    // Force reflow before starting animation
    void document.body.offsetWidth;
    
    // Show loading screen
    loadingScreen.style.display = 'flex';
    
    // When everything is loaded
    window.addEventListener('load', function() {
        // Add minimum delay for animation to be visible
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            
            // Remove loading class after transition
            loadingScreen.addEventListener('transitionend', function() {
                document.body.classList.remove('loading');
                loadingScreen.style.display = 'none';
            }, { once: true });
        }, 500); // Minimum time loading screen will be visible
    });
    
    // Fallback if load event doesn't fire
    setTimeout(function() {
        if (document.body.classList.contains('loading')) {
            loadingScreen.classList.add('hidden');
            document.body.classList.remove('loading');
            loadingScreen.style.display = 'none';
        }
    }, 3000); // Safety timeout after 3 seconds
});



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