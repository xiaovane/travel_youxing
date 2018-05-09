Date.prototype.dateDiff = function (interval, objDate2) { var d = this, i = {}, t = d.getTime(), t2 = objDate2.getTime(); i['y'] = objDate2.getFullYear() - d.getFullYear(); i['q'] = i['y'] * 4 + Math.floor(objDate2.getMonth() / 4) - Math.floor(d.getMonth() / 4); i['m'] = i['y'] * 12 + objDate2.getMonth() - d.getMonth(); i['ms'] = objDate2.getTime() - d.getTime(); i['w'] = Math.floor((t2 + 345600000) / (604800000)) - Math.floor((t + 345600000) / (604800000)); i['d'] = Math.floor(t2 / 86400000) - Math.floor(t / 86400000); i['h'] = Math.floor(t2 / 3600000) - Math.floor(t / 3600000); i['n'] = Math.floor(t2 / 60000) - Math.floor(t / 60000); i['s'] = Math.floor(t2 / 1000) - Math.floor(t / 1000); return i[interval]; }

Date.prototype.DateAdd = function (strInterval, Number) { var dtTmp = this; switch (strInterval) { case 's': return new Date(Date.parse(dtTmp) + (1000 * Number)); case 'n': return new Date(Date.parse(dtTmp) + (60000 * Number)); case 'h': return new Date(Date.parse(dtTmp) + (3600000 * Number)); case 'd': return new Date(Date.parse(dtTmp) + (86400000 * Number)); case 'w': return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number)); case 'q': return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds()); case 'm': return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds()); case 'y': return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds()); } }

Date.prototype.DateToParse = function () { var d = this; return Date.parse(d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()); }


