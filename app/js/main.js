jQuery.noConflict();
jQuery(function($) {

	$(document).ready(function() {


		$("#login-form").validate();
		$( "#login-form" ).validate({
		  rules: {
		    confirm_1: {
		      require_from_group: [1, ".confirmCode"]
		    },
		    confirm_2: {
		      require_from_group: [1, ".confirmCode"]
		    },
		    confirm_3: {
		      require_from_group: [1, ".confirmCode"]
		    },
		    confirm_4: {
		      require_from_group: [1, ".confirmCode"]
		    },
		    confirm_5: {
		      require_from_group: [1, ".confirmCode"]
		    },
		    confirm_6: {
		      require_from_group: [1, ".confirmCode"]
		    },
		  }
		});

	}); //End document ready

}); // End jQuery
