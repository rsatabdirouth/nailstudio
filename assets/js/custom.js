(function ($, window) {
	$(document).ready(function () {
		$('body').show();
		$("nav").find("li").on("click", "a", function () {
			$('.navbar-collapse.in').collapse('hide');
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.js-scrollUp').fadeIn();
			} else {
				$('.js-scrollUp').fadeOut();
			}
		});

		$('.js-scrollUp').on("click", function () {
			$("html, body").animate({ scrollTop: 0 }, 500);
			return false;
		});
		$(".expandDiv").click(function () {
			$(".expandDiv").hide();
		});

		$("#search").click(function () {
			$("#searchBody").slideToggle("slow");
		});
	});


	$(document).scroll(function () {
		scroll_start = $(this).scrollTop();
		var startchange = $('body');
		var offset = startchange.offset();
		if (scroll_start > offset.top) {
			$("#mainNav").addClass('menuNav');
			$(".js-scrollUP").show();
		} else {
			$("#mainNav").removeClass('menuNav');
			$(".js-scrollUP").hide();
		}

		$("#owl-demo").owlCarousel({

			autoPlay: 8000, //Set AutoPlay to 3 seconds

			items: 3,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3],
			navigation: true,
			navigationText: ["<img src='img/prv.png'>", "<img src='img/next.png'>"]
		});

		// Add smooth scrolling to all links
		$("#scrollbottom").on('click', function (event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {

					// Add hash (#) to URL when done scrolling (default click behavior)
					//window.location.hash = hash;
				});
			} // End if
		});

	});

})(jQuery, window);