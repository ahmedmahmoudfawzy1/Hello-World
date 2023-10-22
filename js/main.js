let searchBtn = document.querySelector("#searchBtn");
let searchForm = document.querySelector(".search-form");
loginForm = document.querySelector(".loginForm");
let menuBar = document.querySelector("#menu_bar");
let ancoreMenu = document.querySelector(".navBar");
let videoBtn = document.querySelectorAll(".video-btn");

function showBar() {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
}

function showForm() {
  loginForm.classList.add("active");
}
function closeForm() {
  loginForm.classList.remove("active");
}

function showmenu() {
  menuBar.classList.toggle("fa-times");
  ancoreMenu.classList.toggle("active");
}
videoBtn.forEach((slide) => {
  slide.addEventListener("click", function () {
    document.querySelector(".blue").classList.remove("blue");
    slide.classList.add("blue");
    let srcVideo = slide.getAttribute("data-src");
    document.querySelector("#video-slider").src = srcVideo;
  });
});

var swiper = new Swiper(".reviewSlider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slideseperview: 1,
    },
    768: {
      slideseperview: 2,
    },
    1024: {
      slideseperview: 3,
    },
  },
});
