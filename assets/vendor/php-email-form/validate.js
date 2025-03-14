/**
* FormSubmit Form Validation - v1.0
* Dimodifikasi untuk bekerja dengan FormSubmit.co
* Berdasarkan PHP Email Form v3.5
*/

(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      // FormSubmit akan menangani pengiriman form, jadi kita tidak perlu mencegah default behavior
      // event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      
      if (!action) {
        displayError(thisForm, 'Form action property tidak ditemukan!');
        return;
      }

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // FormSubmit akan menangani pengiriman form, jadi kita tidak perlu menambahkan logika AJAX di sini
      // Namun, kita tetap mempertahankan tampilan loading untuk UX yang lebih baik
      
      // Kita tidak perlu menambahkan logika lain karena FormSubmit akan menangani pengiriman dan redirect
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
