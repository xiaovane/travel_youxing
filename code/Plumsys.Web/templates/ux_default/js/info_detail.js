
$("#KeFuBtn").mouseenter(function () {
    $(this).removeClass("KeFuBox"),
    $(this).addClass("KeFuBoxAct")
}),
$("#KeFuBtn").mouseleave(function () {
    $(this).removeClass("KeFuBoxAct"),
    $(this).addClass("KeFuBox")
}),
$(".KeFu").click(function () {
    $(".KeFuGroup").fadeIn(100)
}),
$(".BackToTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    },
    800)
}),
$(".FixedBuyBtn").click(function () {
    $("body,html").animate({
        scrollTop: 0
    },
    800)

}),
$("#submbuy,#submbuy01").click(function () {
    var e = $(window).width(),
    t = $("#paymentDiv").width(),
    i = (e - t) / 2 + "px",
    n = $(window).height(),
    s = $("#paymentDiv").height(),
    a = (n - s) / 2 + "px";
    $.blockUI({
        message: $("#paymentDiv"),
        css: {
            cursor: "",
            left: i,
            width: t + "px",
            top: a,
            position: "fixed"
        },
        overlayCSS: {
            cursor: "default"
        }
    });
});
$(".paymentDiv_close").click(function () {
    $.unblockUI();
});
$(window).scroll(function () {
    $(window).scrollTop() < 300 ? $(".RightBox").hide() : $(".RightBox").show()
}),
$(".ACloseBtn").click(function () {
    $(".AdviseDone").hide(),
    $(".AdviseDoneThird").hide(),
    $(".AdviseDoneSecond").hide(),
    $(".AdviseUp").show(),
    $(".AdviseGroup").hide(),
    $(".KeFuGroup").hide()
}),
$(".Advise").click(function () {
    $(".AdviseGroup").fadeIn(100)
});
$(function () {
    var e = $(".tour-nav"),
    t = $(".tour-nav-wrap").offset().top,
    i = $(window).scrollTop(),
    n = 54;
    e.children().each(function () {
        $(this).on("click",
        function () {
            var t = $(this).find("a");
            if (t.hasClass("hover")) return !1;
            e.find(".hover").removeClass("hover"),
            t.addClass("hover");
            var i = t.attr("href");
            return $(window).scrollTop($(i).offset().top),
            !1
        })
    }),
    $(window).scroll(function () {
        if (i = $(window).scrollTop(), i >= t) e.parent().parent(".tour-nav-wrap").css({
            position: "fixed",
            top: 0
        }),
        $(".RightLike").css("margin-top", "310px"),
        e.parent().parent().addClass("TourNaviAct"),
        $(".tour-nav-wrap2").show();
        else {
            var s = e.children().eq(0).find("a");
            s.hasClass("hover") || (e.find(".hover").removeClass("hover"), s.addClass("hover")),
            e.parent().parent(".tour-nav-wrap").css({
                position: "static",
                top: "auto"
            }),
            $(".RightLike").css("margin-top", "50px"),
            e.parent().parent().removeClass("TourNaviAct"),
            $(".tour-nav-wrap2").hide()
        }
        e.children().each(function () {
            var t = $(this).find("a").attr("href");
            if (targettop = $(t).scrollTop(), void 0 != $(t).get(0) && $(t).offset().top <= i + n) {
                var s = e.find("a[href=" + t + "]");
                s.hasClass("hover") || (e.find(".hover").removeClass("hover"), s.addClass("hover"))
            }
        })
    })
});


