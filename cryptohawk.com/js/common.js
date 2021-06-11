jQuery(document).ready(function () {
	var section = jQuery(".section_3");
	var ul = jQuery(".section_3 .box > ul");

	if(jQuery( window ).width() > 767){
		section.bind('DOMSubtreeModified', function (e) {
			if (jQuery(this).hasClass("active")) {
				autoSelectItem();
			}
		});
	}

	if(jQuery( window ).width() < 767) {
		jQuery(".subbox").click(function () {
			if (jQuery(this).parent().hasClass("active")) {
				jQuery(this).parent().removeClass("active");
			}
		});
	}

	ul.find('> li').hover(function () {
		var $this = jQuery(this);
		ul.children().removeClass("active");
		$this.addClass('active');
	});

	jQuery('.dashboard_popup .title').on('click',function () {
		jQuery('.dashboard_popup').toggleClass('open');
		jQuery('.dashboard_popup .content >ul >li').removeClass('open');
	});
	jQuery('.dashboard_popup .close').on('click',function () {
		jQuery('.dashboard_popup, .dashboard_popup .content >ul >li').removeClass('open');
	});
	jQuery('.dashboard_popup .level_title').on('click',function () {
		var $this = jQuery(this);
		if(!$this.parent().hasClass('open')){
			jQuery(".dashboard_popup ul li").removeClass('open');
		}
		$this.parent().toggleClass('open');
	});

	setBodyBoxHeight();

});

jQuery(window).resize(function () {
	/*
	 * =================================================================================================================
	 * ---------- Window resize ----------------------------------------------------------------------------------------
	 */
	setBodyBoxHeight();
});

function autoSelectItem() {
	var ul = jQuery(".section_3 .box > ul");
	setTimeout(function () {
		if (!isActive(ul)) {
			ul.children(":first").addClass("active");
		}
	}, 1000);
}

function isActive(item) {
	return item.children().hasClass("active");
}

function setBodyBoxHeight() {
	setTimeout(function () {
		headerHeight = jQuery(".fixed_header").height();
		winHeight = jQuery(window).height();

		jQuery('.body_box').each(function( ) {
			var $this = jQuery(this);
			if($this.height() < winHeight){
				$this.css("height",winHeight-(headerHeight+25));
			}else{
				$this.css("height","");
			}
		});
	},400);

}