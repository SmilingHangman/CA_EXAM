// navigation scroll below
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
    {
        scrollTop: $($(this).attr('href')).offset().top-70,
    },
    600,
    'linear'
    )
})

// form validaton below
function validateFormA() {
    var x = document.forms["freeTrialForm"]["firstname", "lastname", "phonenumber"].value;
    if (x == "") {
      alert("Please fill out all fields.");
      return false;
    }
  }

function validateFormB() {
    var xx = document.forms["contactForm"]["firstnamecont", "lastnamecont", "phonenumbercont"].value;
    if (xx == "") {
      alert("Please fill out all fields.");
      return false;
    }
  }