$(document).ready(function () {

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplaySpeed: 4000,
		autoplayHoverPause: true,
		smartSpeed: 1000,

		responsive: {
			// breakpoint from 600 up
			600: {
				items: 2
			},
			// breakpoint from 800 up
			800: {
				items: 3
			},
		}
	});

	var owl = $(".owl-carousel");
	owl.owlCarousel();
	$(".next").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev").click(function () {
		owl.trigger("prev.owl.carousel");
	});
});