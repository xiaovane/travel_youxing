using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Plumsys.Web.UI
{
    public partial class BasePage : System.Web.UI.Page
    {
        /// <summary>
        /// 计算本周起始日期（礼拜一的日期）
        /// </summary>
        /// <param name="someDate">该周中任意一天</param>
        /// <returns>返回礼拜一日期，后面的具体时、分、秒和传入值相等</returns>
        public static DateTime CalculateFirstDateOfWeek(DateTime someDate)
        {
            int i = someDate.DayOfWeek - DayOfWeek.Monday;
            if (i == -1) i = 6;// i值 > = 0 ，因为枚举原因，Sunday排在最前，此时Sunday-Monday=-1，必须+7=6。
            TimeSpan ts = new TimeSpan(i, 0, 0, 0);
            return someDate.Subtract(ts);
        }
        /**/
        /// <summary>
        /// 计算本周结束日期（礼拜日的日期）
        /// </summary>
        /// <param name="someDate">该周中任意一天</param>
        /// <returns>返回礼拜日日期，后面的具体时、分、秒和传入值相等</returns>
        public static DateTime CalculateLastDateOfWeek(DateTime someDate)
        {
            int i = someDate.DayOfWeek - DayOfWeek.Sunday;
            if (i != 0) i = 7 - i;// 因为枚举原因，Sunday排在最前，相减间隔要被7减。
            TimeSpan ts = new TimeSpan(i, 0, 0, 0);
            return someDate.Add(ts);
        }
        /**/
        /// <summary>
        /// 判断选择的日期是否是本周（根据系统当前时间决定的‘本周'比较而言）
        /// </summary>
        /// <param name="someDate"></param>
        /// <returns></returns>
        public static bool IsThisWeek(DateTime someDate)
        {
            //得到someDate对应的周一
            DateTime someMon = CalculateFirstDateOfWeek(someDate);
            //得到本周一
            DateTime nowMon = CalculateFirstDateOfWeek(DateTime.Now);
            TimeSpan ts = someMon - nowMon;
            if (ts.Days < 0)
                ts = -ts;//取正
            if (ts.Days >= 7)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
