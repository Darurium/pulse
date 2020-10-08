// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel/arrow-left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel/arrow-right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//                   infinite: true,
//                   dots: true
//                 }
//             }
//             ]
//         });

// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    navContainer: false,
    controls: false,
    nav: false,    
    responsive: {      
      320: {
        nav: true,
      }
    }
  });

  document.querySelector('.next').addEventListener('click', function() {
      slider.goTo('next')
    });

  document.querySelector('.prev').addEventListener('click', function() {
      slider.goTo('prev') 
    });