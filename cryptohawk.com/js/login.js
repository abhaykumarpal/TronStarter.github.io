jQuery(document).ready(function () {
	if(jQuery("#phone").length) {
		jQuery("#phone").intlTelInput({
			// allowDropdown: false,
			// autoHideDialCode: false,
			// autoPlaceholder: "off",
			// dropdownContainer: "body",
			// excludeCountries: ["us"],
			// formatOnDisplay: true,
			// geoIpLookup: function(callback) {
			//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
			//     var countryCode = (resp && resp.country) ? resp.country : "";
			//     callback(countryCode);
			//   });
			// },
			hiddenInput: "code",
			initialCountry: "de",
			// nationalMode: false,
			// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
			// placeholderNumberType: "MOBILE",
			preferredCountries: ['de', 'ch'],
			separateDialCode: true,
			utilsScript: "js/utils.js"
		});
	}
	jQuery('.lost_pass').on('click',function () {
		if(jQuery('.lost_pass_form').hasClass('open')){
			jQuery('.lost_pass_form').removeClass('open');
			jQuery('.login_form').addClass('open');
		}else{
			jQuery('.login_form').removeClass('open');
			jQuery('.lost_pass_form').addClass('open');
		}
	});
});