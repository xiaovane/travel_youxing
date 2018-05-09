using System;
using System.Collections.Generic;
using System.Text;
using System.Data;

namespace Plumsys.Web.UI
{
    public partial class BasePage : System.Web.UI.Page
    {
        /// <summary>
        /// 返回当前地区名称
        /// </summary>
        /// <param name="area_id">地区ID</param>
        /// <returns>String</returns>
        protected string get_area_title(int area_id, string default_value)
        {
            BLL.area_category bll = new BLL.area_category();
            if (bll.Exists(area_id))
            {
                return bll.GetTitle(area_id);
            }
            return default_value;
        }

        /// <summary>
        /// 返回父id
        /// </summary>
        /// <param name="category_id"></param>
        /// <returns></returns>
        protected int get_area_parent_id(int category_id)
        {
            BLL.area_category bll = new BLL.area_category();
            return bll.GetParentId(category_id);
        }
        /// <summary>
        /// 返回父id
        /// </summary>
        /// <param name="category_id"></param>
        /// <returns></returns>
        protected int get_area_parent_id(string category_id)
        {
            BLL.area_category bll = new BLL.area_category();
            return bll.GetParentId(Convert.ToInt32(category_id));
        }
        /// <summary>
        /// 返回类别一个实体类
        /// </summary>
        /// <param name="area_id">类别ID</param>
        /// <returns>Model.category</returns>
        protected Model.area_category get_area_model(int area_id)
        {
            return new BLL.area_category().GetModel(area_id);
        }

        /// <summary>
        /// 返回类别导航面包屑
        /// </summary>
        /// <param name="urlKey">URL重写Name</param>
        /// <param name="area_id">类别ID</param>
        /// <returns>String</returns>
        protected string get_area_menu(string urlKey, int area_id)
        {
            StringBuilder strTxt = new StringBuilder();
            if (area_id > 0)
            {
                LoopAreaMenu(strTxt, urlKey, area_id);
            }
            return strTxt.ToString();
        }

        /// <summary>
        /// 返回类别列表
        /// </summary>
        /// <param name="parent_id">父类别ID</param>
        /// <returns>DataTable</returns>
        protected DataTable get_area_list(int parent_id)
        {
            return new BLL.area_category().GetList(parent_id);
        }

        /// <summary>
        /// 返回所有父类别列表
        /// </summary>
        /// <param name="id">父类别ID</param>
        /// <returns>DataTable</returns>
        protected DataTable get_area_parent_list(int id)
        {
            return new BLL.area_category().GetParentList(id);
        }
        /// <summary>
        /// 返回指定类别下列表(一层)
        /// </summary>
        /// <param name="parent_id">父类别ID</param>
        /// <returns>DataTable</returns>
        protected DataTable get_area_child_list(int parent_id)
        {
            return new BLL.area_category().GetChildList(parent_id);
        }

        /// <summary>
        /// 返回指定类别上的列表(一层)
        /// </summary>
        /// <param name="id">ID</param>
        /// <returns>DataTable</returns>
        protected DataTable get_area_parent(int id)
        {
            return new BLL.area_category().GetParent(id);
        }
        #region 私有方法===========================================
        /// <summary>
        /// 递归找到父节点
        /// </summary>
        private void LoopAreaMenu(StringBuilder strTxt, string urlKey, int area_id)
        {
            BLL.area_category bll = new BLL.area_category();
            int parentId = bll.GetParentId(area_id);
            if (parentId > 0)
            {
                this.LoopAreaMenu(strTxt, urlKey, parentId);
            }
            strTxt.Append("&nbsp;&gt;&nbsp;<a href=\"" + linkurl(urlKey, area_id, 1) + "\">" + bll.GetTitle(area_id) + "</a>");
        }
        #endregion
    }
}
