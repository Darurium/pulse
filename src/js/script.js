$(document).ready(function(){

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

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

    
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
			  e.preventDefault();
			  $('.catalog-card__content').eq(i).toggleClass('catalog-card__content_active');
			  $('.catalog-card__list').eq(i).toggleClass('catalog-card__list_active');
			})
		})
	}

	toggleSlide('.catalog-card__more');
  	toggleSlide('.catalog-card__back');

// Модальные окна
  
	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn('slow');
	})
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});
  $('.button_mini').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog-card__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
    })

// Валидация форм

	function validatForm(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
				required: true,
				email: true
				}
			},
			messages: {
				name: "Введите имя",
				phone: "Введите свой телефон",
				email: {
					required: "Введите свой адрес",
					email: "Неправильно введен email"
				}
			}
		});
	}

	validatForm('#consultation form')
	validatForm('#order form')
	validatForm('#consultation-form')

// Маска инпутов

$("input[name=phone]").mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
	e.preventDefault;
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function(){
		$(this).find('input').val('');
		$('#consultation, #order').fadeOut();
		$('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
	});
	return false;
});

// scroll page up

$(window).scroll(function(){
	if ($(this).scrollTop() > 1600 ) {
		$('.page-up').fadeIn();
	}
	else {
		$('.page-up').fadeOut();
	}
})

// Плавный скрол

$("a[href^='#']").click(function(){
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});


});
