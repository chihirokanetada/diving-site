jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-open");
    $(".js-drawer").fadeToggle();
    $("body").toggleClass("active");
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    $(".js-drawer").toggleClass("is-open");
    $(".drawer-menu").toggleClass("is-open");
    $("html").toggleClass("is-fixed");
  });

  // mvスワイパー
  const swiper1 = new Swiper(".js-mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // campaignスワイパー
  const swiper2 = new Swiper(".js-campaign-swiper", {
    spaceBetween: 24,
    loop: true,
    loopAdditionalSlides: 4,
    loopedSlides: 8,
    width: 280,
    speed: 3000,
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

  // ページトップ
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // 100pxスクロールしたら発火
      pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500 // 500ミリ秒かけてページトップに戻る
    );
    return false;
  });

  $(document).ready(function () {
    let scrollHeight, scrollPosition, footHeight;
    $("js-page-top").hide();
    $(window).on("scroll", function () {
      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $("footer").innerHeight();

      if (scrollHeight - scrollPosition <= footHeight) {
        $("js-page-top").css({
          position: "absolute",
          bottom: footHeight + 20,
        });
      } else {
        $("js-page-top").css({
          position: "fixed",
          bottom: "20px",
        });
      }
    });

    $("#page-top").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });
  });

  //イメージアニメーション
  // スクロールして表示領域に入ったらclass付与
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });

  //要素の取得とスピードの設定
  var box = $(".js-colorbox"),
    speed = 500;

  //.js-colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  //  アコーディオン
  $('.js-page-faq-question').click(function() {
    $(this).toggleClass('selected');
    $(this).next().slideToggle();
  });
});

// campaignとvoiceの上部のタブ
$('.js-campaign-tab-item,.js-voice-tab-item').on('click', function () {
  $('.js-campaign-tab-item').removeClass('is-active');
  $('.js-campaign-tab-card').removeClass('is-active');
  $(this).addClass('is-active');
  var number = $(this).data("number");
  $('#' + number).addClass('is-active');
});

// モーダル
$("#main img").click(function() {
  $(".gallery__display").html($(this).prop('outerHTML'));
  $(".gallery__display").fadeIn(200);
});
$(".gallery__display, .gallery__display img").click(function() {
  $(".gallery__display").fadeOut(200);
});

// informationの上部のタブ
$('.js-tab-menu').on('click', function () {
  $('.js-tab-menu').removeClass('is-active');
  $('.js-tab-content').removeClass('is-active');
  $(this).addClass('is-active');
  var number = $(this).data("number");
  $('#' + number).addClass('is-active');
});


