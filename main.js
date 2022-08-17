var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}


function hideMenu() {
  navLinks.style.right = "-200px";
}

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay:3000,
    disableOnInteraction:false,
  },
  
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

