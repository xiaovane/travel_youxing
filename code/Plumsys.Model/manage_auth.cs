using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Plumsys.Common;
namespace Plumsys.Model
{
    /// <summary>
    /// 管理权限
    /// </summary>
   public class manage_auth
    {
       public manage_auth(PLEnums.ActionEnum action, bool auth)
       {
           _action = action;
           _auth = auth;
       }
       #region Model
       private PLEnums.ActionEnum _action;
       private bool _auth;
       
       /// <summary>
       /// 操作类型
       /// </summary>
       public PLEnums.ActionEnum action
       {
           set { _action = value; }
           get { return _action; }
       }
       /// <summary>
       /// 是否有权限
       /// </summary>
       public bool auth
       {
           set { _auth = value; }
           get { return _auth; }
       }
       #endregion
    }
}
