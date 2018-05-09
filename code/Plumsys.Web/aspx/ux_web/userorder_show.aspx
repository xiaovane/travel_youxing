<%@ Page Language="C#" AutoEventWireup="true" Inherits="Plumsys.Web.UI.Page.userorder_show" ValidateRequest="false" %>
<%@ Import namespace="System.Collections.Generic" %>
<%@ Import namespace="System.Text" %>
<%@ Import namespace="System.Data" %>
<%@ Import namespace="Plumsys.Common" %>

<script runat="server">
override protected void OnInit(EventArgs e)
{

	/* 
		This page was created by Plumsys Template Engine at 2016-07-04 20:19:56.
		本页面代码由Plumsys模板引擎生成于 2016-07-04 20:19:56. 
	*/

	base.OnInit(e);
	StringBuilder templateBuilder = new StringBuilder(220000);

	templateBuilder.Append("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n<title>查看订单 - ");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("</title>\r\n<meta name=\"keywords\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_keyword));
	templateBuilder.Append("\" />\r\n<meta name=\"description\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_description));
	templateBuilder.Append("\" />\r\n    <link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/common.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/artdialog/ui-dialog.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery-1.11.2.min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/artdialog/dialog-plus-min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n</head>\r\n\r\n<body>\r\n<!--Header-->\r\n");

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
	templateBuilder.Append(linkurl("cart"));

	templateBuilder.Append("\">购物车<span id=\"shoppingCartCount\"> ');\r\n                            //$(\"#menu\").append('<script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=view_cart_count\"></span>件</a>');\r\n          \r\n                            $(\"#menu\").append('</span>');\r\n                        } else {\r\n                            $(\"#menu\").append('<span id=\"un_login\">');\r\n                            $(\"#menu\").append('<a class=\"singin\" href=\"");
	templateBuilder.Append(linkurl("login"));

	templateBuilder.Append("\">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;');\r\n                            $(\"#menu\").append('<a class=\"singup\" href=\"");
	templateBuilder.Append(linkurl("register"));

	templateBuilder.Append("\">注册</a>');\r\n                            $(\"#menu\").append('</span>');\r\n                        }\r\n                    }\r\n                });\r\n            </");
	templateBuilder.Append("script>\r\n            <div id=\"menu\" class=\"RightNavi\">\r\n              <a href='");
	templateBuilder.Append(linkurl("cart"));

	templateBuilder.Append("'>购物车<span id=\"shoppingCartCount\">\r\n                <script type=\"text/javascript\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=view_cart_count\"></");
	templateBuilder.Append("script></span>件</a>&nbsp;&nbsp;|&nbsp;&nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--nav end-->\r\n");


	templateBuilder.Append("\r\n<!--/Header-->\r\n\r\n<div class=\"section clearfix\">\r\n  <div class=\"line30\"></div>\r\n\r\n  <div class=\"info-wrap\">\r\n    <!--左侧导航-->\r\n    ");

	templateBuilder.Append("    <div class=\"info-box\">\r\n      <div class=\"avatar-box\">\r\n        <a href=\"");
	templateBuilder.Append(linkurl("usercenter","avatar"));

	templateBuilder.Append("\" class=\"img-box\">\r\n          ");
	if (userModel.avatar!="")
	{

	templateBuilder.Append("\r\n            <img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(userModel.avatar));
	templateBuilder.Append("\" />\r\n          ");
	}
	else
	{

	templateBuilder.Append("\r\n            <img src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/images/user-avatar.png\" />\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n        </a>\r\n        <h3>\r\n        ");
	if (userModel.nick_name!="")
	{

	templateBuilder.Append("\r\n          ");
	templateBuilder.Append(Utils.ObjectToStr(userModel.nick_name));
	templateBuilder.Append("\r\n        ");
	}
	else
	{

	templateBuilder.Append("\r\n          ");
	templateBuilder.Append(Utils.ObjectToStr(userModel.user_name));
	templateBuilder.Append("\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n        </h3>\r\n        <!--<p>余额：");
	templateBuilder.Append(Utils.ObjectToStr(userModel.amount));
	templateBuilder.Append(" 元</p>\r\n        <p>积分：");
	templateBuilder.Append(Utils.ObjectToStr(userModel.point));
	templateBuilder.Append(" 分</p>-->					\r\n      </div>\r\n      <ul class=\"side-nav\">\r\n        <li>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("userorder","list"));

	templateBuilder.Append("\">我的订单</a>\r\n            <!--<a href=\"");
	templateBuilder.Append(linkurl("cart"));

	templateBuilder.Append("\">购物车</a>-->\r\n          <!--<a href=\"");
	templateBuilder.Append(linkurl("useraddress"));

	templateBuilder.Append("\">收货地址</a>-->\r\n        </li>\r\n        <!--<li>\r\n           \r\n          <a href=\"");
	templateBuilder.Append(linkurl("useramount","recharge"));

	templateBuilder.Append("\">账户余额</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("userpoint","convert"));

	templateBuilder.Append("\">我的积分</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usermessage","system"));

	templateBuilder.Append("\">站内消息</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","invite"));

	templateBuilder.Append("\">邀请好友</a>\r\n        </li>-->\r\n        <li>\r\n          \r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","proinfo"));

	templateBuilder.Append("\">个人资料</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","avatar"));

	templateBuilder.Append("\">头像设置</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","password"));

	templateBuilder.Append("\">修改密码</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("usercenter","exit"));

	templateBuilder.Append("\">退出登录</a>\r\n        </li>\r\n      </ul>\r\n    </div>");


	templateBuilder.Append("\r\n    <!--/左侧导航-->\r\n    \r\n    <!--右侧内容-->\r\n    <div class=\"home-box\">\r\n      <!--查看订单-->\r\n      <div class=\"u-tab-head\">\r\n        <p>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("userorder","list"));

	templateBuilder.Append("\">交易订单</a>\r\n          <a href=\"");
	templateBuilder.Append(linkurl("userorder","close"));

	templateBuilder.Append("\">已关闭订单</a>\r\n        </p>\r\n      </div>\r\n      <div class=\"u-tab-content\">\r\n        <div class=\"title-div\">\r\n          <strong>查看订单</strong>\r\n        </div>\r\n        \r\n        ");
	if (model.status<4)
	{

	if (model.payment_status>0)
	{

	templateBuilder.Append("\r\n        <div class=\"step-box\">\r\n        ");
	}
	else
	{

	templateBuilder.Append("\r\n        <div class=\"step-box mini\">\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n          <ul>\r\n            <!--下单-->\r\n            <li class=\"first done\">\r\n              <div class=\"progress\">\r\n                <span class=\"text\">下单</span>\r\n              </div>\r\n              <div class=\"info\">\r\n                ");
	templateBuilder.Append(Utils.ObjectToStr(model.add_time));
	templateBuilder.Append("\r\n              </div>\r\n            </li>\r\n            <!--/下单-->\r\n            \r\n            ");
	if (model.payment_status>0)
	{

	templateBuilder.Append("\r\n            <!--付款-->\r\n            ");
	if (model.payment_status==2)
	{

	templateBuilder.Append("\r\n              <li class=\"done\">\r\n            ");
	}
	else
	{

	templateBuilder.Append("\r\n              <li>\r\n            ");
	}	//end for if

	templateBuilder.Append("\r\n              <div class=\"progress\">\r\n                <span class=\"text\">付款</span>\r\n              </div>\r\n              <div class=\"info\">\r\n                ");
	if (model.payment_status==2)
	{

	templateBuilder.Append("\r\n                ");
	templateBuilder.Append(Utils.ObjectToStr(model.payment_time));
	templateBuilder.Append("\r\n                ");
	}	//end for if

	templateBuilder.Append("\r\n              </div>\r\n            </li>\r\n            <!--/付款-->\r\n            ");
	}	//end for if

	templateBuilder.Append("\r\n            \r\n            <!--确认-->\r\n            ");
	if (model.status>=2)
	{

	templateBuilder.Append("\r\n            <li class=\"done\">\r\n            ");
	}
	else
	{

	templateBuilder.Append("\r\n            <li>\r\n            ");
	}	//end for if

	templateBuilder.Append("\r\n              <div class=\"progress\">\r\n                <span class=\"text\">确认</span>\r\n              </div>\r\n              <div class=\"info\">\r\n                ");
	if (model.status>=2)
	{

	templateBuilder.Append("\r\n                ");
	templateBuilder.Append(Utils.ObjectToStr(model.confirm_time));
	templateBuilder.Append("\r\n                ");
	}	//end for if

	templateBuilder.Append("\r\n              </div>\r\n            </li>\r\n            <!--/确认-->\r\n            \r\n            <!--发货-->\r\n            ");
	if (model.express_status==2)
	{

	templateBuilder.Append("\r\n            <li class=\"done\">\r\n            ");
	}
	else
	{

	templateBuilder.Append("\r\n            <li>\r\n            ");
	}	//end for if

	templateBuilder.Append("\r\n              <div class=\"progress\">\r\n                <span class=\"text\">发货</span>\r\n              </div>\r\n              <div class=\"info\">\r\n                ");
	if (model.express_status==2)
	{

	templateBuilder.Append("\r\n                ");
	templateBuilder.Append(Utils.ObjectToStr(model.express_time));
	templateBuilder.Append("\r\n                ");
	}	//end for if

	templateBuilder.Append("\r\n              </div>\r\n            </li>\r\n            <!--发货-->\r\n            \r\n            <!--完成-->\r\n            ");
	if (model.status>2)
	{

	templateBuilder.Append("\r\n            <li class=\"last done\">\r\n            ");
	}
	else
	{

	templateBuilder.Append("\r\n            <li class=\"last\">\r\n            ");
	}	//end for if

	templateBuilder.Append("\r\n              <div class=\"progress\">\r\n                <span class=\"text\">完成</span>\r\n              </div>\r\n              <div class=\"info\">\r\n                ");
	if (model.status>2)
	{

	templateBuilder.Append("\r\n                ");
	templateBuilder.Append(Utils.ObjectToStr(model.complete_time));
	templateBuilder.Append("\r\n                ");
	}	//end for if

	templateBuilder.Append("\r\n              </div>\r\n            </li>\r\n            <!--完成-->\r\n          </ul>\r\n        </div>\r\n        <div class=\"line20\"></div>\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n\r\n        <div class=\"form-box accept-box\">\r\n          <dl class=\"head\">\r\n            <dd>\r\n              订单号：");
	templateBuilder.Append(Utils.ObjectToStr(model.order_no));
	templateBuilder.Append("\r\n              ");
	if (get_order_payment_status(model.id))
	{

	templateBuilder.Append("\r\n              <a class=\"btn-pay\" href=\"");
	templateBuilder.Append(linkurl("payment","?action=confirm&order_no="+model.order_no));

	templateBuilder.Append("\">去付款</a>\r\n              ");
	}	//end for if

	templateBuilder.Append("\r\n            </dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>订单状态：</dt>\r\n            <dd>\r\n              ");
	templateBuilder.Append(get_order_status(model.id).ToString());

	templateBuilder.Append("\r\n            </dd>\r\n          </dl>\r\n          ");
	if (model.payment_status>0)
	{

	templateBuilder.Append("\r\n          <dl>\r\n            <dt>支付方式：</dt>\r\n            <dd>");
	templateBuilder.Append(get_payment_title(model.payment_id).ToString());

	templateBuilder.Append("</dd>\r\n          </dl>\r\n          ");
	}	//end for if

	if (model.express_status==2)
	{

	templateBuilder.Append("\r\n          <dl>\r\n            <dt>发货单号：</dt>\r\n            <dd>");
	templateBuilder.Append(get_express_title(model.express_id).ToString());

	templateBuilder.Append(" ");
	templateBuilder.Append(Utils.ObjectToStr(model.express_no));
	templateBuilder.Append("</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>物流信息：</dt>\r\n            <dd>\r\n              ");
	templateBuilder.Append(Utils.ObjectToStr(expressdetail));
	templateBuilder.Append("\r\n            </dd>\r\n          </dl>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n        </div>\r\n              \r\n        <div class=\"line10\"></div>\r\n        <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"5\" class=\"ftable\">\r\n          <tr>\r\n            <th align=\"left\" colspan=\"2\">商品信息</th>\r\n            <th width=\"10%\">单价</td>\r\n            <th width=\"10%\">积分</th>\r\n            <th width=\"10%\">数量</th>\r\n            <th width=\"10%\">金额</th>\r\n            <th width=\"10%\">预定日期</th>\r\n          </tr>\r\n          ");
	if (model.order_goods!=null)
	{

	foreach(Plumsys.Model.order_goods modelt in model.order_goods)
	{

	templateBuilder.Append("\r\n          <tr>\r\n            <td width=\"60\">\r\n              <a target=\"_blank\" href=\"");
	templateBuilder.Append(linkurl("goods_show",modelt.article_id));

	templateBuilder.Append("\">\r\n                <img src=\"");
	templateBuilder.Append(get_article_img_url(modelt.article_id).ToString());

	templateBuilder.Append("\" class=\"img\" />\r\n              </a>\r\n            </td>\r\n            <td align=\"left\">\r\n              <a target=\"_blank\" href=\"");
	templateBuilder.Append(linkurl("goods_show",modelt.article_id));

	templateBuilder.Append("\">");
	templateBuilder.Append(Utils.ObjectToStr(modelt.goods_title));
	templateBuilder.Append("</a>\r\n              <p>");
	templateBuilder.Append(Utils.ObjectToStr(modelt.spec_text));
	templateBuilder.Append("</p>\r\n            </td>\r\n            <td align=\"center\">\r\n              <s>￥");
	templateBuilder.Append(Utils.ObjectToStr(modelt.goods_price));
	templateBuilder.Append("</s>\r\n              <p>￥");
	templateBuilder.Append(Utils.ObjectToStr(modelt.real_price));
	templateBuilder.Append("</p>\r\n            </td>\r\n            <td align=\"center\">\r\n              ");
	if (modelt.point>0)
	{

	templateBuilder.Append("\r\n              +\r\n              ");
	}	//end for if

	templateBuilder.Append("\r\n              ");
	templateBuilder.Append(Utils.ObjectToStr(modelt.point));
	templateBuilder.Append("\r\n            </td>\r\n            <td align=\"center\">");
	templateBuilder.Append(Utils.ObjectToStr(modelt.quantity));
	templateBuilder.Append("</td>\r\n            <td align=\"center\">￥");
	templateBuilder.Append((modelt.real_price*modelt.quantity).ToString());

	templateBuilder.Append("</td>\r\n            <td align=\"center\">");
	templateBuilder.Append(Utils.ObjectToStr(modelt.use_date));
	templateBuilder.Append("</td>\r\n          </tr>\r\n          ");
	}	//end for if

	}
	else
	{

	templateBuilder.Append("\r\n          <tr><td colspan=\"7\" align=\"center\">暂无记录</td></tr>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n          <tr>\r\n            <td colspan=\"7\" align=\"right\">\r\n              <p>商品金额：<b class=\"red\">￥");
	templateBuilder.Append(Utils.ObjectToStr(model.real_amount));
	templateBuilder.Append("</b>&nbsp;&nbsp;+&nbsp;&nbsp;运费：<b class=\"red\">￥");
	templateBuilder.Append(Utils.ObjectToStr(model.express_fee));
	templateBuilder.Append("</b>&nbsp;&nbsp;+ &nbsp;&nbsp;支付手续费：<b class=\"red\">￥");
	templateBuilder.Append(Utils.ObjectToStr(model.payment_fee));
	templateBuilder.Append("</b>&nbsp;&nbsp;税费：<b class=\"red\">");
	templateBuilder.Append(Utils.ObjectToStr(model.invoice_taxes));
	templateBuilder.Append("</b></p>\r\n              <p style=\"font-size:22px;\">应付总金额：<b class=\"red\">￥");
	templateBuilder.Append(Utils.ObjectToStr(model.order_amount));
	templateBuilder.Append("</b></p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        \r\n        <div class=\"line10\"></div>\r\n        <div class=\"form-box accept-box\">\r\n          <dl class=\"head\">\r\n            <dd>收货信息</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>顾客姓名：</dt>\r\n            <dd>");
	templateBuilder.Append(Utils.ObjectToStr(model.accept_name));
	templateBuilder.Append("</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>送货地址：</dt>\r\n            <dd>");
	templateBuilder.Append(Utils.ObjectToStr(model.area));
	templateBuilder.Append(" ");
	templateBuilder.Append(Utils.ObjectToStr(model.address));
	templateBuilder.Append(" ");
	templateBuilder.Append(Utils.ObjectToStr(model.post_code));
	templateBuilder.Append("</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>联系电话：</dt>\r\n            <dd>");
	templateBuilder.Append(Utils.ObjectToStr(model.mobile));
	templateBuilder.Append(" ");
	templateBuilder.Append(Utils.ObjectToStr(model.telphone));
	templateBuilder.Append("</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>电子邮箱：</dt>\r\n            <dd>");
	templateBuilder.Append(Utils.ObjectToStr(model.email));
	templateBuilder.Append("</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>备注留言：</dt>\r\n            <dd>");
	templateBuilder.Append(Utils.ObjectToStr(model.message));
	templateBuilder.Append("</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>开具发票：</dt>\r\n            <dd>\r\n              ");
	if (model.is_invoice==1)
	{

	templateBuilder.Append("\r\n               是\r\n              ");
	}
	else
	{

	templateBuilder.Append("\r\n               否\r\n              ");
	}	//end for if

	templateBuilder.Append("\r\n            </dd>\r\n          </dl>\r\n          ");
	if (model.is_invoice==1)
	{

	templateBuilder.Append("\r\n          <dl>\r\n            <dt>发票抬头：</dt>\r\n            <dd>\r\n              ");
	templateBuilder.Append(Utils.ObjectToStr(model.invoice_title));
	templateBuilder.Append("\r\n            </dd>\r\n          </dl>\r\n          ");
	}	//end for if

	templateBuilder.Append("\r\n        </div>\r\n        \r\n      </div>\r\n      <!--/查看订单-->\r\n    </div>\r\n    <!--/右侧内容-->\r\n  </div>\r\n</div>\r\n    <div class=\"line30\"></div>\r\n    </div>\r\n\r\n<!--Footer-->\r\n");

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


	templateBuilder.Append("\r\n<!--/Footer-->\r\n</body>\r\n</html>");
	Response.Write(templateBuilder.ToString());
}
</script>
