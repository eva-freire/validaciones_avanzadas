(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

/*
  var password = document.getElementById("password1");
  let confirm_password = document.getElementById("confirm_password");

  function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Las contraseñas no son iguales");
  } else {
    confirm_password.setCustomValidity('Las contraseñas no son iguales');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

*/

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");
  let validityState = password.checkValidity;

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("las contraseñas no son iguales");
  } else {
    confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var terminos = document.getElementById('terminos');

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var formulario = document.getElementById('formulario');


formulario.addEventListener('submit',function(e){
    e.preventDefault();
})


function validateTerminos() {
    var terminos = document.getElementById('terminos');
    if (terminos.checkValidity()) { // No es necesario comparar con true
        let checkTerminos = document.getElementById('checkTerminos');

        checkTerminos.classList.remove('d-none');
        checkTerminos.classList.add('d-flex');
        checkTerminos.setAttribute('checked', true);
    } else {
        checkTerminos.classList.add('d-none');
        checkTerminos.classList.remove('d-flex');
    }
}
