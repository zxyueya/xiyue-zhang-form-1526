let fm = document.getElementById('contact');
let fn = document.getElementById('fullname');
let em = document.getElementById('email');
let me = document.getElementById('message');
let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function fromValidator(ev) {
  
    ev.preventDefault();

    // start with these 2 empty buckets at the beginning
    let errors = [];
    let data = {}; 

    // validation for full name
    if (fn.value !== '') {
        data.fullName = fn.value;
    } else {
        errors.push('Full name is missing');
    }

    // validation for email
    if (em.value !== '') {
       if (regEmail.test(em.value)) {
         data.em = em.value;
         console.log("Email is valid");
       } else {
          console.log("Email is invalid");
       }
    } else if (em.value == '') {
        errors.push('Email is missing');
    }

    // validation for message
    if (me.value !== '') {
        data.message = me.value;
    } else {
        errors.push('Message is missing');
    }

    if (errors.length == 0) {
       console.log('Collected Data');
       console.log(data);
       document.getElementById('contact').reset();
    } else {
       console.log('Errors');
       console.log(errors);
    }
}

fm.addEventListener('submit', fromValidator);
