<%@ Page Language="C#" AutoEventWireup="true" Inherits="Plumsys.Web.UI.Page.search" ValidateRequest="false" %>
<%@ Import namespace="System.Collections.Generic" %>
<%@ Import namespace="System.Text" %>
<%@ Import namespace="System.Data" %>
<%@ Import namespace="Plumsys.Common" %>

<script runat="server">
override protected void OnInit(EventArgs e)
{

	/* 
		This page was created by Plumsys Template Engine at 2016-06-28 23:06:13.
		本页面代码由Plumsys模板引擎生成于 2016-06-28 23:06:13. 
	*/

	base.OnInit(e);
	StringBuilder templateBuilder = new StringBuilder(220000);

	templateBuilder.Append("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n<title>站内搜索 - ");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("</title>\r\n<meta name=\"keywords\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_keyword));
	templateBuilder.Append("\" />\r\n<meta name=\"description\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_description));
	templateBuilder.Append("\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/info_list.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/common.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery-1.11.2.min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/CategoryInfo.js\"></");
	templateBuilder.Append("script>\r\n    <style>\r\n        .Zebra_DatePicker td.dp_selected {\r\n            background: #fe5098;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n  <div class=\"wrap\">\r\n        <!--Header-->\r\n        ");

	templateBuilder.Append("        <!--nav begin-->\r\n<div class=\"HeadNormal\">\r\n    <div class=\"Navi\">\r\n        <div class=\"HeadMainPage\">\r\n            <div class=\"LogoNormal\">\r\n                <a title=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("\" href=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.domain));
	templateBuilder.Append("\">\r\n                    <img alt=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("\"\r\n                         src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/logonormal_v3.png\" />\r\n                </a>\r\n            </div>\r\n            <div class=\"Head_LeftNavi\">\r\n                <div class=\"nav\">\r\n                    <div class=\"c-wrapper\">\r\n                        <div></div>\r\n                        <div class=\"navitems floatL\">\r\n                            <ul class=\"header_themlist\">\r\n                                <!--类别-->\r\n                                ");
	DataTable GoodsCList = get_category_child_list("tourist_mall",0);

	int ncdr__loop__id=0;
	foreach(DataRow ncdr in GoodsCList.Rows)
	{
		ncdr__loop__id++;


	templateBuilder.Append("\r\n                                <li>\r\n                                    <a class=\"title\" href=\"");
	templateBuilder.Append(linkurl("tourist_mall_list",Utils.ObjectToStr(ncdr["id"])));

	templateBuilder.Append("\r\n                                        \" target=\"_self\">\r\n                                        " + Utils.ObjectToStr(ncdr["title"]) + "\r\n                                        <div class=\"navitag\" style=\"display: none;\"></div>\r\n                                    </a>\r\n                                </li>\r\n                                ");
	}	//end for if

	templateBuilder.Append("\r\n                                <!--/类别-->\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"clear\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"search_box\">\r\n                <div id=\"header_search_box\">\r\n                    <div class=\"s-lft\">\r\n                        <input id=\"defaultSearch\" type=\"hidden\" />\r\n                        <input id=\"keywords\" name=\"keywords\" class=\"typeahead city\" type=\"text\" onkeydown=\"if(event.keyCode==13){SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');return false};\" placeholder=\"输入回车搜索\" x-webkit-speech=\"\"/>\r\n                    </div>\r\n                    <div class=\"s-rgt\">\r\n                        <input class=\"btn\" type=\"submit\" onclick=\"SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');\" value=\" \" />\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n            </div>\r\n            <script type=\"text/javascript\">\r\n                $.ajax({\r\n                    type: \"POST\",\r\n                    url: \"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=user_check_login\",\r\n                    dataType: \"json\",\r\n                    timeout: 20000,\r\n                    success: function (data, textStatus) {\r\n                        if (data.status == 1) {\r\n                            $(\"#menu\").append('<span id=\"au_login\">');\r\n                            $(\"#menu\").append('<a class=\"user\" href=\"");
	templateBuilder.Append(linkurl("usercenter","index"));

	templateBuilder.Append("\">我的优行</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                            $(\"#menu\").append('<a id=\"uloginout\" href=\"");
	templateBuilder.Append(linkurl("usercenter","exit"));

	templateBuilder.Append("\">退出</a>');\r\n                            //$(\"#menu\").append(' <a href=\"");
	templateBuilder.Append("<%linkurl(\" cart\")%>");
	templateBuilder.Append("\">购物车<span id=\"shoppingCartCount\"> ');\r\n                            //$(\"#menu\").append('<script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=view_cart_count\"></span>件</a>');\r\n          \r\n                            $(\"#menu\").append('</span>');\r\n                        } else {\r\n                            $(\"#menu\").append('<span id=\"un_login\">');\r\n                            $(\"#menu\").append('<a class=\"singin\" href=\"");
	templateBuilder.Append(linkurl("login"));

	templateBuilder.Append("\">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                            $(\"#menu\").append('<a class=\"singup\" href=\"");
	templateBuilder.Append(linkurl("register"));

	templateBuilder.Append("\">注册</a>');\r\n                            $(\"#menu\").append('</span>');\r\n                        }\r\n                    }\r\n                });\r\n            </");
	templateBuilder.Append("script>\r\n            <div id=\"menu\" class=\"RightNavi\">\r\n              <a href='");
	templateBuilder.Append("<%linkurl(\" cart\")%>");
	templateBuilder.Append("'>购物车<span id=\"shoppingCartCount\">\r\n                <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=view_cart_count\"></");
	templateBuilder.Append("script></span>件</a>&nbsp;&nbsp;|&nbsp;&nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--nav end-->\r\n");


	templateBuilder.Append("\r\n        <!--/Header-->\r\n                <!--/C#代码-->\r\n                <div class=\"content\">\r\n                    <div class=\"c-wrapper\">\r\n                        <!-- 筛选列表 begin -->\r\n                        <div class=\"searchlist\">\r\n                            <!-- 排序方式 begin -->\r\n                            <div class=\"sort\">\r\n                                <ul>\r\n                                    <li><b class=\"sort_click\" id=\"sort_default\">综合</b></li>\r\n                                    <li><b class=\"sort_click\" id=\"sale_amount\">销量优先</b></li>\r\n                                    <li>\r\n                                        <b class=\"sort_click\" id=\"soldprice_yuan\">\r\n                                            价格<i class=\"PriceHigh\"></i><i class=\"PriceLow\"></i>\r\n                                        </b>\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </div>\r\n                            <!-- 筛选结果 begin -->\r\n                            <div class=\"lists\">\r\n                                ");
	DataTable goodsList = get_search_list(15, out totalcount);

	templateBuilder.Append("\r\n                                <!--取得分页页码列表-->\r\n                                ");
	if (tags!="")
	{

	 pagelist = get_page_link(15, page, totalcount, linkurl("search","?channel=" + channel + "&tags=" + Server.UrlEncode(tags) + "&page=__id__"));

	}
	else
	{

	 pagelist = get_page_link(15, page, totalcount, linkurl("search","?channel=" + channel + "&keyword=" + Server.UrlEncode(keyword) + "&page=__id__"));

	}	//end for if

	foreach(DataRow dr in goodsList.Rows)
	{

	templateBuilder.Append("\r\n                                <span class=\"product\">\r\n                                    <dl class=\"products\">\r\n                                        <dt class=\"model1\">\r\n                                            <div class=\"img\" style=\"background: rgb(204, 204, 204); width: 280px; height: 146px;\">\r\n                                                <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href='");
	templateBuilder.Append(linkurl("tourist_mall_show",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("'> <img width=\"280\" height=\"146\" class=\"lazy_img\" alt=\"\" src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" /></a>\r\n                                                </a>\r\n                                            </div>\r\n\r\n                                            <!--<div class=\"add\"><b></b> 西班牙 - 马德里</div>\r\n                                            <div class=\"Love\"><span>加入购物车</span><i></i></div>\r\n                                            <div class=\"infos\" style=\"display: none;\">\r\n                                                <a class=\"SearchLinker\" href=\"#\"\r\n                                                   target=\"_blank\">\r\n                                                    <p>\r\n\r\n                                                        马德里必去景点NO.1，免排队快速进入			；海玩网购票比您在当地购买门票更便宜\r\n                                                        ；超长有效期，可在景点开放任意时间进入...\r\n\r\n                                                    </p>\r\n                                                </a>\r\n                                            </div>-->\r\n                                        </dt>\r\n                                        <dd>\r\n                                            <div class=\"name\"><a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href='");
	templateBuilder.Append(linkurl("tourist_mall_show",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("'>" + Utils.ObjectToStr(dr["title"]) + "</a></div>\r\n                                            <div class=\"price\" id=\"price_7921\">\r\n                                                <div class=\"vip\">\r\n                                                    <b>¥<em id=\"7921\">" + Utils.ObjectToStr(dr["sell_price"]) + "</em></b>起\r\n\r\n                                                </div>\r\n                                                <div class=\"payment\">门市价：" + Utils.ObjectToStr(dr["market_price"]) + "</div>\r\n                                            </div>\r\n                                        </dd>\r\n                                    </dl>\r\n                                </span>\r\n                                ");
	}	//end for if

	if (goodsList.Rows.Count==0)
	{

	templateBuilder.Append("\r\n                                <div class=\"nodata\">暂时无法找到您想要的商品！</div>\r\n                                ");
	}	//end for if

	templateBuilder.Append("\r\n                                <div class=\"clear\"></div>\r\n                            </div>\r\n                        <!-- 筛选结果 end -->                \r\n                         <!-- 分页开始 -->\r\n\r\n                            <div class=\"page\">\r\n                                ");
	templateBuilder.Append(Utils.ObjectToStr(pagelist));
	templateBuilder.Append("\r\n                            </div>\r\n                        </div>\r\n                        <!-- 筛选列表 end -->\r\n                    </div>\r\n                </div>\r\n      <!--footer begin-->\r\n      ");

	templateBuilder.Append("        <div class=\"Foot\">\r\n            <div class=\"FootHead\">\r\n                <div class=\"MainPage\">\r\n                    <div class=\"FootListGroup\">\r\n                        <ul>\r\n                            <li><i></i>关于我们</li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","about"));

	templateBuilder.Append("\" target=\"_blank\">优行简介</a>\r\n                            </li>\r\n                            <li><a href=\"");
	templateBuilder.Append(linkurl("content","contact"));

	templateBuilder.Append("\" target=\"_blank\">联系我们</a></li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","advertises"));

	templateBuilder.Append("\" target=\"_blank\">\r\n                                    职位招聘\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","league"));

	templateBuilder.Append("\" target=\"_blank\">\r\n                                    加盟合作\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><i></i>网站条款</li>\r\n                            <li>\r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","agreement"));

	templateBuilder.Append("\" target=\"_blank\">用户协议</a>\r\n                            </li>\r\n                            <li><a href=\"");
	templateBuilder.Append(linkurl("content","privacy"));

	templateBuilder.Append("\" target=\"_blank\">隐私保护</a></li>\r\n                            <li> \r\n                                <a href=\"");
	templateBuilder.Append(linkurl("content","provision"));

	templateBuilder.Append("\" target=\"_blank\">版权声明</a>\r\n                            </li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><i></i>友情链接</li>\r\n                            ");
	DataTable linkList1 = get_plugin_method("Plumsys.Web.Plugin.Link", "link", "get_link_list", 0, "is_lock=0 and is_image=0 and is_red=1");

	foreach(DataRow dr in linkList1.Rows)
	{

	templateBuilder.Append("\r\n                            <li> <a target=\"_blank\" href=\"" + Utils.ObjectToStr(dr["site_url"]) + "\">" + Utils.ObjectToStr(dr["title"]) + "</a></li>\r\n                            ");
	}	//end for if

	templateBuilder.Append("\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"QrCodeBox\">\r\n                        <div class=\"QrCode\">\r\n                            <img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/wechatcode.jpg\" />\r\n                            <span>官方微信</span>\r\n                        </div>\r\n                        <div class=\"telephone\">\r\n                            <img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/telephone.png\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"FootLast\">\r\n                <div class=\"MainPage\">\r\n                    <p>Copyright © 2013-2016, All Rights Reserved.</p><span>\r\n                        ");
	templateBuilder.Append(site.company.ToString());

	templateBuilder.Append(" |\r\n                        京ICP证 140491号 | ");
	templateBuilder.Append(Utils.ObjectToStr(config.webcrod));
	templateBuilder.Append(" | 旅行社业务经营许可证 L-BJ-CJ00104\r\n                    </span>\r\n                    <div style=\"clear: both;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      <!--footer end-->\r\n   \r\n   \r\n");


	templateBuilder.Append("\r\n      <!--footer end-->\r\n        <div id=\"load_img\" style=\"display: none;\">\r\n            <img src=\"images/xubox_loading2.gif\" />&nbsp;搜索中...&nbsp;\r\n        </div>\r\n    </div>\r\n   \r\n</body>\r\n</html>");
	Response.Write(templateBuilder.ToString());
}
</script>
