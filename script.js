(function() {
    emailjs.init("7qU_3XvOAHf-TIOYG");  // Replace with your EmailJS Public Key
})();

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

let currentTour = 0;
const tours = document.querySelectorAll('.tour');

function nextTour() {
    tours[currentTour].classList.remove('active');
    currentTour = (currentTour + 1) % tours.length;
    tours[currentTour].classList.add('active');
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        emailjs.send("service_cws2iqm", "template_toklmiu", {  // Replace with your Service ID and Template ID
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            alert('Thank you, ' + name + '! Your message has been sent.');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        });
    } else {
        alert('Please fill in all fields.');
    }
});