var Layout = {
    init: function () {
        Layout.pageRender();
    },
    pageRender: function () {
        Layout.initHeight();
        Layout.initScrollTop();
    },
    initHeight: function () {
        var height;
        $("body").height() < Layout.getViewPort().height
        && (height = Layout.getViewPort().height - $(".page-header").outerHeight() - ($(".page-container").outerHeight() - $(".page-content").outerHeight()) - $(".page-prefooter").outerHeight() - $(".page-footer").outerHeight(),
            $(".page-content").css("min-height", height));

        // 监听滚动
        $(window).scroll(function() {
            var height = 75;
            $("body").hasClass("page-header-menu-fixed") && ($(window).scrollTop() > height ? $(".page-header-menu").addClass("fixed") : $(".page-header-menu").removeClass("fixed"));
            $("body").hasClass("page-header-top-fixed") && ($(window).scrollTop() > height ? $(".page-header-top").addClass("fixed") : $(".page-header-top").removeClass("fixed"));
        })
    },
    initScrollTop: function() {
        var height = 100
            , time = 500;

        // 是否手机端
        navigator.userAgent.match(/iPhone|iPad|iPod/i) ? $(window).bind("touchend touchcancel touchleave", function(o) {
            $(this).scrollTop() > height ? $(".scroll-to-top").fadeIn(time) : $(".scroll-to-top").fadeOut(time)
        }) : $(window).scroll(function() {
            $(this).scrollTop() > height ? $(".scroll-to-top").fadeIn(time) : $(".scroll-to-top").fadeOut(time)
        });

        // 回到顶部
        $(".scroll-to-top").click(function(e) {
            return e.preventDefault(),
                $("html, body").animate({
                    scrollTop: 0
                }, time), !1
        });
    },
    getViewPort: function() {
        var win = 'window', inner = 'inner';
        return "innerWidth" in window || (inner = "client", win = document.documentElement || document.body),
            {
                width: win[inner + "Width"],
                height: win[inner + "Height"]
            }
    }
};

$(document).ready(function() {
    Layout.init()
});
