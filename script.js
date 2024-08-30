// script.js

// Função para rolar suavemente para uma seção ao clicar nos links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Função para lidar com o envio do formulário de agendamento
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Simular envio do formulário (aqui você poderia enviar os dados para um servidor)
    setTimeout(() => {
        const message = `Obrigado, ${name}! Seu agendamento foi realizado para ${date} às ${time}. Um e-mail de confirmação foi enviado para ${email}.`;
        document.getElementById('response-message').textContent = message;

        // Limpar o formulário
        document.getElementById('booking-form').reset();
    }, 1000);
});
