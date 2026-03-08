// ============================================================
// script.js — Shri Sudarshan General Stores
// Purpose: Scroll Reveal Animation
// ============================================================

// Select all elements that have the class "reveal"
// These start invisible (defined in CSS as opacity: 0)
const reveals = document.querySelectorAll('.reveal');

// IntersectionObserver watches elements and fires when they
// enter or exit the visible screen area
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Element is now visible on screen — add 'visible' class
      // Small delay per element creates a staggered reveal effect
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80); // 80ms delay between each element

      // Stop watching this element once it has appeared
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // trigger when 10% of element is visible

// Start observing every reveal element
reveals.forEach(el => observer.observe(el));
