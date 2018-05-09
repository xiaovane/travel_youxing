using System;
using System.Data;
using System.Collections.Generic;
using Plumsys.Common;

namespace Plumsys.BLL
{
	/// <summary>
	/// 扩展属性表
	/// </summary>
	public partial class area_category
	{
        private readonly Model.siteconfig siteConfig = new BLL.siteconfig().loadConfig(); //获得站点配置信息
        private readonly DAL.area_category dal;
		public area_category()
		{
            dal = new DAL.area_category(siteConfig.sysdatabaseprefix);
        }

        #region 基本方法================================
        /// <summary>
        /// 是否存在该记录
        /// </summary>
        public bool Exists(int id)
        {
            return dal.Exists(id);
        }

        /// <summary>
        /// 返回类别名称
        /// </summary>
        public string GetTitle(int id)
        {
            return dal.GetTitle(id);
        }
        /// <summary>
        /// 增加一条数据
        /// </summary>
        public int Add(Model.area_category model)
        {
            return dal.Add(model);
        }

        /// <summary>
        /// 修改一列数据
        /// </summary>
        public void UpdateField(int id, string strValue)
        {
            dal.UpdateField(id, strValue);
        }

        /// <summary>
        /// 更新一条数据
        /// </summary>
        public bool Update(Model.area_category model)
        {
            return dal.Update(model);
        }

        /// <summary>
        /// 删除一条数据
        /// </summary>
        public void Delete(int id)
        {
            dal.Delete(id);
        }

        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public Model.area_category GetModel(int id)
        {
            return dal.GetModel(id);
        }

        /// <summary>
        /// 取得该频道指定类别下的列表
        /// </summary>
        /// <param name="parent_id">父ID</param>
        /// <returns></returns>
        public DataTable GetChildList(int parent_id)
        {
            return dal.GetChildList(parent_id);
        }

        /// <summary>
        /// 取得该频道指定类别上的列表
        /// </summary>
        /// <param name="id">ID</param>
        /// <returns></returns>
        public DataTable GetParent(int id)
        {
            return dal.GetParent(id);
        }
        /// <summary>
        /// 取得该频道指定类别上的所有列表
        /// </summary>
        /// <param name="id">ID</param>
        /// <returns></returns>
        public DataTable GetParentList(int id)
        {
            return dal.GetParentList(id);
        }
        /// <summary>
        /// 取得该频道下所有类别列表
        /// </summary>
        /// <param name="parent_id">父ID</param>
        /// <returns>DataTable</returns>
        public DataTable GetList(int parent_id)
        {
            return dal.GetList(parent_id);
        }

        #endregion

        #region 扩展方法================================
        /// <summary>
        /// 取得父节点的ID
        /// </summary>
        public int GetParentId(int id)
        {
            return dal.GetParentId(id);
        }
        #endregion
	}
}

