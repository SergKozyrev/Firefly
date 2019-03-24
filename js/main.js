var sections = $('section'),
  nav = $('.page-header'),
  nav_height = nav.outerHeight() + 111;

// Подсветка пункта меню в зависимости от секции
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.menu-link').removeClass('active');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
  });
});

// Скрол к секции в зависимости от пункта меню по кторому был клик
nav.find('.menu-link').on('click', function () {
  var $el = $(this),
    id = $el.attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height + 111
  }, 500);
  return false;
});

$(document).ready(function () {
  var show = true;
  var countbox = ".advantages";
  // Показать/Скрыть меню
  $(".collapse-menu").on("click", function () {
    $(this).toggleClass("is-active");
    $(".header-menu").toggleClass("is-active");
  });

  // Анимация чисел при скролле
  $(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.advantage-count').spincrement({
        thousandSeparator: "",
        from: 0,
        to: null,
        duration: 7000
      });
      show = false;
    }
  });
});