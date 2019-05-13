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

// Swiper for Features section
let featuresSwiper = new Swiper ('.swiper-container-interactive', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
})

let smallboxeswow = document.querySelectorAll(".selectfeature");
for (let i = 0; i < smallboxeswow.length; i++) {
  smallboxeswow[i].addEventListener("click", function() {
    for (let j = 0; j < smallboxeswow.length; j++){
      smallboxeswow[j].classList.remove("active");
    }
    this.classList.add("active");
    let slideNumber = this.getAttribute("data-slide");
    featuresSwiper.slideTo(slideNumber-1, 300);
  })
}

featuresSwiper.on("slideChange", function () {
  let slideIndex = featuresSwiper.activeIndex;
  for (let j = 0; j < smallboxeswow.length; j++){
    smallboxeswow[j].classList.remove("active");
  }
  smallboxeswow[slideIndex].classList.add("active");
 });


// swiper
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