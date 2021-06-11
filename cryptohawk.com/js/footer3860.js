jQuery(document).ready(function () {

	jQuery('.accordion li .title').on('click',function () {
		var $this = jQuery(this);
		var current = $this.closest('li');
		var li = $this.closest('.accordion').find('li');
		li.removeClass('open');
		current.addClass('open');
	});


	jQuery('.scroll_slider').fullpage({
		//menu: '.fixed_header',
		//paddingTop: "180px",
		navigation: true,
		navigationTooltips: [
		//	'Start',
		//	'Explore us',
		//	'Core Features',
		//	'Benefits',
		//	'Investment',
		//	'Advisors',
		//	'F.A.Q',
		//	'Media',
		//	'Join Now'
		],
		showActiveTooltip: true,
		normalScrollElements:".accordion",
		scrollOverflow: true,

		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);

			//использование индекса
			if(index == 4){
				grafic();
			}

		}
	});

	var countDownDate = new Date("MAR 12, 2018 00:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;

		if (distance > 0) {
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);


			jQuery('.time .days .count').html(days);
			jQuery('.time .hours .count').html(hours);
			jQuery('.time .minutes .count').html(minutes);
			jQuery('.time .seconds .count').html(seconds);

			// If the count down is over, write some text
		} else {
			clearInterval(x);
		}
	}, 1000);

	jQuery('.carusel .items .item').each(function (i, e) {
		var $this = jQuery(this).attr('data-item',(i+1));
	});
	carusel();
	setInterval(function () {
		carusel();
	}, 8000);

});

function grafic(){

}
function carusel() {
	console.log('-----');
	jQuery('.carusel .items .item').each(function (i, e) {
		var $this = jQuery(this);
		//console.log($this);
		var item_id = parseInt($this.attr('data-item'));

		$this.removeClass('item_'+item_id);

		if((item_id + 1)>12){
			console.log('yes');
			item_id = ((item_id+1) - 12);

		}else {
			item_id = (item_id+1);

		}
		$this.attr('data-item', item_id);
		$this.addClass('item_'+item_id);

	})
	console.log('-----');
}