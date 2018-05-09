

var t = new Date();
var da = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
//c:容器,y:年,m:月,a:出发时间json,f:是否显示双日历,fu:回调调
var para = {
    'c': 'calendarcontainer',
    'y': t.getFullYear(),
    'm': t.getMonth() + 1,
    'a': {
        'd1': da, //最早时间
        'd2': enddate//最晚时间
    },
    'f': 0, //显示双日历用1，单日历用0
    'clickfu': function (to) {//回调函数，to为点击对象，点击日期是调用的函数,参数to为点击的日期的节点对象，可以把用户选定的日期通过此函数存入服务端或cookies，具体请自行编写
        if (to.id != "" & dateCompare(to.id, enddate) & dateCompare(da, to.id)) {
            //alert(to);当点击
            //判断显示套餐
            if (true) {
                $("#sriqi").empty();
                $("#sriqi").append(to.id);
            }
        }
    },
    'showFu': function (d) {	//回调函数，d为要显示的当前日期，主要用于判断是否要在该日期的格子里显示出指定的内容，在日期格子里额外显示内容的函数,返回值必须为字符串，参数d为显示的日期对象（日期类型）
        return "";
    }
}

CreateCalendar(para, "para"); //参数前一个是对象，后一个是对象名称

function dateCompare(startdate, enddate) {
    var arr = startdate.split("-");
    var starttime = new Date(arr[0], arr[1], arr[2]);
    var starttimes = starttime.getTime();

    var arrs = enddate.split("-");
    var lktime = new Date(arrs[0], arrs[1], arrs[2]);
    var lktimes = lktime.getTime();

    if (starttimes > lktimes) {
        return false;
    }
    else
        return true;

}
$(function () {
    //alert($("#touristid").val());
    //根据产品id 获取套餐
    $("#skuSelect").append("<div class=\"sku-sel\">  <div class=\"title\">选择套餐</div> <div id=\"alltaocan\" class=\"text\"><span>测试套餐1</span><span>测试套餐2</span></div></div>");
    $("#alltaocan span").each(function() {
        $(this).click(function () {
            $("#caotan").empty();
            $("#caotan").append($(this).text());
        });
    });
});

