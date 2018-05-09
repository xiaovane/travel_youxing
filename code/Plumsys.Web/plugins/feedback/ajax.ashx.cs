using System;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Web;
using System.Web.SessionState;
using Plumsys.Web.UI;
using Plumsys.Common;

namespace Plumsys.Web.Plugin.Feedback
{
    /// <summary>
    /// 管理后台AJAX处理页
    /// </summary>
    public class ajax : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            //取得处事类型
            string action = PLRequest.GetQueryString("action");

            switch (action)
            {
                case "add": //发布留言
                    feedback_add(context);
                    break;
            }

        }

        #region 发布留言================================
        private void feedback_add(HttpContext context)
        {
            StringBuilder strTxt = new StringBuilder();
            BLL.feedback bll = new BLL.feedback();
            Model.feedback model = new Model.feedback();

            string _site_path = PLRequest.GetQueryString("site");
            string _code = PLRequest.GetFormString("txtCode");
            string _title = PLRequest.GetFormString("txtTitle");
            string _content = PLRequest.GetFormString("txtContent");
            string _user_name = PLRequest.GetFormString("txtUserName");
            string _user_tel = PLRequest.GetFormString("txtUserTel");
            string _user_qq = PLRequest.GetFormString("txtUserQQ");
            string _user_email = PLRequest.GetFormString("txtUserEmail");

            //检查站点目录
            if (string.IsNullOrEmpty(_site_path))
            {
                context.Response.Write("{\"status\":0, \"msg\":\"对不起，网站传输参数有误！\"}");
                return;
            }
            //校检验证码
            if (string.IsNullOrEmpty(_code))
            {
                context.Response.Write("{\"status\":0, \"msg\":\"对不起，请输入验证码！\"}");
                return;
            }
            if (context.Session[PLKeys.SESSION_CODE] == null)
            {
                context.Response.Write("{\"status\":0, \"msg\":\"对不起，验证码已过期！\"}");
                return;
            }
            if (_code.ToLower() != (context.Session[PLKeys.SESSION_CODE].ToString()).ToLower())
            {
                context.Response.Write("{\"status\":0, \"msg\":\"验证码与系统的不一致！\"}");
                return;
            }
            if (string.IsNullOrEmpty(_content))
            {
                context.Response.Write("{\"status\": 0, \"msg\": \"对不起，请输入留言的内容！\"}");
                return;
            }
            model.site_path = Utils.DropHTML(_site_path);
            model.title = Utils.DropHTML(_title);
            model.content = Utils.ToHtml(_content);
            model.user_name = Utils.DropHTML(_user_name);
            model.user_tel = Utils.DropHTML(_user_tel);
            model.user_qq = Utils.DropHTML(_user_qq);
            model.user_email = Utils.DropHTML(_user_email);
            model.add_time = DateTime.Now;
            model.is_lock = 1; //不需要审核，请改为0
            if (bll.Add(model) > 0)
            {
                context.Response.Write("{\"status\": 1, \"msg\": \"恭喜您，留言提交成功！\"}");
                return;
            }
            context.Response.Write("{\"status\": 0, \"msg\": \"对不起，保存过程中发生错误！\"}");
            return;
        }
        #endregion

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}