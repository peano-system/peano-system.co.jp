/******************************************************************************/
/* ページ内のアンカーへのリンクをクリックした際のスクロールする挙動 */
/******************************************************************************/
$(function() {
	"use strict";
    $("a[href^='#']").click(function(){
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
(function($) {
	"use strict";
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
(function($) {
	"use strict";
    $.fn.globalNav = function() {
        return this.each(function() {
        	var $window = $(window);
        	var $this = $(this);
	        // リサイズ後の遅延実行 xs PC・タブレットで表示
			var timer = false;
		    $window.resize(function() {
		        if(timer !== false) {
		            clearTimeout(timer);
		        }
		        timer = setTimeout(function() {
				    if ($window.width() > 769) {
				        $this.find('ul').show();
				    } else {
				        $this.find('ul').hide();
				    }
				});
	        });
		    // スクロール後のナビ位置固定
		    $window.scroll(function() {
		        if ($window.scrollTop() > 90) {
                    $this.addClass('fixed');
		        } else {
		            $this.removeClass('fixed');
		        }
		    });
		    // ボタン押下時のトグル処理
		    $this.find('.btn-nav').on('click', function() {
				$this.find('ul').toggle(500);
		    });
	    });
    };
})(jQuery);

//**********************************************************************/
//電話番号 タップでコール
//**********************************************************************/
$(function() {
	"use strict";
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
	"use strict";
	$('nav').globalNav({});
    $('#btn-scroll').btnScroll({});
});
