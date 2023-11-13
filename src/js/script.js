jQuery(function ($) {
  // ハンバーガーメニュー
  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("is-open");
    if ($(this).hasClass("is-open")) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  // backgroundまたはページ内リンクをクリックで閉じる
  $(".js-drawer a[href]").on("click", function () {
    closeDrawer();
  });

  $(window).on('resize', function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  });

  // page-top
  $('.js-page-top').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
  }

  // スワイパー（MV）
  const swiper1 = new Swiper('.js-mv-swiper', {
    loop: true,
    effect: "fade",
    speed: 2000,
    allowTouchMove: false,
    autoplay: {
      delay: 2000,
    },
  });

  // スワイパー(campaign)
  const swiper2 = new Swiper(".js-campaign__swiper", {
    spaceBetween: 24,
    loop: true,
    loopAdditionalSlides: 4,
    loopedSlides: 8,
    // maxBackfaceHiddenSlides:8,
    width: 280,
    speed: 1500,
    autoplay: {
    disableOnInteraction: false,
    },
    allowTouchMove: true,
    breakpoints: {
    768: {
    spaceBetween: 40,
    width: 333,
  },
},
    navigation: {
    nextEl: ".js-swiper-button-prev",
    prevEl: ".js-swiper-button-next",
  },
});
});

// ページトップボタン
$(function () {
const pageTop = $(".js-page-top");
pageTop.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    pageTop.fadeIn();
  } else {
    pageTop.fadeOut();
  }
});
pageTop.click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

// フッター手前でストップ
$(".js-page-top").hide();
$(window).on("scroll", function () {
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop();
  footHeight = $(".footer").innerHeight();
  if (scrollHeight - scrollPosition <= footHeight) {

// ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
    $(".js-page-top").css({
      position: "absolute",
      bottom: footHeight+ 20,
    });
  } else {
    $(".js-page-top").css({
      position: "fixed",
      bottom: "20px",
    });
  }
});
});


//要素の取得とスピードの設定
var box = $('.js-colorbox'),
speed = 300;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
$(this).append('<div class="color"></div>')
var color = $(this).find($('.color')),
image = $(this).find('img');
var counter = 0;

image.css('opacity','0');
color.css('width','0%');
//inviewを使って背景色が画面に現れたら処理をする
color.on('inview', function(){
  if(counter == 0) {
    $(this)
    .delay(400)
    .animate({'width':'100%'},speed,function(){
      image.css('opacity','1');
      $(this).css({'left':'0' , 'right':'auto'});
      $(this).animate({'width':'0%'},speed);
    })
    counter = 1;
  }
});
});
