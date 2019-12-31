"use strict";

console.log("main.js"); //Nav color change 

$(".nav-item").on("click", function (e) {
  $("a.nav-item").removeClass("active");
  $(this).addClass("active");
}); //Scrollmagic for Nav to Change colors
// init controller

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 400
  }
}); // build scenes

new ScrollMagic.Scene({
  triggerElement: ".spacer1"
}).setClassToggle("#high1", "active") // add class toggle
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);
new ScrollMagic.Scene({
  triggerElement: ".spacer2"
}).setClassToggle("#high2", "active") // add class toggle
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);
new ScrollMagic.Scene({
  triggerElement: ".spacer3"
}).setClassToggle("#high3", "active") // add class toggle
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);
new ScrollMagic.Scene({
  triggerElement: ".spacer4"
}).setClassToggle("#high4", "active") // add class toggle
// .addIndicators() // add indicators (requires plugin)
.addTo(controller); // LightBox Modal

jQuery(document).ready(function ($) {
  $('.lightbox').click(function (e) {
    //prevent default action (hyperlink)
    e.preventDefault(); //Get clicked link href

    var image_href = $(this).attr("href");
    /* 	
    If the lightbox window HTML already exists in document, 
    change the img src to to match the href of whatever link was clicked
    
    If the lightbox window HTML doesn't exists, create it and insert it.
    (This will only happen the first time around)
    */

    if ($('#lightbox').length > 0) {
      // #lightbox exists
      //place href as img src value
      $('#content').html('<img src="' + image_href + '" />'); //show lightbox window - you could use .show('fast') for a transition

      $('#lightbox').show('fast');
    } else {
      //#lightbox does not exist - create and insert (runs 1st time only)
      //create HTML markup for lightbox window
      var lightbox = '<div id="lightbox">' + '<p>Click to close</p>' + '<div id="content">' + //insert clicked link's href into img src
      '<img src="' + image_href + '" />' + '</div>' + '</div>'; //insert lightbox HTML into page

      $('body').append(lightbox);
    }
  });
  $('#lightbox').click(function () {
    alert("clicked");
    $('#lightbox').css('display', 'none');
  });
});
//# sourceMappingURL=main.js.map
