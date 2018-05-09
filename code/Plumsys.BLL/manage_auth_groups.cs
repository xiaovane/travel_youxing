using Plumsys.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Plumsys.BLL
{
    /// <summary>
    /// 栏目权限类
    /// </summary>
    public class manage_auth_groups
    {
        private  List<Model.manage_auth> manage_auths=new List<Model.manage_auth>();
        private manager_role m_role;
        public manage_auth_groups(int role_id,string nav_name)
        {
            m_role = new manager_role();
            List<Model.manage_auth> auths = new List<Model.manage_auth>();
            foreach (PLEnums.ActionEnum item in Enum.GetValues(typeof(PLEnums.ActionEnum)))
            {
                auths.Add(new Model.manage_auth(item, m_role.Exists(role_id, nav_name, item.ToString())));
            }
            manage_auths=auths;
        }
        /// <summary>
        /// 根据action 获取是否有权限
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public bool this[PLEnums.ActionEnum action]
        {
            get {
                if (manage_auths.Exists(p => p.action == action))
                    return manage_auths.Single(p => p.action == action).auth;
                else return false;
            }
        }
    }
}
