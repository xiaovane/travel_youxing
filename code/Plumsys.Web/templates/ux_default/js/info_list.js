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
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
        var r = window.location.search.substr(1).match(reg);  //ƥ��Ŀ�����
        if (r!=null) return unescape(r[2]); return null; //���ز���ֵ
   } 
