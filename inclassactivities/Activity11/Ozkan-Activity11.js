$(document).ready(function() {
    // Event handler for the click event on the sidebar links
    $('#nav_list a').click(function(event) {
      event.preventDefault(); // Prevent the default link behavior
  
      // Retrieve the JSON file name from the "title" attribute of the clicked link
      var jsonFileName = $(this).attr('title') + '.json';
  
      // Clear the existing elements from the main element
      $('main').empty();
  
      // Perform an AJAX request to retrieve the JSON data
      $.ajax({
        url: 'json_files/' + jsonFileName,
        dataType: 'json',
        success: function(data) {
          // Build the HTML elements using the retrieved data
          var html = '<h1>' + data.speakers[0].title + '</h1>';
          html += '<img src="' + data.speakers[0].image + '">';
          html += '<h2>' + data.speakers[0].month + '<br>' + data.speakers[0].speaker + '</h2>';
          html += '<p>' + data.speakers[0].text + '</p>';
  
          // Append the HTML elements to the main element
          $('main').append(html);
        },
        error: function() {
          console.log('Error occurred while retrieving JSON data.');
        }
      });// end ajax
    });//end evnt listener
  });//end ready