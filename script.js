let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}
function openModal(id) {
  document.getElementById("modal-" + id).style.display = "block";
}

function closeModal(id) {
  document.getElementById("modal-" + id).style.display = "none";
}

// Optional: close modal when clicking outside
window.addEventListener("click", function(e) {
  document.querySelectorAll(".bio-modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
function toggleFAQ(btn) {
  const item = btn.parentElement;
  item.classList.toggle('active');
}
