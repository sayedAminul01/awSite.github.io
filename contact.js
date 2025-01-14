// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add submit event listener to the form
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
        `*Name:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Phone:* ${phone}%0A` +
        `*Message:* ${message}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919365489154?text=${whatsappMessage}`;

    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');

    // Optional: Reset the form after submission
    contactForm.reset();
});
