using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Plumsys.Model
{
    /// <summary>
    /// 前台返回公共类
    /// </summary>
   public class web_response
    {
       /// <summary>
       /// 前台ajax 返回响应码0 失败 1 成功
       /// </summary>
       public int status { get; set; }
       /// <summary>
       /// 错误码
       /// </summary>
       public string code { get; set; }
       /// <summary>
       /// 错误消息
       /// </summary>
       public string msg { get; set; }
       /// <summary>
       /// 数据总计 可能是分页用
       /// </summary>
       public string totle { get; set; }
       /// <summary>
       /// 集合数据总数
       /// </summary>
       public string sumtotle { get; set; }
       /// <summary>
       /// 任意数据返回值
       /// </summary>
       public object data { get; set; }
    }
}
