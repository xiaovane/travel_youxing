$(function () {
    if ($(".yxz").children("dd").children().length <= 0)
    { $(".yxz").css("display", "none"); }
    else
    { $(".yxz").css("display", "block"); }

    if ($(".mdd").children("#mdd").children("a").length <= 0)
    { $(".mdd").css("display", "none"); }
    else
    { $(".mdd").css("display", "block"); }

    if ($(".leixing").children("#leixing").children("a").length <= 0)
    { $(".leixing").css("display", "none"); }
    else
    { $(".leixing").css("display", "block"); }
})

function getUrlParam(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r!=null) return unescape(r[2]); return null; //返回参数值
   } 
