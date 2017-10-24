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


// Add for product, bigger photo onclick
$(document).ready(function() { // Ждём загрузки страницы
  $(".image").click(function(){	// Событие клика на маленькое изображение
    var img = $(this);	// Получаем изображение, на которое кликнули
    var src = img.attr('src'); // Достаем из этого изображения путь до картинки
    $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
        "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
        "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
        "</div>");
    $(".popup").fadeIn(800); // Медленно выводим изображение
    $(".popup_bg").click(function(){	// Событие клика на затемненный фон
      $(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
      setTimeout(function() {	// Выставляем таймер
        $(".popup").remove(); // Удаляем разметку всплывающего окна
      }, 800);
    });
  });
});