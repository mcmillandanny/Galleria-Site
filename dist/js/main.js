"use strict";

console.log("main.js"); //Nav color change 

$(".nav-item").on("click", function (e) {
  $("a.nav-item").removeClass("active");
  $(this).addClass("active");
}); //Scrollmagic for Nav to Change colors
// init controller

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 300
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
.addTo(controller);
//# sourceMappingURL=main.js.map
