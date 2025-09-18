// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', () => {
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const el = document.querySelector(this.getAttribute('href'));
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(window.innerWidth <= 600) nav.style.display = 'none';
  });
});

// Form submission handling with fetch (works when you replace {YOUR_FORM_ID} in action)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form && form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending...';
  status.style.color = 'green';
  const action = form.getAttribute('action');
  const formData = new FormData(form);
  try {
    const res = await fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      status.textContent = '✅ Your message has been sent successfully. I’ll get back to you soon!';
      form.reset();
    } else {
      const data = await res.json();
      status.textContent = data.error || 'Oops! There was a problem sending your message.';
      status.style.color = 'red';
    }
  } catch (err) {
    status.textContent = 'Network error. Please try again later.';
    status.style.color = 'red';
  }
});
