// Inicializa o EmailJS
(function(){
   emailjs.init("vXTUHmbQ32WDwtNuE"); // Apenas a chave pública
})();

// Formulário de contato
const form = document.getElementById('contato-form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    emailjs.sendForm("service_hb8op05", "template_1870xu8", this)
    .then(() => {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    }, (err) => {
        alert('Erro ao enviar a mensagem: ' + JSON.stringify(err));
    });
});



// Animação fade-in ao rolar a página
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.style.animation = 'fadeIn 1s forwards';
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

