using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Web;
using Plumsys.Common;

namespace Plumsys.Web.UI.Page
{
    public partial class useraddress : Web.UI.UserPage
    {
        protected int page;         //当前页码
        protected int totalcount;   //OUT数据总数

        /// <summary>
        /// 重写虚方法,此方法在Init事件执行
        /// </summary>
        protected override void InitPage()
        {
            page = PLRequest.GetQueryInt("page", 1);
        }
    }
}
