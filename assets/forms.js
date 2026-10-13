// Forms post to MailerLite in a hidden frame, then show a thank-you note in place.
document.querySelectorAll('form[target]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    if (form.querySelector('[name="website"]').value) { e.preventDefault(); return; }
    setTimeout(function () {
      form.reset();
      form.querySelector('.thanks').style.display = 'block';
    }, 400);
  });
});
