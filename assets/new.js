/**
 * ADDITIONAL JS GOES HERE
 */


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

 $(document).ready(function() {


   if (!$.cookie("alert-close")) {
		$('.alert-bar').show();
	}

    $('.alert-bar-close').click(function() {
      $('.alert-bar').hide();
      $.cookie("alert-close", 1, { expires : 7 });
	});

	$('.alert-bar-close').on('keydown', function(event) {
		if(event.originalEvent.key == "Enter"){
			$('.alert-bar').hide();
			$.cookie("alert-close", 1, { expires : 7 });
		}
	});



	// FORMS VALIDATION / SUBMITTING

 	$("#form-contact-reason").change(function() {
 		if ($(this).val()=="Order Status & Shipment") $(".lead-form .hidden-field").fadeIn("fast");
 		else $(".lead-form .hidden-field").fadeOut("fast");
 	});
 	$("#form-emerging input[name='entry.1338641831']").change(function() {
 		if ($(this).val()=="Yes") $(".lead-form .hidden-field").fadeIn("fast");
 		else $(".lead-form .hidden-field").fadeOut("fast");
 	});

 	$(".form-hidden-iframe").load(function() {
 		if (formSubmitted) {
 			$(".lead-form .elements").hide();
 			$(".lead-form .error").hide();
 			$(".lead-form .response").fadeIn("fast");
 		}
 	});

 	$(".lead-form").submit(function(event) {

 		var errors = false;
 		$(this).find("input.required, select.required, textarea.required").each(function (index) {
 			if ($(this).val().trim()=="") {
 				$(this).addClass("input-error");
 				errors = true;
 			}
 		});

 		if (errors) {
 			event.preventDefault();
 			$(this).find(".error-message").fadeIn("fast");
 		} else {
 			$(this).find(".error-message").hide();
 			$(this).find(".input-error").removeClass("input-error");
 			$(this).find(".submit").attr("disabled", true).css("opacity", ".5");
 		}

 		/*$.ajax({
 			type: $(this).attr("method"),
 			url: $(this).attr("action"),
 			data: $(this).serialize()
 		}).done(function() {
 			$(this).find(".elements").hide();
 			$(this).find(".error").hide();
 			$(this).find(".response").fadeIn("fast");
 		}).fail(function() {
 			$(this).submit();
 		});*/
 	});

   $('.filter-by').click(function() { $('.selection-header').toggle(); $('.filter-by-arrow-up').toggle(); $('.filter-by-arrow-down').toggle(); $('.product-categories').toggle(); });

 });/**
 * ADDITIONAL JS GOES HERE
 */
