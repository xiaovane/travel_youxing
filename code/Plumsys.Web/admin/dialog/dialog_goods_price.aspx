<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="dialog_goods_price.aspx.cs" Inherits="Plumsys.Web.admin.dialog.dialog_goods_price" %>

<%@ Import Namespace="Plumsys.Common" %>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>会员组价格</title>
    <link href="../skin/default/style.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" charset="utf-8" src="../../scripts/jquery/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../scripts/jquery/jquery.extend.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../scripts/webuploader/webuploader.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../js/uploader.js"></script>
    <script type="text/javascript" charset="utf-8" src="../js/common.js"></script>
    <script type="text/javascript">
        //初始化会员组价格窗口
        function showPriceDialog(obj) {
            var d = top.dialog({
                padding: 0,
                title: "会员组价格",
                url: 'dialog/dialog_group_price.aspx',
                width: 400
            }).showModal();
            //将对象传进去
            d.data = obj;
        }
        var api = top.dialog.get(window); //获取父窗体对象
        $(function () {
            //设置窗口按钮及事件
            api.button([{
                value: '确定',
                callback: function () {
                    document.getElementById('<%=btnSubmit.ClientID%>').click();
                    $(api.data).click();
                    parent.jsprint("规格设置成功！", "");
                },
                autofocus: true
            }, {
                value: '取消',
                callback: function () { }
            }
            ]);
            //初始化选择项
            createSpecHtml();
        });

        //创建规格列表
        function createSpecHtml() {
            //遍历已选择的规格
            var specValueArr = new Array();
            $(api.data).find("li.selected").each(function (i) {
                specValueArr[i] = { 'pid': $(this).attr("pid"), 'pname': $(this).attr("pname"), 'id': $(this).attr("id"), 'value': $(this).attr("value"), 'img': $(this).attr("img") };
            });
            //如果不选择则清空
            if (specValueArr.length == 0) {
                //return false;
            }
            //分开组合规格
            var goodsSpecList = '';
            var specValueData = {};
            var specData = {};
            for (var i = 0; i < specValueArr.length; i++) {
                var json = specValueArr[i];
                if (!specValueData["-" + json.pid + "-"]) {
                    goodsSpecList += '{"spec_id": "' + json.pid + '", "parent_id": "0", "title": "' + json.pname + '", "img_url": ""},';
                    specData["-" + json.pid + "-"] = { 'pid': json.pid, 'pname': json.pname };
                    specValueData["-" + json.pid + "-"] = [];
                }
                goodsSpecList += '{"spec_id": "' + json.id + '", "parent_id": "' + json.pid + '", "title": "' + json.value + '", "img_url": "' + json.img + '"}';
                specValueData["-" + json.pid + "-"].push({ 'id': json.id, 'value': json.value, 'img': json.img });
                if (i < specValueArr.length - 1) {
                    goodsSpecList += ',';
                }
            };
            //赋值给父对象的隐藏域
            $("#hide_goods_spec_list").val("[" + goodsSpecList + "]");
            //生成货品的笛卡尔积
            var specMaxData = descartes(specValueData, specData);
            var trHtml = ''; //规格总HTML
            var objProductNo = "";
            var defaultProductNo = 'SD' + MathRandGoodNo(10); //随机生成货号
            if (objProductNo.length > 0) {
                defaultProductNo = objProductNo;
            }
            for (var i = 0; i < specMaxData.length; i++) {
                var specText = ''; //规格描述
                var specIds = '';  //规格值ID
                for (var j = 0; j < specMaxData[i].length; j++) {
                    if (j == 0) {
                        specIds = ",";
                    }
                    specIds += specMaxData[i][j].id + ",";
                    specText += specMaxData[i][j].pname + "：" + specMaxData[i][j].value;
                    if (j < specMaxData[i].length - 1) {
                        specText += "，";
                    }
                }
                //检查已选择的规格是否存在，存在则不改变值
                var hide_goods_id = '0';
                var spec_goods_no = defaultProductNo + '-' + i;
                var spec_market_price = '0';
                var spec_sell_price = '0';
                var spec_sell_date = $.request("date");
                var spec_stock_quantity = '0';
                var hide_group_price = '';
                //有元素存在卡迪尔积中则不需要重新建立
                var element_exist = false;
                $("#item_box").find("input[name='hide_spec_ids']").each(function () {
                    //如果存在就不改变值
                    if ($(this).val() == specIds) {
                        var currTrObj = $(this).parent().parent(); //找到它的父节点
                        hide_goods_id = currTrObj.find("input[name='hide_goods_id']").val();
                        spec_goods_no = currTrObj.find("input[name='spec_goods_no']").val();
                        spec_market_price = currTrObj.find("input[name='spec_market_price']").val();
                        spec_sell_price = currTrObj.find("input[name='spec_sell_price']").val();
                        spec_sell_date = currTrObj.find("input[name='hide_spec_sell_date']").val();
                        spec_stock_quantity = currTrObj.find("input[name='spec_stock_quantity']").val();
                        hide_group_price = currTrObj.find("input[name='hide_group_price']").val();
                        element_exist = true;
                    }
                    //是否存在集合中不存在就删除
                    var exist = false;
                    for (var s = 0; s < specMaxData.length; s++) {
                        var specIds_tmp = "";
                        for (var k = 0; k < specMaxData[s].length; k++) {
                            if (k == 0) {
                                specIds_tmp = ",";
                            }
                            specIds_tmp += specMaxData[s][k].id + ",";
                        }
                        if ($(this).val() == specIds_tmp) exist = true;
                    }
                    if (!exist)
                    { $(this).parent().parent().remove(); return; }
                });
                if (!element_exist) {
                    trHtml += '<tr><td align="center"><input type="hidden" name="hide_goods_id" value=\'' + hide_goods_id + '\' />'
               + '<input type="text" name="spec_goods_no" class="td-input" value=\'' + spec_goods_no + '\' /></td>'
               + '<td align="center"><input type="text" name="spec_market_price" maxlength="10" class="td-input" value=\'' + spec_market_price + '\' onkeydown="return checkForFloat(this,event);"  /></td>'
               + '<td align="center"><input type="text" name="spec_sell_price" maxlength="10" class="td-input" value=\'' + spec_sell_price + '\' onkeydown="return checkForFloat(this,event);" /></td>'
               + '<td align="center"><input type="text" name="spec_stock_quantity" maxlength="10" class="td-input" value=\'' + spec_stock_quantity + '\' onkeydown="return checkNumber(event);"  /></td>'
               + '<td style="white-space:inherit;word-break:break-all;">'
               + '<input type="hidden" name="hide_spec_sell_date" value=\'' + spec_sell_date + '\' />'
               + '<input type="hidden" name="hide_spec_ids" value=\'' + specIds + '\' />'
               + '<input type="hidden" name="hide_spec_text" value=\'' + specText + '\' />'
               + '<p>' + specText + '</p></td>'
               + '<td align="center"><input type="hidden" name="hide_group_price" value=\'' + hide_group_price + '\' />'
               + '<a href="javascript:;" onclick="showPriceDialog(this);">设置</a>'
               + '</td></tr>';
                }
            }
            $("#item_box").append(trHtml);
        }

        //笛卡儿积组合
        function descartes(list, specData) {
            //parent上一级索引;count指针计数
            var point = {};
            var result = [];
            var pIndex = null;
            var tempCount = 0;
            var temp = [];

            //根据参数列生成指针对象
            for (var index in list) {
                if (typeof list[index] == 'object') {
                    point[index] = { 'parent': pIndex, 'count': 0 }
                    pIndex = index;
                }
            }

            //单维度数据结构直接返回
            if (pIndex == null) {
                return list;
            }

            //动态生成笛卡尔积
            while (true) {
                for (var index in list) {
                    tempCount = point[index]['count'];
                    temp.push({ "pid": specData[index].pid, "pname": specData[index].pname, "id": list[index][tempCount].id, "value": list[index][tempCount].value, "img": list[index][tempCount].img });
                }

                //压入结果数组
                result.push(temp);
                temp = [];

                //检查指针最大值问题
                while (true) {
                    if (point[index]['count'] + 1 >= list[index].length) {
                        point[index]['count'] = 0;
                        pIndex = point[index]['parent'];
                        if (pIndex == null) {
                            return result;
                        }
                        //赋值parent进行再次检查
                        index = pIndex;
                    }
                    else {
                        point[index]['count']++;
                        break;
                    }
                }
            }
        }

        //生成随机货号
        function MathRandGoodNo(n) {
            var Num = "";
            for (var i = 0; i < n; i++) {
                Num += Math.floor(Math.random() * 10);
            }
            return Num;
        }
    </script>
