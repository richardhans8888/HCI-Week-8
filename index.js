// Ensures that the document is fully loaded before adding any event listeners
document.addEventListener("DOMContentLoaded", function() {

    // Handle the reservation form modal
    const reservationBtn = document.querySelectorAll('.btn-buy');
    const reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'));

    // Show reservation modal when "Buy Now" button is clicked
    reservationBtn.forEach((btn) => {
        btn.addEventListener('click', function() {
            reservationModal.show();
        });
    });

    // Smooth scrolling for the navigation links
    const navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adding a little offset
                behavior: "smooth"
            });
        });
    });

    // Form submission (Optional: You can process form here or send data to a server)
    const reservationForm = document.querySelector('form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email) {
                alert("Your reservation has been submitted. We'll contact you soon!");
                reservationModal.hide(); // Hide the modal after submission
                reservationForm.reset(); // Reset the form
            } else {
                alert("Please fill in all required fields.");
            }
        });
    }
});