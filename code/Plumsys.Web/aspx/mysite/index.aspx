<%@ Page Language="C#" AutoEventWireup="true" Inherits="Plumsys.Web.UI.Page.index" ValidateRequest="false" %>
<%@ Import namespace="System.Collections.Generic" %>
<%@ Import namespace="System.Text" %>
<%@ Import namespace="System.Data" %>
<%@ Import namespace="Plumsys.Common" %>

<script runat="server">
override protected void OnInit(EventArgs e)
{

	/* 
		This page was created by Plumsys Template Engine at 2016-06-03 11:00:20.
		本页面代码由Plumsys模板引擎生成于 2016-06-03 11:00:20. 
	*/

	base.OnInit(e);
	StringBuilder templateBuilder = new StringBuilder(220000);

	templateBuilder.Append("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n<title>优行旅游</title>\r\n<meta name=\"keywords\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_keyword));
	templateBuilder.Append("\" />\r\n<meta name=\"description\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_description));
	templateBuilder.Append("\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/css/index.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery-1.11.2.min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/js/jquery.flexslider-min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n\r\n</head>\r\n<body>\r\n<div class=\"wrap\">\r\n<div class=\"Head\">\r\n  <div class=\"Navi\">\r\n    <div class=\"MainPage\">\r\n      <div class=\"Logo\"> <a title=\"logo\" href=\"http://www.youxing.com/\"\r\n                           target=\"_self\"> <img alt=\"优行网\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/images/logoadd.png\" /> </a> </div>\r\n      <div class=\"LeftNavi\">\r\n        <div class=\"nav\">\r\n          <div class=\"c-wrapper\">\r\n            <div class=\"serchbox\">\r\n              <div class=\"tab-view\">\r\n                <div class=\"searchtype\" data-role=\"head\">\r\n                  <ul>\r\n                    <li data-role=\"tab\" data-target=\"tab-a\">跟团游</li>\r\n                    <li data-role=\"tab\" data-target=\"tab-b\">自由行</li>\r\n                    <li data-role=\"tab\" data-target=\"tab-c\">酒店</li>\r\n                    <li data-role=\"tab\" data-target=\"tab-d\">门票</li>\r\n                    <li data-role=\"tab\" data-target=\"tab-e\">玩乐</li>\r\n                    <li data-role=\"tab\" data-target=\"tab-f\">通讯</li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"searchtypeconnent\" data-role=\"body\">\r\n                  <div data-role=\"tab-content\" data-id=\"tab-a\">\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"chufa\">出发地：</div>\r\n                      <div class=\"mudi\">目的地：</div>\r\n                    </div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"chufa\">\r\n                        <input type=\"text\" class=\"inputchufa\" placeholder=\"请输入出发地\" value=\"\" />\r\n                      </div>\r\n                      <div class=\"mudi\">\r\n                        <input type=\"text\" class=\"inputmudi\" placeholder=\"请输入目的地\" value=\"\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                      <div class=\"searchbottondetail floatR\">\r\n                        <input type=\"button\" value=\"搜索\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"bordorline ml20 mt10 fsize14\"> </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热搜城市：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热门景点：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div data-role=\"tab-content\" data-id=\"tab-b\">\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"searchbox mt10\">\r\n                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                      <div class=\"searchbottondetail floatR\">\r\n                        <input type=\"button\" value=\"搜索\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"bordorline ml20 mt10 fsize14\"> </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热搜城市：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热门景点：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div data-role=\"tab-content\" data-id=\"tab-c\">\r\n                    <div class=\"bordorheader ml20 mt10 fsize16\"> 国内酒店/国际酒店 </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"chufa\">目的地：</div>\r\n                      <div class=\"mudi\">关键字(选填)：</div>\r\n                    </div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"chufa\">\r\n                        <input type=\"text\" class=\"inputchufa\" placeholder=\"苏州\" value=\"\" />\r\n                      </div>\r\n                      <div class=\"mudi\">\r\n                        <input type=\"text\" class=\"inputmudi\" placeholder=\"酒店名称\" value=\"\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"chufa\">入住日期：</div>\r\n                      <div class=\"mudi\">退房日期：</div>\r\n                    </div>\r\n                    <div class=\"ml20 fsize14\"> \r\n                      <script>\r\n            var nowday = new Date();\r\n            </");
	templateBuilder.Append("script>\r\n                      <div class=\"chufa\">\r\n                        <input type=\"text\" class=\"inputchufa\" placeholder=\"请选择日期\" onclick=\"JTC.setday({minDate:nowday, ranged: true})\" />\r\n                      </div>\r\n                      <div class=\"mudi\">\r\n                        <input type=\"text\" class=\"inputmudi\" placeholder=\"请选择日期\" onclick=\"JTC.setday({minDate:nowday, ranged: true})\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                      <div class=\"searchbottondetail floatR\">\r\n                        <input type=\"button\" value=\"搜索\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"bordorline ml20 mt10 fsize14\"> </div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热搜城市：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div data-role=\"tab-content\" data-id=\"tab-d\">\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"searchbox mt10\">\r\n                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                      <div class=\"searchbottondetail floatR\">\r\n                        <input type=\"button\" value=\"搜索\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"bordorline ml20 mt10 fsize14\"> </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热搜城市：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热门景点：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div data-role=\"tab-content\" data-id=\"tab-e\">\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"searchbox mt10\">\r\n                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                      <div class=\"searchbottondetail floatR\">\r\n                        <input type=\"button\" value=\"搜索\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"bordorline ml20 mt10 fsize14\"> </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热搜城市：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热门景点：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div data-role=\"tab-content\" data-id=\"tab-f\">\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"searchbox mt10\">\r\n                        <input type=\"text\" class=\"inputsearchbox\" placeholder=\"请输入目的地关键词\" value=\"\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"searchbotton ml20 mt10 fsize14\">\r\n                      <div class=\"searchbottondetail floatR\">\r\n                        <input type=\"button\" value=\"搜索\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"bordorline ml20 mt10 fsize14\"> </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热搜城市：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                          <li>测试城市</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <div class=\"ml20 fsize14\">\r\n                      <div class=\"resoucity floatL\">热门景点：</div>\r\n                      <div class=\"resoucitylist floatL\">\r\n                        <ul>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                          <li>测景景点</li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div></div>\r\n            <div class=\"navitems floatL\">\r\n              <ul class=\"header_themlist\">\r\n                <li> <a class=\"title\" href=\"#\"\r\n                                               target=\"_self\"> 跟团游\r\n                  <div class=\"navitag\" style=\"display: none;\"></div>\r\n                  </a>\r\n                  <div class=\"navitems_content one_list\">\r\n                    <dl class=\"nav_content_left\">\r\n                      <dd> <a href=\"#\">境外1</a> </dd>\r\n                      <dd> <a href=\"#\">境内1</a> </dd>\r\n                    </dl>\r\n                  </div>\r\n                </li>\r\n                <li> <a class=\"title\" href=\"#\"\r\n                                               target=\"_self\"> 自由行\r\n                  <div class=\"navitag\" style=\"display: none;\"></div>\r\n                  </a>\r\n                  <div class=\"navitems_content one_list\">\r\n                    <dl class=\"nav_content_left\">\r\n                      <dd> <a href=\"#\">境外2</a> </dd>\r\n                      <dd> <a href=\"#\">境内2</a> </dd>\r\n                    </dl>\r\n                  </div>\r\n                </li>\r\n                <li> <a class=\"title\" href=\"#\"\r\n                                               target=\"_self\"> 酒店\r\n                  <div class=\"navitag\" style=\"display: none;\"></div>\r\n                  </a>\r\n                  <div class=\"navitems_content one_list\">\r\n                    <dl class=\"nav_content_left\">\r\n                      <dd> <a href=\"#\">境外3</a> </dd>\r\n                      <dd> <a href=\"#\">境内3</a> </dd>\r\n                    </dl>\r\n                  </div>\r\n                </li>\r\n                <li> <a class=\"title\" href=\"#\"\r\n                                               target=\"_self\"> 门票\r\n                  <div class=\"navitag\" style=\"display: none;\"></div>\r\n                  </a>\r\n                  <div class=\"navitems_content one_list\">\r\n                    <dl class=\"nav_content_left\">\r\n                      <dd> <a href=\"#\">境外4</a> </dd>\r\n                      <dd> <a href=\"#\">境内4</a> </dd>\r\n                    </dl>\r\n                  </div>\r\n                </li>\r\n                <li class=\"navjwct\"> <a class=\"title\" href=\"#\"\r\n                                               target=\"_self\"> 玩乐\r\n                  <div class=\"navitag\" style=\"display: none;\"></div>\r\n                  </a>\r\n                  <div class=\"navitems_content one_list\">\r\n                    <dl class=\"nav_content_left\">\r\n                      <dd> <a href=\"#\">境外5</a> </dd>\r\n                      <dd> <a href=\"#\">境内5</a> </dd>\r\n                    </dl>\r\n                  </div>\r\n                </li>\r\n                <li class=\"navhome selected\"> <a class=\"title\" href=\"#\"\r\n                                               target=\"_self\"> 通讯\r\n                  <div class=\"navitag\" style=\"display: none;\"></div>\r\n                  </a>\r\n                  <div class=\"navitems_content one_list\">\r\n                    <dl class=\"nav_content_left\">\r\n                      <dd> <a href=\"#\">境外6</a> </dd>\r\n                      <dd> <a href=\"#\">境内6</a> </dd>\r\n                    </dl>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"RightNavi\"> <span id=\"un_login\"> <a class=\"singin\" href=\"#\" target=\"_self\">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class=\"singup\" href=\"#\" target=\"_self\">注册</a> </span> </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"SliderBox\">\r\n  <div class=\"Slider\">\r\n    <ul class=\"rslides\">\r\n      ");
	DataTable focusNews = get_article_list("carousel", 0,0, 8, "status=0 and is_slide=1 and img_url<>''");

	foreach(DataRow dr in focusNews.Rows)
	{

	templateBuilder.Append("\r\n      <li> <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("carousel_detail",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\"> <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" /> </a> </li>\r\n      ");
	}	//end for if

	templateBuilder.Append("\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"HeadMainPage\">\r\n  <div class=\"search-new\">\r\n    <div id=\"header_search_box\">\r\n      <div class=\"s-lft\">\r\n        <input id=\"defaultSearch\" type=\"hidden\" />\r\n        <input name=\"home_city\" class=\"typeahead city\" id=\"header_search_city_input\" type=\"text\" placeholder=\"跟团游/自由行/酒店/门票\" value=\"\" />\r\n      </div>\r\n      <div class=\"s-rgt\">\r\n        <input class=\"btn\" id=\"header_search_button\" type=\"button\" value=\"\" />\r\n      </div>\r\n      <div class=\"clear\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ContentGrey\">\r\n  <div class=\"MainPage\">\r\n    <div class=\"ContentHead\"><a href=\"#\"><span>跟团游</span> </a></div>\r\n    <div class=\"ContentGroup\">\r\n      <ul class=\"img-list ilist\">\r\n        ");
	DataTable PackageTour = get_article_list("package_tour", 0,0, 4, "");

	foreach(DataRow dr in PackageTour.Rows)
	{

	templateBuilder.Append("\r\n        <li> <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("package_tour_detail",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\">\r\n          ");
	if (Utils.ObjectToStr(dr["is_top"])=="1")
	{

	templateBuilder.Append("\r\n          <span class=\"abs-txt\">特价</span>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n          <span class=\"abs-bg\"></span> <span class=\"price\"> <i>¥" + Utils.ObjectToStr(dr["market_price"]) + "</i> <b>¥</b>" + Utils.ObjectToStr(dr["sell_price"]) + " </span> <span class=\"protxt\">" + Utils.ObjectToStr(dr["title"]) + "</span> <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" class=\"lazy_img\" /> </a> </li>\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ContentGrey\">\r\n  <div class=\"MainPage\">\r\n    <div class=\"ContentHead\"><a href=\"#\"><span>自由行</span> </a></div>\r\n    <div class=\"ContentGroup\">\r\n      <ul class=\"img-list ilist\">\r\n        ");
	DataTable Walker = get_article_list("walker", 0,0, 4, "");

	foreach(DataRow dr in Walker.Rows)
	{

	templateBuilder.Append("\r\n        <li> <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("walker_detail",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\">\r\n          ");
	if (Utils.ObjectToStr(dr["is_top"])=="1")
	{

	templateBuilder.Append("\r\n          <span class=\"abs-txt\">特价</span>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n          <span class=\"abs-bg\"></span> <span class=\"price\"> <i>¥" + Utils.ObjectToStr(dr["market_price"]) + "</i> <b>¥</b>" + Utils.ObjectToStr(dr["sell_price"]) + " </span> <span class=\"protxt\">" + Utils.ObjectToStr(dr["title"]) + "</span> <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" class=\"lazy_img\" /> </a> </li>\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ContentGrey\">\r\n  <div class=\"MainPage\">\r\n    <div class=\"ContentHead\"><a href=\"#\"><span>酒店</span> </a></div>\r\n    <div class=\"ContentGroup\">\r\n      <ul class=\"img-list ilist\">\r\n        ");
	DataTable Grogshop = get_article_list("grog_shop", 0,0, 4, "");

	foreach(DataRow dr in Grogshop.Rows)
	{

	templateBuilder.Append("\r\n        <li> <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("grog_shop_detail",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\">\r\n          ");
	if (Utils.ObjectToStr(dr["is_top"])=="1")
	{

	templateBuilder.Append("\r\n          <span class=\"abs-txt\">特价</span>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n          <span class=\"abs-bg\"></span> <span class=\"price\"> <i>¥" + Utils.ObjectToStr(dr["market_price"]) + "</i> <b>¥</b>" + Utils.ObjectToStr(dr["sell_price"]) + " </span> <span class=\"protxt\">" + Utils.ObjectToStr(dr["title"]) + "</span> <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" class=\"lazy_img\" /> </a> </li>\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ContentGrey\">\r\n  <div class=\"MainPage\">\r\n    <div class=\"ContentHead\"><a href=\"#\"><span>门票</span> </a></div>\r\n    <div class=\"ContentGroup\">\r\n      <ul class=\"img-list ilist\">\r\n        ");
	DataTable Ticket = get_article_list("ticket", 0,0, 4, "");

	foreach(DataRow dr in Ticket.Rows)
	{

	templateBuilder.Append("\r\n        <li> <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("ticket_detail",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\">\r\n          ");
	if (Utils.ObjectToStr(dr["is_top"])=="1")
	{

	templateBuilder.Append("\r\n          <span class=\"abs-txt\">特价</span>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n          <span class=\"abs-bg\"></span> <span class=\"price\"> <i>¥" + Utils.ObjectToStr(dr["market_price"]) + "</i> <b>¥</b>" + Utils.ObjectToStr(dr["sell_price"]) + " </span> <span class=\"protxt\">" + Utils.ObjectToStr(dr["title"]) + "</span> <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" class=\"lazy_img\" /> </a> </li>\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ContentGrey\">\r\n  <div class=\"MainPage\">\r\n    <div class=\"ContentHead\"><a href=\"#\"><span>玩乐</span> </a></div>\r\n    <div class=\"ContentGroup\">\r\n      <ul class=\"img-list ilist\">\r\n        ");
	DataTable Ploy = get_article_list("ploy", 0,0, 4, "");

	foreach(DataRow dr in Ploy.Rows)
	{

	templateBuilder.Append("\r\n        <li> <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("ploy_detail",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\">\r\n          ");
	if (Utils.ObjectToStr(dr["is_top"])=="1")
	{

	templateBuilder.Append("\r\n          <span class=\"abs-txt\">特价</span>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n          <span class=\"abs-bg\"></span> <span class=\"price\"> <i>¥" + Utils.ObjectToStr(dr["market_price"]) + "</i> <b>¥</b>" + Utils.ObjectToStr(dr["sell_price"]) + " </span> <span class=\"protxt\">" + Utils.ObjectToStr(dr["title"]) + "</span> <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" class=\"lazy_img\" /> </a> </li>\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ContentGrey\">\r\n    <div class=\"MainPage\">\r\n      <div class=\"ContentHead\"><a href=\"#\"><span>通讯</span> </a></div>\r\n      <div class=\"ContentGroup\">\r\n        <ul class=\"img-list ilist\">\r\n          ");
	DataTable Communicate = get_article_list("communicate", 0,0, 4, "");

	foreach(DataRow dr in Communicate.Rows)
	{

	templateBuilder.Append("\r\n          <li> <a title=\"" + Utils.ObjectToStr(dr["title"]) + "\" href=\"");
	templateBuilder.Append(linkurl("communicate_detail",Utils.ObjectToStr(dr["id"])));

	templateBuilder.Append("\">\r\n            ");
	if (Utils.ObjectToStr(dr["is_top"])=="1")
	{

	templateBuilder.Append("\r\n            <span class=\"abs-txt\">特价</span>\r\n            ");
	}	//end for if

	templateBuilder.Append("\r\n            <span class=\"abs-bg\"></span> <span class=\"price\"> <i>¥" + Utils.ObjectToStr(dr["market_price"]) + "</i> <b>¥</b>" + Utils.ObjectToStr(dr["sell_price"]) + " </span> <span class=\"protxt\">" + Utils.ObjectToStr(dr["title"]) + "</span> <img src=\"" + Utils.ObjectToStr(dr["img_url"]) + "\" class=\"lazy_img\" /> </a> </li>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ");

	templateBuilder.Append("\r\n        <div class=\"Foot\">\r\n            <div class=\"FootHead\">\r\n                <div class=\"MainPage\">\r\n                    <div class=\"FootListGroup\">\r\n                        <ul>\r\n                            <li><i></i>关于我们</li>\r\n                            <li>\r\n                                <a href=\"#\" target=\"_blank\">优行简介</a>\r\n                            </li>\r\n                            <li><a href=\"#\" target=\"_blank\">联系我们</a></li>\r\n                            <li>\r\n                                <a href=\"#\" target=\"_blank\">\r\n                                    职位招聘\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\" target=\"_blank\">\r\n                                    加盟合作\r\n                                </a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                        <ul>\r\n                            <li><i></i>网站条款</li>\r\n                            <li>\r\n                                <a href=\"#\"\r\n                                   target=\"_blank\">用户协议</a>\r\n                            </li>\r\n                            <li><a href=\"#\" target=\"_blank\">隐私保护</a></li>\r\n                            <li>\r\n                                <a href=\"#\"\r\n                                   target=\"_blank\">版权声明</a>\r\n                            </li>\r\n                        </ul>\r\n                        <ul>\r\n                            <li><i></i>友情链接</li>\r\n                            <li>\r\n                                <a href=\"#\"\r\n                                   target=\"_blank\">友情链接1</a>\r\n                            </li>\r\n                            <li><a href=\"#\" target=\"_blank\">友情链接2</a></li>\r\n                            <li>\r\n                                <a href=\"#\"\r\n                                   target=\"_blank\">友情链接3</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\"\r\n                                   target=\"_blank\">友情链接4</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"QrCodeBox\">\r\n                        <div class=\"QrCode\">\r\n                            <img src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/images/wechatcode.jpg\" />\r\n                            <span>官方微信</span>\r\n                        </div>\r\n                        <div class=\"telephone\">\r\n                            <img src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/images/telephone.png\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"FootLast\">\r\n                <div class=\"MainPage\">\r\n                    <p>Copyright © 2013-2016, youxing.com.All Rights Reserved.</p><span>\r\n                        苏州优行网络有限公司. |\r\n                        京ICP证 140491号 | 京ICP备14002764号-1 | 旅行社业务经营许可证 L-BJ-CJ00104\r\n                    </span>\r\n                    <div style=\"clear: both;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      <!--footer end-->\r\n   \r\n   \r\n");


	templateBuilder.Append("    \r\n  <div class=\"RightBox\" style=\"display: none;\">\r\n    <div class=\"KeFuBox\" id=\"KeFuBtn\"> <span id=\"zixun\">在线咨询</span>\r\n      <div class=\"KeFu\"></div>\r\n    </div>\r\n    <!--<div class=\"Line\"></div>\r\n            <div class=\"AdviseBtn\">\r\n                <span>意见反馈</span>\r\n                <div class=\"Advise\"></div>\r\n            </div>--> \r\n  </div>\r\n  <div class=\"KeFuGroup\" style=\"display: none; width: 120px; height: 200px; position: fixed; bottom: 152px; right: 52px; z-index: 99999; background-color: rgba(136, 180, 34, 1); \">\r\n    <div class=\"ACloseBtn\"></div>\r\n    <div class=\"kefurenyuan1\"><a href=\"#\"><img src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/images/QQPic.png\" />客服1</a></div>\r\n    <div class=\"kefurenyuan2\"><a href=\"#\"><img src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/images/QQPic.png\" />客服2</a></div>\r\n    <div class=\"kefurenyuan2\"><a href=\"#\"><img src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/images/QQPic.png\" />客服3</a></div>\r\n  </div>\r\n</div>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/js/jquery-1.9.1.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/js/index.js\"></");
	templateBuilder.Append("script> \r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/js/tabview.js\"></");
	templateBuilder.Append("script> \r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/js/indextab.js\"></");
	templateBuilder.Append("script> \r\n<script type=\"text/javascript\" src=\"");
	templateBuilder.Append("/templates/mysite");
	templateBuilder.Append("/js/JTimer_1.3.js\"></");
	templateBuilder.Append("script>\r\n</body>\r\n</html>\r\n");
	Response.Write(templateBuilder.ToString());
}
</script>
