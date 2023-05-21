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