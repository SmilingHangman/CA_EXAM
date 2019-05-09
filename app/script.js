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
    var x = document.forms["contactForm"]["firstnamecont", "lastnamecont", "phonenumbercont"].value;
    if (x == "") {
      alert("Please fill out all fields.");
      return false;
    }
  }

// swiper
// var mySwiper = new Swiper ('.swiper-container', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 60,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});