$("#KeFuBtn").mouseenter(function() {
    $(this).removeClass("KeFuBox"),
    $(this).addClass("KeFuBoxAct")
}),
$("#KeFuBtn").mouseleave(function() {
    $(this).removeClass("KeFuBoxAct"),
    $(this).addClass("KeFuBox")
}),
$(".BackToTop").click(function() {
    $("body,html").animate({
        scrollTop: 0
    },
    800)
}),
$(window).scroll(function() {
    $(window).scrollTop() < 300 ? $(".RightBox").hide() : $(".RightBox").show()
}),
$(".ACloseBtn").click(function() {
    $(".AdviseDone").hide(),
    $(".AdviseDoneThird").hide(),
    $(".AdviseDoneSecond").hide(),
    $(".AdviseUp").show(),
    $(".AdviseGroup").hide()
}),

$(".Advise").click(function() {
    $(".AdviseGroup").fadeIn(100)
}),




$(function() {
    $(".products").hover(function() {
        $(this).addClass("hover"),
        $(this).find(".model1").attr("class", "model2"),
        $(this).find(".infos").show()
    }),
    $(".products").mouseleave(function() {
        $(this).removeClass("hover"),
        $(this).find(".model1").attr("class", "model1"),
        $(this).find(".infos").hide()
    });
});

