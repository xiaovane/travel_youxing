<%@ Page Language="C#" AutoEventWireup="true" Inherits="Plumsys.Web.UI.Page.shopping" ValidateRequest="false" %>
<%@ Import namespace="System.Collections.Generic" %>
<%@ Import namespace="System.Text" %>
<%@ Import namespace="System.Data" %>
<%@ Import namespace="Plumsys.Common" %>

<script runat="server">
override protected void OnInit(EventArgs e)
{

	/* 
		This page was created by Plumsys Template Engine at 2016-07-04 20:19:55.
		本页面代码由Plumsys模板引擎生成于 2016-07-04 20:19:55. 
	*/

	base.OnInit(e);
	StringBuilder templateBuilder = new StringBuilder(220000);

	templateBuilder.Append("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\r\n<title>确认订单 - ");
	templateBuilder.Append(Utils.ObjectToStr(site.name));
	templateBuilder.Append("</title>\r\n<meta name=\"keywords\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_keyword));
	templateBuilder.Append("\" />\r\n<meta name=\"description\" content=\"");
	templateBuilder.Append(Utils.ObjectToStr(site.seo_description));
	templateBuilder.Append("\" />\r\n<link href=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("css/validate.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n    <link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/info_detail.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<link href=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery-1.11.2.min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/jquery.form.min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/Validform_v5.3.2_min.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("scripts/jquery/PCASClass.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/common.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"");
	templateBuilder.Append("/templates/ux_default");
	templateBuilder.Append("/js/cart.js\"></");
	templateBuilder.Append("script>\r\n<script type=\"text/javascript\">\r\n$(function(){\r\n	//初始化收货地址\r\n	initUserAddress(\"#userAddress\");\r\n	//初始化表单\r\n	AjaxInitForm('#orderForm', '#btnSubmit', 0);\r\n});\r\n</");
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


	templateBuilder.Append("\r\n<!--/Header-->\r\n  \r\n<div class=\"section clearfix\">\r\n  <div class=\"cart-box\">\r\n    <h1>确认订单信息</h1>\r\n    <div class=\"cart-step\">\r\n      <ul>\r\n        <li class=\"item\"><span>1</span>放进购物车</li>\r\n        <li class=\"selected\"><span>2</span>填写订单信息</li>\r\n        <li class=\"last\"><span>3</span>支付/确定订单</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"line30\"></div>\r\n  <h3 class=\"bar-tit\">1、收货地址</h3>\r\n  \r\n  ");
	if (userModel!=null)
	{

	DataTable addrList = get_user_addr_book_list(0, "user_id="+userModel.id);

	templateBuilder.Append(" <!--取得一个DataTable-->\r\n  <ul id=\"userAddress\" class=\"address-list\">\r\n    ");
	foreach(DataRow dr in addrList.Rows)
	{

	if (Utils.ObjectToStr(dr["is_default"])=="1")
	{

	templateBuilder.Append("\r\n      <li class=\"selected\">\r\n      ");
	}
	else
	{

	templateBuilder.Append("\r\n      <li>\r\n      ");
	}	//end for if

	templateBuilder.Append("\r\n        <label>\r\n          <input name=\"user_book_id\" type=\"radio\" value=\"" + Utils.ObjectToStr(dr["id"]) + "\" />\r\n          <span>" + Utils.ObjectToStr(dr["area"]) + "" + Utils.ObjectToStr(dr["address"]) + " (" + Utils.ObjectToStr(dr["accept_name"]) + " 收)</span>\r\n          <em>" + Utils.ObjectToStr(dr["mobile"]) + "</em>\r\n        </label>\r\n        <input name=\"user_accept_name\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr["accept_name"]) + "\" />\r\n        <input name=\"user_area\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr["area"]) + "\" />\r\n        <input name=\"user_address\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr["address"]) + "\" />\r\n        <input name=\"user_mobile\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr["mobile"]) + "\" />\r\n        <input name=\"user_telphone\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr["telphone"]) + "\" />\r\n        <input name=\"user_email\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr["email"]) + "\" />\r\n        <input name=\"user_post_code\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr["post_code"]) + "\" />\r\n      </li>\r\n    ");
	}	//end for if

	templateBuilder.Append("\r\n  </ul>\r\n  ");
	}	//end for if

	templateBuilder.Append("\r\n  \r\n  <form id=\"orderForm\" name=\"orderForm\" url=\"");
	templateBuilder.Append(Utils.ObjectToStr(config.webpath));
	templateBuilder.Append("tools/submit_ajax.ashx?action=order_save&site=");
	templateBuilder.Append(Utils.ObjectToStr(site.build_path));
	templateBuilder.Append("\">\r\n  <div class=\"form-box address-info\">\r\n    <dl>\r\n      <dt>收货人姓名：</dt>\r\n      <dd>\r\n        <input name=\"book_id\" id=\"book_id\" type=\"hidden\" value=\"0\" />\r\n        <input name=\"accept_name\" id=\"accept_name\" type=\"text\" class=\"input txt wide\" value=\"\" datatype=\"s2-20\" sucmsg=\" \" />\r\n        <span class=\"Validform_checktip\">*收货人姓名</span>\r\n      </dd>\r\n    </dl>\r\n    <dl>\r\n      <dt>所属地区：</dt>\r\n      <dd>\r\n        <select id=\"province\" name=\"province\" class=\"select\"></select>\r\n        <select id=\"city\" name=\"city\" class=\"select\"></select>\r\n        <select id=\"area\" name=\"area\" class=\"select\" datatype=\"*\" sucmsg=\" \"></select>\r\n        <span class=\"Validform_checktip\">*请选择您所在的地区</span>\r\n      </dd>\r\n    </dl>\r\n    <dl>\r\n      <dt>详细地址：</dt>\r\n      <dd>\r\n        <input name=\"address\" id=\"address\" type=\"text\" class=\"input txt\" value=\"\" datatype=\"*2-100\" sucmsg=\" \" style=\"width:300px;\" />\r\n        <span class=\"Validform_checktip\">*除上面所属地区外的详细地址</span>\r\n      </dd>\r\n    </dl>\r\n    <dl>\r\n      <dt>手机号码：</dt>\r\n      <dd>\r\n          <input name=\"mobile\" id=\"mobile\" type=\"text\" class=\"input txt\" value=\"\" datatype=\"m\" sucmsg=\" \" />\r\n        <span class=\"Validform_checktip\">*收货人的手机号码</span>\r\n      </dd>\r\n    </dl>\r\n    <dl>\r\n      <dt>联系电话：</dt>\r\n      <dd>\r\n        <input name=\"telphone\" id=\"telphone\" type=\"text\" class=\"input txt\" value=\"\" />\r\n        <span class=\"Validform_checktip\">收货人的联系电话，非必填</span>\r\n      </dd>\r\n    </dl>\r\n    <dl>\r\n      <dt>电子邮箱：</dt>\r\n      <dd>\r\n        <input name=\"email\" id=\"email\" type=\"text\" class=\"input txt\" value=\"\" />\r\n        <span class=\"Validform_checktip\">方便通知订单状态，非必填</span>\r\n      </dd>\r\n    </dl>\r\n    <dl>\r\n      <dt>邮政编码：</dt>\r\n      <dd>\r\n        <input name=\"post_code\" id=\"post_code\" type=\"txt\" class=\"input txt\" />\r\n        <span class=\"Validform_checktip\">所在地区的邮政编码，非必填</span>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n  \r\n  <div class=\"line30\"></div>\r\n  <h3 class=\"bar-tit\">2、支付方式</h3>\r\n  <ul class=\"item-box\">\r\n    ");
	DataTable paymentList = get_payment_list(0, "is_lock=0 and (is_mobile=0 or is_mobile=1)");

	templateBuilder.Append(" <!--取得一个DataTable-->\r\n    ");
	int dr1__loop__id=0;
	foreach(DataRow dr1 in paymentList.Rows)
	{
		dr1__loop__id++;


	decimal poundage_amount = get_payment_poundage_amount(Utils.StrToInt(Utils.ObjectToStr(dr1["id"]), 0),goodsTotal.real_amount);

	templateBuilder.Append("\r\n    <li>\r\n      <label>\r\n      ");
	if (dr1__loop__id==(paymentList.Rows.Count))
	{

	templateBuilder.Append("\r\n        <input name=\"payment_id\" type=\"radio\" onclick=\"paymentAmountTotal(this);\" value=\"" + Utils.ObjectToStr(dr1["id"]) + "\" datatype=\"*\" sucmsg=\" \" />\r\n        <input name=\"payment_price\" type=\"hidden\" value=\"");
	templateBuilder.Append(Utils.ObjectToStr(poundage_amount));
	templateBuilder.Append("\" />" + Utils.ObjectToStr(dr1["title"]) + "\r\n      ");
	}
	else
	{

	templateBuilder.Append("\r\n        <input name=\"payment_id\" type=\"radio\" onclick=\"paymentAmountTotal(this);\" value=\"" + Utils.ObjectToStr(dr1["id"]) + "\" />\r\n        <input name=\"payment_price\" type=\"hidden\" value=\"");
	templateBuilder.Append(Utils.ObjectToStr(poundage_amount));
	templateBuilder.Append("\" />" + Utils.ObjectToStr(dr1["title"]) + "\r\n      ");
	}	//end for if

	templateBuilder.Append("\r\n        <em>手续费：");
	templateBuilder.Append(Utils.ObjectToStr(poundage_amount));
	templateBuilder.Append("元</em>\r\n      </label>\r\n    </li>\r\n    ");
	}	//end for if

	templateBuilder.Append("\r\n  </ul>\r\n  \r\n  <div class=\"line30\"></div>\r\n  <h3 class=\"bar-tit\">3、配送方式</h3>\r\n  <ul class=\"item-box\">\r\n    ");
	DataTable expressList = get_express_list(0, "is_lock=0");

	templateBuilder.Append(" <!--取得一个DataTable-->\r\n    ");
	int dr2__loop__id=0;
	foreach(DataRow dr2 in expressList.Rows)
	{
		dr2__loop__id++;


	templateBuilder.Append("\r\n      <li>\r\n        <label>\r\n        ");
	if (dr2__loop__id==(expressList.Rows.Count))
	{

	templateBuilder.Append("\r\n          <input name=\"express_id\" type=\"radio\" onclick=\"freightAmountTotal(this);\" value=\"" + Utils.ObjectToStr(dr2["id"]) + "\" datatype=\"*\" sucmsg=\" \" />\r\n          <input name=\"express_price\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr2["express_fee"]) + "\" />" + Utils.ObjectToStr(dr2["title"]) + "\r\n        ");
	}
	else
	{

	templateBuilder.Append("\r\n          <input name=\"express_id\" type=\"radio\" onclick=\"freightAmountTotal(this);\" value=\"" + Utils.ObjectToStr(dr2["id"]) + "\" />\r\n          <input name=\"express_price\" type=\"hidden\" value=\"" + Utils.ObjectToStr(dr2["express_fee"]) + "\" />" + Utils.ObjectToStr(dr2["title"]) + "\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n          <em>费用：" + Utils.ObjectToStr(dr2["express_fee"]) + "元</em>\r\n        </label>\r\n      </li>\r\n    ");
	}	//end for if

	templateBuilder.Append("\r\n  </ul>\r\n    \r\n  <div class=\"line30\"></div>\r\n  <h3 class=\"bar-tit\">4、商品清单</h3>\r\n  <table width=\"100%\" border=\"0\" align=\"center\" cellpadding=\"8\" cellspacing=\"0\" class=\"cart-table\">\r\n    <tr>\r\n      <th colspan=\"2\" align=\"left\">商品信息</th>\r\n      <th width=\"84\" align=\"left\">单价</th>\r\n      <th width=\"84\" align=\"left\">优惠(元)</th>\r\n      <th width=\"84\" align=\"center\">数量</th>\r\n      <th width=\"104\" align=\"left\">金额(元)</th>\r\n      <th width=\"84\" align=\"left\">预定日期</th>\r\n      <th width=\"84\" align=\"center\">库存(件)</th>\r\n    </tr>\r\n    ");
	foreach(Plumsys.Model.cart_items modelt in goodsList)
	{

	templateBuilder.Append("\r\n    <tr>\r\n      <td width=\"68\">\r\n        <a target=\"_blank\" href=\"");
	templateBuilder.Append(linkurl("goods_show",modelt.article_id));

	templateBuilder.Append("\">\r\n          <img src=\"");
	templateBuilder.Append(Utils.ObjectToStr(modelt.img_url));
	templateBuilder.Append("\" class=\"img\" />\r\n        </a>\r\n      </td>\r\n      <td>\r\n        <a target=\"_blank\" href=\"");
	templateBuilder.Append(linkurl("goods_show",modelt.article_id));

	templateBuilder.Append("\">");
	templateBuilder.Append(Utils.ObjectToStr(modelt.title));
	templateBuilder.Append("</a>\r\n        <p class=\"stxt\">");
	templateBuilder.Append(Utils.ObjectToStr(modelt.spec_text));
	templateBuilder.Append("</p>\r\n      </td>\r\n      <td>\r\n        <span class=\"red\">\r\n          ￥");
	templateBuilder.Append(Utils.ObjectToStr(modelt.user_price));
	templateBuilder.Append("\r\n        </span>\r\n      </td>\r\n      <td>\r\n        <span class=\"red\">\r\n          ￥");
	templateBuilder.Append((modelt.sell_price-modelt.user_price).ToString());

	templateBuilder.Append("\r\n        </span>\r\n      </td>\r\n      <td align=\"center\">");
	templateBuilder.Append(Utils.ObjectToStr(modelt.quantity));
	templateBuilder.Append("</td>\r\n      <td>\r\n        <span class=\"red\">\r\n          ￥");
	templateBuilder.Append((modelt.user_price*modelt.quantity).ToString());

	templateBuilder.Append("\r\n        </span>\r\n      </td>\r\n      <td align=\"center\">\r\n          ");
	templateBuilder.Append(Utils.ObjectToStr(modelt.use_date));
	templateBuilder.Append("\r\n      </td>\r\n      <td align=\"center\">\r\n        ");
	templateBuilder.Append(Utils.ObjectToStr(modelt.stock_quantity));
	templateBuilder.Append("\r\n      </td>\r\n    </tr>\r\n    ");
	}	//end for if

	if (goodsList.Count<1)
	{

	templateBuilder.Append("\r\n    <tr>\r\n      <td colspan=\"8\">\r\n        <div class=\"msg-tips\">\r\n          <div class=\"ico warning\"></div>\r\n          <div class=\"msg\">\r\n            <strong>购物车没有商品！</strong>\r\n            <p>您的购物车为空，<a href=\"");
	templateBuilder.Append(linkurl("index"));

	templateBuilder.Append("\">马上去购物</a>吧！</p>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    ");
	}	//end for if

	templateBuilder.Append("\r\n  </table>\r\n  \r\n  <div class=\"line30\"></div>\r\n  <h3 class=\"bar-tit\">5、结算信息</h3>\r\n  <div class=\"buy-foot\">\r\n    <div class=\"left\">\r\n      <dl>\r\n        <dd>\r\n          <label><input name=\"is_invoice\" id=\"is_invoice\" type=\"checkbox\" value=\"1\" onclick=\"taxAmoutTotal(this);\" /> 是否开具发票</label>\r\n          <input name=\"taxAmout\" id=\"taxAmout\" type=\"hidden\" value=\"");
	templateBuilder.Append(get_order_taxamount(goodsTotal.real_amount).ToString());

	templateBuilder.Append("\" />\r\n        </dd>\r\n      </dl>\r\n      <dl id=\"invoiceBox\" style=\"display:none;\">\r\n        <dt>发票抬头(100字符以内)</dt>\r\n        <dd>\r\n           <input name=\"invoice_title\" id=\"invoice_title\" type=\"text\" class=\"input\" />\r\n        </dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>订单备注(100字符以内)</dt>\r\n        <dd>\r\n          <textarea name=\"message\" class=\"input\" style=\"height:35px;\"></textarea>\r\n        </dd>\r\n      </dl>\r\n    </div>\r\n    <div class=\"right\">\r\n      <p>\r\n        商品 <label class=\"price\">");
	templateBuilder.Append(Utils.ObjectToStr(goodsTotal.total_quantity));
	templateBuilder.Append("</label> 件&nbsp;&nbsp;&nbsp;&nbsp;\r\n        商品金额：￥<label id=\"goodsAmount\" class=\"price\">");
	templateBuilder.Append(Utils.ObjectToStr(goodsTotal.real_amount));
	templateBuilder.Append("</label> 元&nbsp;&nbsp;&nbsp;&nbsp;\r\n        总积分：<label class=\"price\">");
	templateBuilder.Append(Utils.ObjectToStr(goodsTotal.total_point));
	templateBuilder.Append("</label> 分\r\n      </p>\r\n      <p>\r\n        运费：￥<label id=\"expressFee\" class=\"price\">0.00</label> 元 +\r\n        支付手续费：￥<label id=\"paymentFee\" class=\"price\">0.00</label> 元 +\r\n        税费：￥<label id=\"taxesFee\" class=\"price\">0.00</label> 元\r\n      </p>\r\n      <p class=\"txt-box\">\r\n        应付总金额：￥<label id=\"totalAmount\" class=\"price\">");
	templateBuilder.Append(Utils.ObjectToStr(goodsTotal.real_amount));
	templateBuilder.Append("</label>\r\n      </p>\r\n      <p class=\"btn-box\">\r\n        <a class=\"btn\" href=\"");
	templateBuilder.Append(linkurl("cart"));

	templateBuilder.Append("\">返回购物车</a>\r\n        ");
	if (goodsTotal.total_quantity>0)
	{

	templateBuilder.Append("\r\n        <input id=\"btnSubmit\" name=\"btnSubmit\" type=\"submit\" value=\"确认提交\" class=\"btn btn-success\" />\r\n        ");
	}
	else
	{

	templateBuilder.Append("\r\n        <input id=\"btnSubmit\" name=\"btnSubmit\" type=\"button\" value=\"确认提交\" class=\"btn btn-gray\" disabled=\"disabled\" />\r\n        ");
	}	//end for if

	templateBuilder.Append("\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"clear\"></div>\r\n  </form>\r\n   \r\n</div>\r\n\r\n<!--Footer-->\r\n");

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
