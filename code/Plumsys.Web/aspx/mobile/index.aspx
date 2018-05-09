<%@ Page Language="C#" AutoEventWireup="true" Inherits="Plumsys.Web.UI.Page.index" ValidateRequest="false" %>
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

	templateBuilder.Append("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n    <title>");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_title));
	templateBuilder.Append("</title>\r\n    <meta name=\"keywords\" content=\" ");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_keyword));
	templateBuilder.Append("\" />\r\n    <meta name=\"description\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_description));
	templateBuilder.Append("\" />\r\n    <link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/index.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery-1.11.2.min.js\"></");
	templateBuilder.Append("script>\r\n</head>\r\n<body>\r\n    <div class=\"wrap\">\r\n        <div class=\"Head\">\r\n            <div class=\"Navi\">\r\n                <div class=\"MainPage\">\r\n                    <div class=\"Logo\">\r\n                        <a title=\"logo\" href=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.domain));
	templateBuilder.Append("\"\r\n                           target=\"_self\">\r\n                            <img alt=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.logo));
	templateBuilder.Append("\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"LeftNavi\">\r\n                        <div class=\"nav\">\r\n                            <div class=\"c-wrapper\">\r\n                                <div class=\"serchbox\" style=\"display:none\">\r\n                                    <div class=\"tab-view\">\r\n                                        <div class=\"searchtype\" data-role=\"head\">\r\n                                            <ul>\r\n                                                <li data-role=\"tab\" data-target=\"tab-a\">跟团游</li>\r\n                                                <li data-role=\"tab\" data-target=\"tab-b\">自由行</li>\r\n                                                <li data-role=\"tab\" data-target=\"tab-c\">酒店</li>\r\n                                                <li data-role=\"tab\" data-target=\"tab-d\">门票</li>\r\n                                                <li data-role=\"tab\" data-target=\"tab-e\">玩乐</li>\r\n                                                <li data-role=\"tab\" data-target=\"tab-f\">通讯</li>\r\n                                            </ul>\r\n                                        </div>\r\n                                        <div class=\"searchtypeconnent\" data-role=\"body\">\r\n                                            <div data-role=\"tab-content\" data-id=\"tab-a\">\r\n                                                <div class=\"ml20 fsize14\"><div class=\"chufa\">出发地：</div><div class=\"mudi\">目的地：</div></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"chufa\">\r\n                                                        <input type=\"text\" class=\"inputchufa\" placeholder=\"请输入出发地\" value=\"\" />\r\n                                                    </div>\r\n                                                    <div class=\"mudi\">\r\n                                                        <input type=\"text\" class=\"inputmudi\" placeholder=\"请输入目的地\" value=\"\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                                                    <div class=\"searchbottondetail floatR\"> <input type=\"button\" value=\"搜索\" /></div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"bordorline ml20 mt10 fsize14\">\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热搜城市：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热门景点：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div data-role=\"tab-content\" data-id=\"tab-b\">\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"searchbox mt10\">\r\n                                                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                                                    <div class=\"searchbottondetail floatR\"> <input type=\"button\" value=\"搜索\" /></div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"bordorline ml20 mt10 fsize14\">\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热搜城市：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热门景点：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div data-role=\"tab-content\" data-id=\"tab-c\">\r\n                                                <div class=\"bordorheader ml20 mt10 fsize16\">\r\n                                                    国内酒店/国际酒店\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\"><div class=\"chufa\">目的地：</div><div class=\"mudi\">关键字(选填)：</div></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"chufa\">\r\n                                                        <input type=\"text\" class=\"inputchufa\" placeholder=\"苏州\" value=\"\" />\r\n                                                    </div>\r\n                                                    <div class=\"mudi\">\r\n                                                        <input type=\"text\" class=\"inputmudi\" placeholder=\"酒店名称\" value=\"\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\"><div class=\"chufa\">入住日期：</div><div class=\"mudi\">退房日期：</div></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <script>\r\n                                                        var nowday = new Date();\r\n                                                    </");
	templateBuilder.Append("script>\r\n                                                    <div class=\"chufa\">\r\n                                                        <input type=\"text\" class=\"inputchufa\" placeholder=\"请选择日期\" onclick=\"JTC.setday({minDate:nowday, ranged: true})\" />\r\n\r\n                                                    </div>\r\n                                                    <div class=\"mudi\">\r\n                                                        <input type=\"text\" class=\"inputmudi\" placeholder=\"请选择日期\" onclick=\"JTC.setday({minDate:nowday, ranged: true})\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                                                    <div class=\"searchbottondetail floatR\"> <input type=\"button\" value=\"搜索\" /></div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"bordorline ml20 mt10 fsize14\">\r\n                                                </div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热搜城市：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div data-role=\"tab-content\" data-id=\"tab-d\">\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"searchbox mt10\">\r\n                                                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                                                    <div class=\"searchbottondetail floatR\"> <input type=\"button\" value=\"搜索\" /></div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"bordorline ml20 mt10 fsize14\">\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热搜城市：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热门景点：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div data-role=\"tab-content\" data-id=\"tab-e\">\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"searchbox mt10\">\r\n                                                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                                                    <div class=\"searchbottondetail floatR\"> <input type=\"button\" value=\"搜索\" /></div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"bordorline ml20 mt10 fsize14\">\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热搜城市：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热门景点：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div data-role=\"tab-content\" data-id=\"tab-f\">\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"searchbox mt10\">\r\n                                                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                                                    <div class=\"searchbottondetail floatR\"> <input type=\"button\" value=\"搜索\" /></div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"bordorline ml20 mt10 fsize14\">\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热搜城市：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n                                                            <li>测试城市</li>\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                                <div class=\"ml20 fsize14\">\r\n                                                    <div class=\"resoucity floatL\">热门景点：</div>\r\n                                                    <div class=\"resoucitylist floatL\">\r\n                                                        <ul>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n                                                            <li>测景景点</li>\r\n\r\n\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div></div>\r\n                                <div class=\"navitems floatL\">\r\n                                    <ul class=\"header_themlist\">\r\n                                        <!--类别-->\r\n                                        ");
	DataTable GoodsCList = get_category_child_list("tourist_mall",0);

	int ncdr__loop__id=0;
	foreach(DataRow ncdr in GoodsCList.Rows)
	{
		ncdr__loop__id++;


	templateBuilder.Append("\r\n                                        <li>\r\n                                            <a class=\"title\" href=\"");
	templateBuilder.Append(linkurl("tourist_mall_list",Utils.ObjectToStr(ncdr["id"])));

	templateBuilder.Append("\" target=\"_self\">\r\n                                                " + Utils.ObjectToStr(ncdr["title"]) + "\r\n                                                <div class=\"navitag\" style=\"display: none;\"></div>\r\n                                            </a>\r\n                                        </li>\r\n                                        ");
	}	//end for if

	templateBuilder.Append("\r\n                                        <!--/类别-->\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"clear\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"RightNavi\">\r\n                        <script type=\"text/javascript\">\r\n                            $.ajax({\r\n                                type: \"POST\",\r\n                                url: \"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=user_check_login\",\r\n                                dataType: \"json\",\r\n                                timeout: 20000,\r\n                                success: function (data, textStatus) {\r\n                                    if (data.status == 1) {\r\n                                        $(\"#un_login\").append('<a class=\"singin\" href=\"");
	templateBuilder.Append(linkurl("usercenter","index"));

	templateBuilder.Append("\">我的优行</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                                        $(\"#un_login\").append('<a class=\"singup\" href=\"");
	templateBuilder.Append(linkurl("usercenter","exit"));

	templateBuilder.Append("\">退出</a>');\r\n                                    } else {\r\n                                        $(\"#un_login\").append('<a class=\"singin\" href=\"");
	templateBuilder.Append(linkurl("login"));

	templateBuilder.Append("\" target=\"_self\">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                                        $(\"#un_login\").append('<a class=\"singup\" href=\"");
	templateBuilder.Append(linkurl("register"));

	templateBuilder.Append("\" target=\"_self\">注册</a>');\r\n                                    }\r\n                                }\r\n                            });\r\n                        </");
	templateBuilder.Append("script>\r\n                        <span id=\"un_login\">\r\n                           \r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"SliderBox\">\r\n            <div class=\"Slider\" style=\"position:relative;\">\r\n                <ul class=\"rslides\">\r\n                    ");
	DataTable focusNews = get_article_list("tourist_mall", 0,0, 8, "status=0 and is_slide=1 and img_url<>''");

	foreach(DataRow dr in focusNews.Rows)
	{

	templateBuilder.Append("\r\n                    <li>\r\n                        <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("tourist_mall_show",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\" target=\"_blank\">\r\n                            <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\"  width=\"1920\" height=\"600\"/>\r\n                        </a>\r\n                    </li>\r\n                    ");
	}	//end for if

	templateBuilder.Append("\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"HeadMainPage\">\r\n            <div class=\"search-new\">\r\n                <div id=\"header_search_box\">\r\n                    <div class=\"s-lft\">\r\n                        <input name=\"home_city\" class=\"typeahead city\" id=\"keywords\" onkeydown=\"if(event.keyCode==13){SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');return false};\" type=\"text\" placeholder=\"跟团游/自由行/酒店/门票\" value=\"\" />\r\n                    </div>\r\n                    <div class=\"s-rgt\">\r\n                        <input class=\"btn\" id=\"header_search_button\" onclick=\"SiteSearch('");
	templateBuilder.Append(linkurl("search"));

	templateBuilder.Append("', '#keywords');\" type=\"submit\" value=\"\" />\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--类别-->\r\n        ");
	DataTable categoryList = get_category_child_list("tourist_mall",0);

	int cdr__loop__id=0;
	foreach(DataRow cdr in categoryList.Rows)
	{
		cdr__loop__id++;


	if (cdr__loop__id%2==1)
	{

	templateBuilder.Append("\r\n        <div class=\"MainPage\">\r\n            <div class=\"ContentHead\"><a href=\"");
	templateBuilder.Append(linkurl("tourist_mall_list",Utils.ObjectToStr(cdr["id"])));

	templateBuilder.Append("\" target=\"_blank\"><span>" + Utils.ObjectToStr(cdr["title"]) + "</span> </a></div>\r\n            <div class=\"ContentGroup\">\r\n                ");
	DataTable dt = get_article_list("tourist_mall", Utils.StrToInt(Utils.ObjectToStr(cdr["id"]), 0),0, 4, "status=0");

	foreach(DataRow dr in dt.Rows)
	{

	templateBuilder.Append("\r\n                <div class=\"Content2\">\r\n                    <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("tourist_mall_show",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\" target=\"_blank\">\r\n                        <img class=\"lazy_img\" src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" />\r\n                        <span class=\"ContentWordBox\">\r\n                            <span class=\"Word\">\r\n                                <span>" + Utils.ObjectToStr(dr["title"]) + "</span>\r\n                            </span><span class=\"Price\">\r\n                                <span>￥" + Utils.ObjectToStr(dr["sell_price"]) + "</span>\r\n                            </span>\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n                ");
	}	//end for if

	templateBuilder.Append("\r\n                <div style=\"clear: both;\"></div>\r\n            </div>\r\n        </div>\r\n        ");
	}
	else
	{

	templateBuilder.Append("\r\n        <div class=\"ContentGrey\">\r\n            <div class=\"MainPage\">\r\n                <div class=\"ContentHead\"><a href=\"");
	templateBuilder.Append(linkurl("tourist_mall_list",Utils.ObjectToStr(cdr["id"])));

	templateBuilder.Append("\" target=\"_blank\"><span>" + Utils.ObjectToStr(cdr["title"]) + "</span> </a></div>\r\n                <div class=\"ContentGroup\">\r\n                    ");
	DataTable dt = get_article_list("tourist_mall", Utils.StrToInt(Utils.ObjectToStr(cdr["id"]), 0),0, 4, "status=0");

	foreach(DataRow dr in dt.Rows)
	{

	templateBuilder.Append("\r\n                    <div class=\"Content2\">\r\n                        <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("tourist_mall_show",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\" target=\"_blank\">\r\n                            <img class=\"lazy_img\" src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" />\r\n                            <span class=\"ContentWordBox\">\r\n                                <span class=\"Word\">\r\n                                    <span>" + Utils.ObjectToStr(dr["title"]) + "</span>\r\n                                </span><span class=\"Price\">\r\n                                    <span>￥" + Utils.ObjectToStr(dr["sell_price"]) + "</span>\r\n                                </span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n                    ");
	}	//end for if

	templateBuilder.Append("\r\n                    <div style=\"clear: both;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        ");
	}	//end for if

	}	//end for if

	templateBuilder.Append("\r\n        <!--/类别-->\r\n        <!--Footer-->\r\n        ");

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


	templateBuilder.Append("\r\n        <!--/Footer-->\r\n        <div class=\"RightBox\" style=\"display: none;\">\r\n            <div class=\"KeFuBox\" id=\"KeFuBtn\">\r\n                <span id=\"zixun\">在线咨询</span>\r\n                <div class=\"KeFu\"></div>\r\n            </div>\r\n            <!--<div class=\"Line\"></div>\r\n        <div class=\"AdviseBtn\">\r\n            <span>意见反馈</span>\r\n            <div class=\"Advise\"></div>\r\n        </div>-->\r\n        </div>\r\n        <div class=\"KeFuGroup\" style=\"display: none; width: 120px; height: 200px; position: fixed; bottom: 152px; right: 52px; z-index: 99999; background-color: rgba(136, 180, 34, 1); \">\r\n            <div class=\"ACloseBtn\"></div>\r\n            <div class=\"kefurenyuan1\"><a href=\"tencent://message/?uin=1132732514&Site=qq&Menu=yes\"><img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/QQPic.png\" />客服1</a></div>\r\n            <div class=\"kefurenyuan2\"><a href=\"tencent://message/?uin=1132732514&Site=qq&Menu=yes\"><img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/QQPic.png\" />客服2</a></div>\r\n            <div class=\"kefurenyuan2\"><a href=\"tencent://message/?uin=1132732514&Site=qq&Menu=yes\"><img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/QQPic.png\" />客服3</a></div>\r\n        </div>\r\n    </div>\r\n    \r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/juqery.responsiveslides.min.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery.lazyload.min.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/jquery.flexslider-min.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/index.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/index.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/tabview.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/indextab.js\"></");
	templateBuilder.Append("script>\r\n    <script type=\"text/javascript\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/JTimer_1.3.js\"></");
	templateBuilder.Append("script>\r\n</body>\r\n</html>\r\n");
	Response.Write(templateBuilder.ToString());
}
</script>
