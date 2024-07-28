

const tabButtonAll = document.querySelectorAll('[data-button__tub]');
const tubListAll = document.querySelectorAll('[data-list]');

tabButtonAll.forEach(function(element){
    element.addEventListener('click', function(event){
       if( element.classList.contains('active')) return;

       tabButtonAll.forEach(function(item){
        item.classList.remove('active')
       })

       element.classList.add('active');


       tubListAll.forEach(function(item){
        item.classList.remove('active');
       })
       console.log(event)

       document.querySelector('#' + event.target.dataset.button__tub).classList.add('active');


    })
})

var swiper = new Swiper(".heroSlider", {
    navigation: {
      prevEl: ".heroSliderNext",
      nextEl: ".heroSliderPrev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    
  });

 