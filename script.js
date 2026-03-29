// Glow Touch Booking Form JS 🌸
const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(e) {
  // Show alert to user
  alert('Thank you! Your Glow Touch booking has been received and will be checked for schedule availability 🌸');
  
  // Let the form submit normally to FormSubmit
  setTimeout(() => {
    form.reset(); // Reset fields after submission
  }, 100); // small delay to allow form to submit
});
