
//fancy messenger plugin 
$(document).ready(function () {
  $.fancyMessenger({
    onSend: function (obj) {
      // Send your message here.
      console.log($(obj).find("textarea").val());
      return true;
    },
    available: {
      fromHour: 8,
      untilHour: 16
    }
  });

  $.fancyMessenger({
    available: {
      timezone: "Europe/Stockholm",
      fromHour: 0,
      untilHour: 0
    }
  });

  $.fancyMessenger({
    text: {
      heading: 'Send us a message!',
      body: '<form><input class="form-control form-control-sm" type="email" placeholder="Your e-mail address" /><textarea class="form-control form-control-sm" placeholder="Your message"></textarea><button class="btn btn-light btn-sm">Send</button></form>',
      sent: 'Message sent!',
      invalidEmail: 'Invalid e-mail!'
    },
  });

  $.fancyMessenger({
    text: {
      heading: 'Send us a message!',
      body: '<form><input class="form-control form-control-sm" type="email" placeholder="Your e-mail address" /><textarea class="form-control form-control-sm" placeholder="Your message"></textarea><button class="btn btn-light btn-sm">Send</button></form>',
      sent: 'Message sent!',
      invalidEmail: 'Invalid e-mail!'
    },
  });

  $.fancyMessenger({
    closeOnSend: false
  });
});


$(document).ready(function () {
  // Click event handler for sidebar links
  $("#nav_list li a").on("click", function (event) {
    event.preventDefault();

    // Get the title from the clicked link
    var title = $(this).attr("title");

    // Make an AJAX request to retrieve the aboutus.json file
    $.ajax({
      url: "json/aboutus.json",
      dataType: "json",
      success: function (data) {
        // Find the object in the aboutus array that matches the clicked link's title
        var aboutItem = data.aboutus.find(function (item) {
          return item.title === title;
        });

        if (aboutItem) {
          // Replace the content of the paragraph element with the data from the JSON file
          $("#paragraph").html("<h2>" + aboutItem.title + "</h2><p>" + aboutItem.content + "</p>");
        }
      },
      error: function () {
        // Handle error if the aboutus.json file could not be retrieved
        console.log("Error retrieving JSON data.");
      }
    });
  });
});


$(document).ready(function () {
  var url =
    "https://api.flickr.com/services/feeds/photos_public.gne?" +
    "format=json&jsoncallback=?&tags=waterfall,yosemite";
  $.getJSON(url, function (data) {
    var html = "";
    $.each(data.items, function (i, item) {
      html += "<div class='item'><img src='" + item.media.m + "'></div>";
    });
    $("#owl-demo").html(html);

    // Initialize the Owl Carousel
    $("#owl-demo").owlCarousel({
      navigation: true, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      items: 1,
      autoPlay: true,
      autoPlaySpeed: 1000,
      autoPlayTimeout: 1000,
      autoplayHoverPause: true
    });
  });
});