</head>

<body>
    <form id="form1" runat="server">
        <div class="div-content">
            <div class="table-container" style="padding-top: 10px;">
                <asp:HiddenField ID="hide_goods_spec_list" runat="server" />
                <table border="0" cellspacing="0" cellpadding="0" class="border-table" width="82%">
                    <thead>
                        <tr>
                            <th align="center" width="15%">货号</th>
                            <th width="8%">市场价(元)</th>
                            <th width="8%">销售价(元)</th>
                            <th width="8%">库存(件)</th>
                            <th width="35%">规格</th>
                            <th width="8%">会员价</th>
                        </tr>
                    </thead>
                    <tbody id="item_box">
                        <asp:Repeater ID="rptGroupPrice" runat="server">
                            <ItemTemplate>
                                <tr>
                                    <td align="center">
                                        <input type="hidden" name="hide_goods_id" value="<%#Eval("id")%>" />
                                        <input type="text" name="spec_goods_no" class="td-input" value="<%#Eval("goods_no")%>" />
                                    </td>
                                    <td align="center">
                                        <input type="text" name="spec_market_price" maxlength="10" class="td-input" value="<%#Eval("market_price")%>" onkeydown="return checkForFloat(this,event);" /></td>
                                    <td align="center">
                                        <input type="text" name="spec_sell_price" maxlength="10" class="td-input" value="<%#Eval("sell_price")%>" onkeydown="return checkForFloat(this,event);" /></td>
                                    <td align="center">
                                        <input type="text" name="spec_stock_quantity" maxlength="10" class="td-input" value="<%#Eval("stock_quantity")%>" onkeydown="return checkNumber(event);" /></td>
                                    <td style="white-space: inherit; word-break: break-all;">
                                        <input type="hidden" name="hide_spec_sell_date" value="<%#Eval("sell_date")%>" />
                                        <input type="hidden" name="hide_spec_ids" value="<%#Eval("spec_ids")%>" />
                                        <input type="hidden" name="hide_spec_text" value="<%#Eval("spec_text")%>" />
                                        <p><%#Eval("spec_text")%></p>
                                    </td>
                                    <td align="center">
                                        <input name="hide_group_price" type="hidden" value='<%#JsonHelper.ObjectToJSON(Eval("group_prices"))%>' />
                                        <a href="javascript:;" onclick="showPriceDialog(this);">设置</a>
                                    </td>
                                </tr>
                            </ItemTemplate>
                        </asp:Repeater>
                    </tbody>
                </table>
            </div>
            <!--工具栏-->
            <div class="page-footer">
                <div class="btn-wrap" style="display: none;">
                    <asp:Button ID="btnSubmit" runat="server" Text="提交保存" CssClass="btn" OnClick="btnSubmit_Click" />
                </div>
            </div>
            <!--/工具栏-->
        </div>
    </form>
</body>
</html>
