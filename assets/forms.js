// Forms post to MailerLite in a hidden frame, then show a thank-you note in place.
document.querySelectorAll('form[target]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    if (form.querySelector('[name="website"]').value) { e.preventDefault(); return; }
    // Combine checkbox groups into one text field, since MailerLite stores text.
    form.querySelectorAll('[data-join]').forEach(function (hidden) {
      var g = hidden.getAttribute('data-join');
      var vals = Array.prototype.map.call(form.querySelectorAll('[data-group="' + g + '"]:checked'), function (c) { return c.value; });
      var other = form.querySelector('[data-group="' + g + '-other"]');
      if (other && other.value.trim()) vals.push('Other: ' + other.value.trim());
      hidden.value = vals.join('; ');
    });
    setTimeout(function () {
      form.reset();
      form.querySelector('.thanks').style.display = 'block';
    }, 400);
  });
});
