window.onscroll = function () {
  myFunction();
};


$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Scroll
const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// loader
let loader = document.querySelector(".loader");
window.addEventListener("load", monika);

function monika() {
  loader.classList.add("disappear");
}

// slider
var team = $(".team-carousel");
team.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
$(".service-carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
$(".testimonial-carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
    },
  },
});
var team = $(".team-carousel");
team.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
team.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    team.trigger("next.owl");
  } else {
    team.trigger("prev.owl");
  }
  e.preventDefault();
});
// nav ============================================

// Home 3 Testimonila Code

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

let index = 0;
display(index);
function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}
function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// header toggle

$(document).ready(function () {
  $(".search-icon").click(function () {
    $(".search-icon").toggleClass("active"); //search icon change onClick
    $(".search-box").toggleClass("active"); //box show when click on icon
    $("header").toggleClass("active-search"); //In mobile logo and bars                                             hide when search box show
  });
});
/*sub-menu visible on click  */

$(document).ready(function () {
  $("ul li").click(function () {
    $(this).siblings().removeClass("active"); //remove active 									class when click again

    $(this).toggleClass("active"); //Add Active class first click
  });
});

$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active"); //change menu icon onClick

    $("header").toggleClass("active-menu"); //hide logo and search 							icon when click on menu icon in mobile
  });
});

// home3 works section slider
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
  });
  $("ul li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
  });
});

// home3 works section slider
// current date taking start
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
document.getElementById("datetime1").innerHTML = dt.toLocaleDateString();
document.getElementById("datetime2").innerHTML = dt.toLocaleDateString();
document.getElementById("datetime3").innerHTML = dt.toLocaleDateString();

// current date taking end

//news single
const categoriesHeaders = document.querySelectorAll(".category-item-header");

categoriesHeaders.forEach((categoriesHeader) => {
  categoriesHeader.addEventListener("click", (event) => {
    categoriesHeader.classList.toggle("active");
  });
});
