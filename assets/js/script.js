const service = [
	{
		name: 'Advanced Stretching',
		img: '/assets/img/advanced-stretching.jpg',
		desc:
			'Advanced stretching is a modality that targets specific muscles to help with mobility and help with limited range of motion.',
	},
	{
		name: 'Swedish',
		img: '/assets/img/swedish.jpg',
		desc:
			'Swedish geared towards relaxation and allowing the body to heal itself.',
	},
	{
		name: 'Reiki',
		img: '/assets/img/reiki.jpg',
		desc:
			'Reiki is a healing technique used with a gentle touch to facilitate emotional and physical healing to the body.',
	},
	{
		name: 'Deep Tissue',
		img: '/assets/img/deep-tissue.jpg',
		desc:
			'Deep Tissue are for those active people who need firm pressure to help release congested tissue.',
	},
	{
		name: 'Craniosacral',
		img: '/assets/img/craniosacral.jpg',
		desc:
			'Craniosacral is a form of bodywork that includes a gentle touch to palpate and allow work on the Cervical region of the spine to help with the flow of the cerebral spinal fluid.',
	},
	{
		name: 'Cupping',
		img: '/assets/img/cupping.jpg',
		desc:
			'Cupping is form of alternative medicine that uses localized suction to help with pain, inflammation and stagnant blood.',
	},
	{
		name: 'Sports',
		img: '/assets/img/sports.jpg',
		desc:
			'Sports Massage will incorporate stretching and some traction to help the athlete perform at the fullest.',
	},
	{
		name: 'Trigger Point',
		img: '/assets/img/trigger-point.jpg',
		desc:
			'Trigger Point is used to help alleviate "knots" that have developed over time and can cause anything from extreme headaches to limited range of motion.',
	},
];
$(document).ready(function () {
	$('a[href^="#"]').on('click', function (e) {
		let target = this.hash,
			$target = $(target);
		if (
			target !== '#carouselControlsTestimonials' &&
			target !== '#carouselControlsServices'
		) {
			$('html, body')
				.stop()
				.animate(
					{
						scrollTop: $target.offset().top - 80,
					},
					100,
					'swing',
					function () {
						window.location.hash = target;
					}
				);
		}
	});
	$('.list-group-item').on('click', (e) => {
		if ($(e.target).hasClass('active')) {
			return;
		}
		let name = e.target.outerText;
		let obj = service.find((obj) => obj.name === name);
		$(e.target).addClass(() => {
			$('.list-group-item.active').removeClass('active');
			return 'active';
		});
		$('.card-text').fadeOut('slow', () => {
			$('.card-text').text(obj.desc);
			$('.card-text').fadeIn('slow');
		});
		$('.card-img-services').fadeTo(400, 0, () => {
			$('.card-img-services').attr('src', obj.img);
			$('.card-img-services').attr('alt', obj.name);
			$('.card-img-services').fadeTo(500, 1);
		});
	});
});
