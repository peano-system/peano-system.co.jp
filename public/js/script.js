/******************************************************************************/
/* ページ内のアンカーへのリンクをクリックした際のスクロールする挙動 */
/******************************************************************************/
$(function() {
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html, body').animate({ scrollTop:position }, speed, "swing");
        return false;
    });
});

/******************************************************************************/
/* ページのトップまでスクロールして戻るボタンの挙動 */
/******************************************************************************/
(function($){
    $.fn.btnScroll = function() {
        var speed = 300;
        return this.each(function() {
            $(window).bind('scroll', function() {
                if($(window).scrollTop() > 150) {
                    $(this).fadeIn('fadeIn');
                } else {
                    $(this).fadeOut();
                }
            });
            $(this).on('click', function() {
                $('html, body').animate({ scrollTop: 0 }, 'speed', 'swing');
            });
        });
    };
})(jQuery);

//**********************************************************************/
//グローバルナビ
//**********************************************************************/
function naviBtnFunc() {
    //ウィンドウサイズを取得
        var wWidth = $(window).width();

    //ウィンドウサイズがPC用の時
    if (wWidth > 769) {
        $('.mainNav').css('display', 'block');
    } else { //ウィンドウサイズがスマホ用の時
        $('.mainNav').css('display', 'none');
    }
}
$(function() {
    $('.mainNavBtn').click(function() {
        $('.mainNav').slideToggle(500);
    });
});

//スクロールしたらGナビを固定
$(function() {
    // var offset = $('.mainNav').offset();
    // console.log(offset);
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 90 ) {
            $('.mainNav').addClass('mainNavFixed');
        } else {
            $('.mainNav').removeClass('mainNavFixed');
        }
    });
});

//リサイズ操作が終わった時だけ処理を実行する
var timer = false;
$(function(){
    $(window).resize(function() {
        if(timer !== false) {
            clearTimeout(timer);
        }
        //200ミリ秒後に関数を実行させる
        timer = setTimeout(function() {
            naviBtnFunc();
            // vHeightFunc();
        }, 200);
    });
});

//**********************************************************************/
//電話番号 タップでコール
//**********************************************************************/
$(function() {
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) {
        $('.tel-link').each(function() {
            var str = $(this).html();
            $(this).html($('<a>').attr('href', 'tel:0561328087').append(str + '</a>'));
        });
    }
});

/******************************************************************************/
/* 初期化スクリプト */
/******************************************************************************/
$(function() {
    $('#btn-scroll').btnScroll();
});
