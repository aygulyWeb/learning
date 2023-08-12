$(document).ready(function () {
	$('.sliders').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '.next-img',
		prevArrow: '.prev-img',
		dots: false,
		autoplay: false,
		speed: 1300,
		autoplaySpeed: 3000

	});


	$('.about__sliders').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1300,
		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}

		]

	});

	$('.course__sliders').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1300,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]

	});

	$('.team-sliders').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1300,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]

	});

	$('.clients-sliders').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1300,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]

	});

	$('.blog-slide').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 1300,
		// responsive: [
		// 	{
		// 		breakpoint: 320,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,

		// 		}
		// 	},
		// 	{
		// 		breakpoint: 767,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,

		// 		}
		// 	},
		// 	{
		// 		breakpoint: 991,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2
		// 		}
		// 	}

		// ]

	});

	$('.blog-slider').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		dots: true,
		dotsClass: 'dots-styles',
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1300,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}


		]


	});

});

$(document).ready(function () {
	$('.tabs-triggers__item').click(function (e) {
		e.preventDefault();

		$('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
		$('.tabs-content__item').removeClass('tabs-content__item--active');

		$(this).addClass('tabs-triggers__item--active');
		$($(this).attr('href')).addClass('tabs-content__item--active');

	});

	$('.tabs-triggers__item:first').click();
});

// document.querySelectorAll('.gallery-tabs__trigger-item').forEach((item) =>
// 	item.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		const id = e.target.getAttribute('href').replace('#', '');


// 		document.querySelectorAll('.gallery-tabs__trigger-item').forEach(
// 			(child) => child.classList.remove('gallery-tabs__triggers-item--active')
// 		);
// 		document.querySelectorAll('.gallery-tabs__content-item').forEach(
// 			(child) => child.classList.remove('gallery-tabs__content-item--active')
// 		);

// 		item.classList.add('gallery-tabs__trigger-item--active');
// 		document.getElementById(id).classList.add('gallery-tabs__content-item--active');

// 	})
// );

// document.querySelector('gallery-tabs__trigger-item').click();


// RATING

const ratingItemsList = document.querySelectorAll('.rating__items');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
	item.addEventListener('click', () => {
		const { itemValue } = item.dataset;
		item.parentNode.dataset.totalValue = itemValue;
	})
);

// Like Button-1

var btnvar1 = document.getElementById('btn1');

function Toggle1() {
	if (btnvar1.style.color == "orange") {
		btnvar1.style.color = "white"
	}
	else {
		btnvar1.style.color = "orange"
	}
};

// Like Button-2

var btnvar2 = document.getElementById('btn2');

function Toggle2() {
	if (btnvar2.style.color == "orange") {
		btnvar2.style.color = "white"
	}
	else {
		btnvar2.style.color = "orange"
	}
};

// Like Button-3

var btnvar3 = document.getElementById('btn3');

function Toggle3() {
	if (btnvar3.style.color == "orange") {
		btnvar3.style.color = "white"
	}
	else {
		btnvar3.style.color = "orange"
	}
};

// Like Button-4

var btnvar4 = document.getElementById('btn4');

function Toggle4() {
	if (btnvar4.style.color == "orange") {
		btnvar4.style.color = "white"
	}
	else {
		btnvar4.style.color = "orange"
	}
};

// Like Button-5

var btnvar5 = document.getElementById('btn5');

function Toggle5() {
	if (btnvar5.style.color == "orange") {
		btnvar5.style.color = "white"
	}
	else {
		btnvar5.style.color = "orange"
	}
};

// Like Button-6

var btnvar6 = document.getElementById('btn6');

function Toggle6() {
	if (btnvar6.style.color == "orange") {
		btnvar6.style.color = "white"
	}
	else {
		btnvar6.style.color = "orange"
	}
};

// Like Button-7

var btnvar7 = document.getElementById('btn7');

function Toggle7() {
	if (btnvar7.style.color == "orange") {
		btnvar7.style.color = "white"
	}
	else {
		btnvar7.style.color = "orange"
	}
};

// Like Button-8

var btnvar8 = document.getElementById('btn8');

function Toggle8() {
	if (btnvar8.style.color == "orange") {
		btnvar8.style.color = "white"
	}
	else {
		btnvar8.style.color = "orange"
	}
};

