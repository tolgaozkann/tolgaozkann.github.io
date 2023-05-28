$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
	  var swappedImage = new Image();
	  swappedImage.src = $(this).attr("href");
	});
  
	// set up event handlers for links
	$("#image_list a").click(function(evt) {
	  var imageURL = $(this).attr("href");
	  //set up title 
	  var caption = $(this).attr("title");
  
	  // Fade out the caption and image
	  $("#caption, #image").fadeOut(1000, function() {
		// Callback function after fadeOut completes
		// Display the new caption and image
		$("#caption").text(caption);
		$("#image").attr("src", imageURL);
  
		// Fade in the caption and image
		$("#caption, #image").fadeIn(1000);
	  });

	  // cancel the default action of the link
	  evt.preventDefault();
	});
  
	// move focus to first thumbnail
	$("li:first-child a").focus();
  });//end ready
  