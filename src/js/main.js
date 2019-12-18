console.log("main.js");


//Nav color change 
$(".nav-item", "nav-bar-blue").on("click", function(e){
    $("a.nav-item").removeClass("active");
    $(this).addClass("active");
});




