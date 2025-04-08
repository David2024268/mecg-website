// Handle contact form submission (placeholder)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message submitted! (Note: No backend is connected yet)");
});

// FAQ toggle interaction
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
