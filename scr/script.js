emailjs.init("vXTUHmbQ32WDwtNuE");

document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    const serviceID = "service_qdz22sn";
    const templateID = "template_1l6ozsr";
    const submitButton = document.getElementById('submit-button');
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    emailjs.send(serviceID, templateID, formData)
        .then(() => {
            Toastify({
                text: "Email enviado com sucesso",
                duration: 3000,
                style: {
                    color: "#01c79f",
                    background: "rgba(0, 255, 204, 0.5)"
                },
            }).showToast();

            document.getElementById('contact-form').reset();
        })
        .catch((error) => {
            Toastify({
                text: "Erro ao enviar a mensagem",
                duration: 3000,
                style: {
                    color: "#fff",
                    background: "rgba(255, 0, 0, 0.6)"
                },
            }).showToast();
            console.error("Erro:", error);
        })
        .finally(() => {
            submitButton.textContent = 'Enviar mensagem';
            submitButton.disabled = false;
        });
});


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
