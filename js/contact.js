const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('subjectError').textContent = '';
      document.getElementById('messageError').textContent = '';

      let valid = true;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
      }
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        valid = false;
      }
      if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required.';
        valid = false;
      }
      if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
        valid = false;
      }

      if (valid) {
        alert('Message sent successfully!');
        form.reset();
      }
    });

    // FAQ accordion
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        document.querySelectorAll('.accordion-body').forEach(item => {
          if (item !== body) item.classList.remove('active');
        });
        body.classList.toggle('active');
      });
    });