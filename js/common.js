//=======================  tabs  =======================
$(".tab_item").not(":first").hide();
$(".inf-tab .tab").click(function () {
    $(".inf-tab .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// slide down user
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

// gallery for product
$(document).ready(function(){
  $("h2").append('<em></em>')
  $(".thumbs a").click(function(){
    var largePath = $(this).attr("href");
    var largeAlt = $(this).attr("title");
    $("#largeImg").attr({ src: largePath, alt: largeAlt });
    $("h2 em").html(" (" + largeAlt + ")"); return false;
  });
});