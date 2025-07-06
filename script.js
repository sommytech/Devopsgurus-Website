// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const msg = document.getElementById("formMsg");

      if (name && email.includes("@") && message) {
        msg.textContent = "Message sent successfully!";
        msg.style.color = "green";
        contactForm.reset();
      } else {
        msg.textContent = "Please fill out all fields correctly.";
        msg.style.color = "red";
      }
    });
  }
});

// Employee modal data
const employeeProfiles = {
  jane: `<h3>Jane Doe</h3><p>Jane leads our infrastructure automation and container orchestration efforts...</p>`,
  john: `<h3>John Smith</h3><p>John is our cloud solutions architect...</p>`,
  mary: `<h3>Mary Johnson</h3><p>Mary drives our CI/CD initiatives...</p>`
};

// Show employee modal
function showEmployeeDetail(key) {
  const modal = document.getElementById('employeeModal');
  const detail = document.getElementById('employeeDetail');
  if (modal && detail) {
    detail.innerHTML = employeeProfiles[key];
    modal.style.display = 'flex';
  }
}

// Hide employee modal
function closeEmployeeModal() {
  const modal = document.getElementById('employeeModal');
  if (modal) modal.style.display = 'none';
}
