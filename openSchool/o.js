// FAQ Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
        question.classList.toggle('active');
    });
});

// WhatsApp Tracking
document.getElementById('whatsapp-link').addEventListener('click', (e) => {
    e.preventDefault();
    const phoneNumber = '9365489154';
    const message = `Hi, I'm interested in Open Schooling courses. I found you through: ${window.location.href}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
});