function CreateCalendar(para, paraJsonName) {//c:容器,y:年,m:月,a:出发时间json,f:是否显示双日历,clickfu:点击事件回调函数,showFu:在日历里显示附加内容的回调函数
    var c = para.c;
    var y = para.y; //初始年
    var m = para.m; //初始月
    if (arguments.length != 3) {
        //当不存在第三个参数时则月份为当前初始月份
        var m = para.m;
    }
    else if (arguments[2] == "pre") {
        //当选择上一月时
        var m = para.m = para.m - 1;
    }
    else if (arguments[2] == "next") {
        //当选择下一月时
        var m = para.m = para.m + 1;
        //alert(para.m);
    }
    else {
        var m = para.m;
    }

    var a = para.a;//出发时间
    var f = para.f;//是否显示双日历
    var clickfu = para.clickfu;//点击时间回调函数
    var showFu = para.showFu; //在日历里显示附加内容的回调函数

    var today = new Date();//获取当前日期
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());//转换为2014-12-12的格式
    if (y == 0 || m == 0) { y = today.getFullYear(); m = today.getMonth() + 1; };//当未填写初始的年月是默认使用当前的年月（测试无用）
    //var dmin=Date.parse(a.first().attr('d').replace(/-/g, '/')),dmax =Date.parse(a.last().attr('d').replace(/-/g, '/'));
    var dmin = a.d1.replace(/-/g, "/"), dmax = a.d2.replace(/-/g, "/");//获取时间上限和下限，并转换为2014/12/13的格式


    var i1 = 0, i2 = 0, i3 = 0, d2;//定义变量
    var d1 = new Date(dmin),//将起始日期转换为日期变量
    today = today.DateToParse(); //alert(today);Date.parse()方法可解析一个日期（2011/2/12）字符串，并返回距1970/1/1之间的毫秒数
    if (Date.parse(d1.getFullYear() + '/' + (d1.getMonth() + 1) + '/1') > Date.parse(new Date(y, m - 1, 1))) {
    //判断填写的初始年月是否比当前时间的年月小，小则使用当前的时间的年月
        y = d1.getFullYear(); m = d1.getMonth() + 1;
    }
    $('#' + c).html('');//初始化容器
    //农历
    var ca = new Calendar();//定义日历对象
    tmp = '';
    for (var i = 0; i <= f; i++) {
    //根据是否显示双日历 决定加载的次数
        d1 = new Date(y, m - 1 + i);//获取初始日期
        y = d1.getFullYear();//年
        m = d1.getMonth() + 1;//月

        tmp += '<table cellpadding="0">';
        tmp += '<tr class="month"><th colspan="7"><div class="clearfix"><div class="prevMonth">';
        if (i == 0) {
            i1 = Date.parse(y + '/' + m + '/1');//i1为当前第一个月的日期起始时间
            d1 = new Date(dmin);//alert(d1); 有效时间段的起始时间
            if (Date.parse(d1.getFullYear() + '/' + (d1.getMonth() + 1) + '/1') < i1) {
               //当有效时间段的起始时间比当前的月份小
                d1 = new Date(y, m - 2 - f, 1);
                tmp += '<a class="prev" href="javascript:;" onclick="CreateCalendar(' + paraJsonName + ',\'' + paraJsonName + '\',\'pre\');" title="上个月">&nbsp;</a>';
            } else {
                tmp += '<a class="prev0" href="javascript:;" title="上个月">&nbsp;</a>';
            }
        }
        tmp += '</div>';
        tmp += '<div class="dates"><em>' + y + '</em>年<em>' + m + '</em>月</div>';
        tmp += '<div class="nextMonth">';
        if (i == f) {
            i1 = Date.parse(y + '/' + m + '/1');
            d1 = new Date(dmax);
            i2 = Date.parse(d1.getFullYear() + '/' + (d1.getMonth() + 1) + '/1');
            if (i2 > i1) {
                d1 = new Date(y, Date.parse(new Date(y, m + 1, 1)) > i2 ? m - f : m, 1);
                tmp += '<a class="next" href="javascript:;" onclick="CreateCalendar(' + paraJsonName + ',\'' + paraJsonName + '\',\'next\');" title="下个月">&nbsp;</a>';
            } else {
                tmp += '<a class="next0" href="javascript:;" title="下个月">&nbsp;</a>';
            }
        }
        tmp += '</div></div></th></tr>';
        tmp += '  <tr class="week">';
        tmp += '    <th class="weekEnd">星期日</th>';
        tmp += '    <th>星期一</th>';
        tmp += '    <th>星期二</th>';
        tmp += '    <th>星期三</th>';
        tmp += '    <th>星期四</th>';
        tmp += '    <th>星期五</th>';
        tmp += '    <th class="weekEnd">星期六</th>';
        tmp += '  </tr>';
        var maxdays = (new Date(Date.parse(new Date(y, m, 1)) - 86400000)).getDate();  //当前月的天数
        //alert(maxdays);
        d1 = new Date(y, m - 1); //要显示的日期
        //alert("要显示的日期"+d1);
        i1 = d1.getDay(); //这个月的第一天是星期几
        //alert(i1);
        for (var j = 1; j <= 6; j++) {
            tmp += '<tr>';
            for (var k = 1; k <= 7; k++) {
                i2 = (j - 1) * 7 + k - i1;//alert("i2=" + i2);i2为格子的位置已当月第一天为1，前为0，-1，-2，后为2,3,4
                if (i2 < 1 || i2 > maxdays) {
                //当当前格子不在本月日期之内时，则为空
                    tmp += '<td></td>';
                } else {
                    //当当前格子在本月日期之内时，则为显示日期和农历
                    i3 = Date.parse(new Date(y, m - 1, i2));//当前格子的日期
                    d1 = new Date(i3);//转换为日期类型
                    //农历(ll的值为农历)
                    //ca=new Calendar(y,m-1,i2)
                    var ll = ca.getlf(d1);//获取当前日期对应的阴历节日
                    if (ll == '') {
                        ll = ca.getsf(d1); //获取当前日期对应的阳历节日
                        if (ll == '') {
                            ll = ca.getst(d1); //获取当前日期对应的节气
                            if (ll == '') ll = ca.getls(d1)[3]; ////获取阴历数组
                        }
                    }
                    tmp += '<td'
                    if (today == i3) {
                       //当前格子的日期等于当天的日期，则给一个默认格式
                        tmp += ' class="cur"';
                        //alert(i3);
                        //alert("i3=" + i3 + "  dmin=" + dmin + " dmax=" + dmax);
                    };
                    if (i3 < Date.parse(dmin) || i3 > Date.parse(dmax)) {
                        
                        tmp += ' class="curnot"><p><em class="noc">' + i2 + '</em></td>';
                    } else {
                        tmp += ' week="' + (k - 1) + '" id="' + y + '-' + m + '-' + i2 + '" title="' + ca.getl(d1, false) + ' ' + ca.getst(d1) + ' ' + ca.getsf(d1) + ' ' + ca.getlf(d1) + '"><p><em class="yes">' + i2 + '</em>' + (function (t) { if ($.isFunction(showFu)) { return showFu(t); } else { return "" } }(new Date(y, m - 1, i2))) + '</p></td>';

                    }
                }
            }
            tmp += '</tr>';
        }
        tmp += '</table>';

    }
    $('#' + c).append(tmp);
    if ($.isFunction(clickfu)) {
        //fu(this);
        $('#' + c + ' td').click(function () {
            clickfu(this);
        }).hover(function () {
            $(this).addClass("hover");
        },
		  function () {
		      $(this).removeClass("hover");
		  }
		);
    }
}