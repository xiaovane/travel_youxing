using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Plumsys.Common;
using Plumsys.API.Payment.chinabankpc;

namespace Plumsys.Web.api.payment.chinabankpc
{
    public partial class return_url : System.Web.UI.Page
    {
        protected string v_oid;		// 订单号
        protected string v_pstatus;	// 支付状态码
        //20（支付成功，对使用实时银行卡进行扣款的订单）；
        //30（支付失败，对使用实时银行卡进行扣款的订单）；
        protected string v_pstring;	//支付状态描述
        protected string v_pmode;	//支付银行
        protected string v_amount;	//支付金额
        protected string v_moneytype;	//币种		
        protected string remark1;	// 备注1
        protected string remark2;	// 备注1
        protected string v_md5str;

        protected void Page_Load(object sender, EventArgs e)
        {
            //读取站点配置信息
            Model.siteconfig siteConfig = new BLL.siteconfig().loadConfig();
            Config xmlConfig = new Config(); //读取配置

            v_oid = PLRequest.GetString("v_oid").ToUpper();
            v_pstatus = PLRequest.GetString("v_pstatus");
            v_pstring =PLRequest.GetString("v_pstring");
            v_pmode = PLRequest.GetString("v_pmode");
            v_md5str =PLRequest.GetString("v_md5str");
            v_amount = PLRequest.GetString("v_amount");
            v_moneytype = PLRequest.GetString("v_moneytype");
            remark1 = PLRequest.GetString("remark1");
            remark2 = PLRequest.GetString("remark2");

            // 拼凑加密串
            string signtext = v_oid + v_pstatus + v_amount + v_moneytype + xmlConfig.Key;
            signtext = System.Web.Security.FormsAuthentication.HashPasswordForStoringInConfigFile(signtext, "md5").ToUpper();
            if (signtext == v_md5str)
            {
                if (v_pstatus.Equals("20"))
                {
                    //成功状态
                    Response.Redirect(new Web.UI.BasePage().linkurl("payment", "?action=succeed&order_no=" + v_oid));
                    return;
                }
            }

            //失败状态
            Response.Redirect(new Web.UI.BasePage().linkurl("payment", "?action=error"));
            return;
        }
    }
}