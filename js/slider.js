// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
  loop: true,
  slidesPerView: "auto",
  effect:"slide",
  autoplay:{
      delay:2000,
      disableOnIntraction:false,

  },
  
  spaceBetween: 30,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   


  on:{
      init(){
          this.el.addEventListener("mouseenter", () =>{
              this.autoplay.stop();
          });
          this.el.addEventListener("mouseleave", () =>{
            this.autoplay.start();
        })
      }
  }
    
  });
