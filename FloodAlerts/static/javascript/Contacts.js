const phoneLinks = document.querySelectorAll('.phone-numbers a');

phoneLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const phoneNumber = event.target.textContent.replace(/\s/g, '');
    window.open(`tel:${phoneNumber}`);
  });
});
