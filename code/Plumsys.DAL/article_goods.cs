using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Data.SqlClient;
using Plumsys.DBUtility;
using Plumsys.Common;

namespace Plumsys.DAL
{
    /// <summary>
    /// 数据访问类:商品价格
    /// </summary>
    public partial class article_goods
    {
        private string databaseprefix; //数据库表名前缀
        public article_goods(string _databaseprefix)
        {
            databaseprefix = _databaseprefix;
        }

        #region 基本方法===================
        /// <summary>
        /// 是否存在该记录
        /// </summary>
        public bool Exists(int article_id, int goods_id)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select count(1) from " + databaseprefix + "article_goods");
            strSql.Append(" where article_id=@article_id and id=@goods_id");
            SqlParameter[] parameters = {
					new SqlParameter("@article_id", SqlDbType.Int,4),
                    new SqlParameter("@goods_id", SqlDbType.Int,4)};
            parameters[0].Value = article_id;
            parameters[1].Value = goods_id;

            return DbHelperSQL.Exists(strSql.ToString(), parameters);
        }

        /// <summary>
        /// 根据商品ID查询商品实体
        /// </summary>
        public Model.article_goods GetModel(int id)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select top 1 id,article_id,goods_no,spec_ids,spec_text,stock_quantity,market_price,sell_price,sell_date from " + databaseprefix + "article_goods");
            strSql.Append(" where id=@id");
            SqlParameter[] parameters = {
					new SqlParameter("@id", SqlDbType.Int,4)};
            parameters[0].Value = id;

            Model.article_goods model = new Model.article_goods();
            DataSet ds = DbHelperSQL.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return DataRowToModel(ds.Tables[0].Rows[0]);
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// 根据规格列表查询商品实体
        /// </summary>
        public Model.article_goods GetModel(int article_id, string spec_ids)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select top 1 id,article_id,goods_no,spec_ids,spec_text,stock_quantity,market_price,sell_price,sell_date from " + databaseprefix + "article_goods");
            strSql.Append(" where article_id=@article_id and spec_ids=@spec_ids");
            SqlParameter[] parameters = {
                    new SqlParameter("@article_id", SqlDbType.Int,4),
					new SqlParameter("@spec_ids", SqlDbType.NVarChar,500)};
            parameters[0].Value = article_id;
            parameters[1].Value = spec_ids;

            Model.article_goods model = new Model.article_goods();
            DataSet ds = DbHelperSQL.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return DataRowToModel(ds.Tables[0].Rows[0]);
            }
            else
            {
                return null;
            }
        }
        /// <summary>
        /// 根据规格列表查询商品实体
        /// </summary>
        public Model.article_goods GetModel(int article_id, string spec_ids,DateTime date)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select top 1 id,article_id,goods_no,spec_ids,spec_text,stock_quantity,market_price,sell_price,sell_date from " + databaseprefix + "article_goods");
            strSql.Append(" where article_id=@article_id and spec_ids=@spec_ids and sell_date=@sell_date");
            SqlParameter[] parameters = {
                    new SqlParameter("@article_id", SqlDbType.Int,4),
					new SqlParameter("@spec_ids", SqlDbType.NVarChar,500),
                    new SqlParameter("@sell_date", SqlDbType.DateTime)};
            parameters[0].Value = article_id;
            parameters[1].Value = spec_ids;
            parameters[2].Value = date;

            Model.article_goods model = new Model.article_goods();
            DataSet ds = DbHelperSQL.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return DataRowToModel(ds.Tables[0].Rows[0]);
            }
            else
            {
                return null;
            }
        }
        /// <summary>
        /// 得到一个商品价格列表
        /// </summary>
        public List<Model.article_goods> GetList(int article_id, DateTime? start_time = null, DateTime? end_time = null)
        {
            List<Model.article_goods> modelList = new List<Model.article_goods>();
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select id,article_id,goods_no,spec_ids,spec_text,stock_quantity,market_price,sell_price,sell_date");
            strSql.Append(" FROM " + databaseprefix + "article_goods");
            strSql.Append(" where article_id=" + article_id);
            if (start_time != null) strSql.Append(" and sell_date>='" + Convert.ToDateTime(start_time).ToString("yyyy-MM-dd")+"'");
            if (end_time != null) strSql.Append(" and sell_date<='"+ Convert.ToDateTime(end_time).ToString("yyyy-MM-dd")+"'");
            DataTable dt = DbHelperSQL.Query(strSql.ToString()).Tables[0];

            if (dt.Rows.Count > 0)
            {
                Model.article_goods model;
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    model = new Model.article_goods();
                    #region 主表数据========================
                    if (dt.Rows[i]["id"] != null && dt.Rows[i]["id"].ToString() != "")
                    {
                        model.id = int.Parse(dt.Rows[i]["id"].ToString());
                    }
                    if (dt.Rows[i]["article_id"] != null && dt.Rows[i]["article_id"].ToString() != "")
                    {
                        model.article_id = int.Parse(dt.Rows[i]["article_id"].ToString());
                    }
                    if (dt.Rows[i]["goods_no"] != null)
                    {
                        model.goods_no = dt.Rows[i]["goods_no"].ToString();
                    }
                    if (dt.Rows[i]["spec_ids"] != null)
                    {
                        model.spec_ids = dt.Rows[i]["spec_ids"].ToString();
                    }
                    if (dt.Rows[i]["spec_text"] != null)
                    {
                        model.spec_text = dt.Rows[i]["spec_text"].ToString();
                    }
                    if (dt.Rows[i]["stock_quantity"] != null && dt.Rows[i]["stock_quantity"].ToString() != "")
                    {
                        model.stock_quantity = int.Parse(dt.Rows[i]["stock_quantity"].ToString());
                    }
                    if (dt.Rows[i]["market_price"] != null && dt.Rows[i]["market_price"].ToString() != "")
                    {
                        model.market_price = decimal.Parse(dt.Rows[i]["market_price"].ToString());
                    }
                    if (dt.Rows[i]["sell_price"] != null && dt.Rows[i]["sell_price"].ToString() != "")
                    {
                        model.sell_price = decimal.Parse(dt.Rows[i]["sell_price"].ToString());
                    }
                    if (dt.Rows[i]["sell_date"] != null && dt.Rows[i]["sell_date"].ToString() != "")
                    {
                        model.sell_date = DateTime.Parse(dt.Rows[i]["sell_date"].ToString());
                    }
                    #endregion

                    #region 用户组价格数据==================
                    StringBuilder strSql2 = new StringBuilder();
                    strSql2.Append("select id,article_id,goods_id,group_id,price");
                    strSql2.Append(" FROM " + databaseprefix + "user_group_price");
                    strSql2.Append(" where goods_id=" + model.id);
                    DataTable dt2 = DbHelperSQL.Query(strSql2.ToString()).Tables[0];
                    if (dt2.Rows.Count > 0)
                    {
                        List<Model.user_group_price> ls = new List<Model.user_group_price>();
                        for (int j = 0; j < dt2.Rows.Count; j++)
                        {
                            Model.user_group_price gpModel = new Model.user_group_price();
                            if (dt2.Rows[j]["id"] != null && dt2.Rows[j]["id"].ToString() != "")
                            {
                                gpModel.id = int.Parse(dt2.Rows[j]["id"].ToString());
                            }
                            if (dt2.Rows[j]["article_id"] != null && dt2.Rows[j]["article_id"].ToString() != "")
                            {
                                gpModel.article_id = int.Parse(dt2.Rows[j]["article_id"].ToString());
                            }
                            if (dt2.Rows[j]["goods_id"] != null && dt2.Rows[j]["goods_id"].ToString() != "")
                            {
                                gpModel.goods_id = int.Parse(dt2.Rows[j]["goods_id"].ToString());
                            }
                            if (dt2.Rows[j]["group_id"] != null && dt2.Rows[j]["group_id"].ToString() != "")
                            {
                                gpModel.group_id = int.Parse(dt2.Rows[j]["group_id"].ToString());
                            }
                            if (dt2.Rows[j]["price"] != null && dt2.Rows[j]["price"].ToString() != "")
                            {
                                gpModel.price = decimal.Parse(dt2.Rows[j]["price"].ToString());
                            }
                            ls.Add(gpModel);
                        }
                        model.group_prices = ls;
                    }
                    #endregion

                    modelList.Add(model);
                }
            }
            return modelList;
        }
        #endregion

        #region 扩展方法===================
        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public Model.article_goods DataRowToModel(DataRow row)
        {
            Model.article_goods model = new Model.article_goods();
            if (row != null)
            {
                if (row["id"] != null && row["id"].ToString() != "")
                {
                    model.id = int.Parse(row["id"].ToString());
                }
                if (row["article_id"] != null && row["article_id"].ToString() != "")
                {
                    model.article_id = int.Parse(row["article_id"].ToString());
                }
                if (row["goods_no"] != null)
                {
                    model.goods_no = row["goods_no"].ToString();
                }
                if (row["spec_ids"] != null)
                {
                    model.spec_ids = row["spec_ids"].ToString();
                }
                if (row["spec_text"] != null)
                {
                    model.spec_text = row["spec_text"].ToString();
                }
                if (row["stock_quantity"] != null && row["stock_quantity"].ToString() != "")
                {
                    model.stock_quantity = int.Parse(row["stock_quantity"].ToString());
                }
                if (row["market_price"] != null && row["market_price"].ToString() != "")
                {
                    model.market_price = decimal.Parse(row["market_price"].ToString());
                }
                if (row["sell_price"] != null && row["sell_price"].ToString() != "")
                {
                    model.sell_price = decimal.Parse(row["sell_price"].ToString());
                }
                if (row["sell_date"] != null && row["sell_date"].ToString() != "")
                {
                    model.sell_date = DateTime.Parse(row["sell_date"].ToString());
                }
            }
            return model;
        }
        /// <summary>
        /// 根据goods模型新建数据
        /// </summary>
        /// <param name="model"></param>
        /// <param name="article_id"></param>
        /// <returns></returns>
        public bool Update(Model.article_goods model, int article_id)
        {
            using (SqlConnection conn = new SqlConnection(DbHelperSQL.connectionString))
            {
                conn.Open();
                using (SqlTransaction trans = conn.BeginTransaction())
                {
                    try
                    {
                        Delete(conn,trans,model,article_id);
                        Add(conn, trans, model, article_id);
                        trans.Commit();
                    }
                    catch
                    {
                        trans.Rollback();
                        return false;
                    }
                }
            }
            return true;
        }

        /// <summary>
        /// 批量更新
        /// </summary>
        /// <param name="models">goods模型列表</param>
        /// <param name="article_id">文章id</param>
        /// <param name="date">yyyy-MM-dd日期格式</param>
        /// <returns></returns>
        public bool Update(List<Model.article_goods> models, int article_id,string date)
        {
            using (SqlConnection conn = new SqlConnection(DbHelperSQL.connectionString))
            {
                conn.Open();
                using (SqlTransaction trans = conn.BeginTransaction())
                {
                    try
                    {
                        Delete(conn, trans, date, article_id);
                        foreach (Model.article_goods model in models)
                        {
                            Add(conn, trans, model, article_id);
                        }
                        trans.Commit();
                    }
                    catch
                    {
                        trans.Rollback();
                        return false;
                    }
                }
            }
            return true;
        }
        /// <summary>
        /// 添加一条记录
        /// </summary>
        public bool Add(Model.article_goods model, int article_id)
        {
            using (SqlConnection conn = new SqlConnection(DbHelperSQL.connectionString))
            {
                conn.Open();
                using (SqlTransaction trans = conn.BeginTransaction())
                {
                    try
                    {
                        StringBuilder strSql = new StringBuilder();
                        strSql.Append("insert into " + databaseprefix + "article_goods(");
                        strSql.Append("article_id,goods_no,spec_ids,spec_text,stock_quantity,market_price,sell_price,sell_date)");
                        strSql.Append(" values (");
                        strSql.Append("@article_id,@goods_no,@spec_ids,@spec_text,@stock_quantity,@market_price,@sell_price,@sell_date)");
                        strSql.Append(";select @@IDENTITY");
                        SqlParameter[] parameters = {
					    new SqlParameter("@article_id", SqlDbType.Int,4),
					    new SqlParameter("@goods_no", SqlDbType.NVarChar,50),
					    new SqlParameter("@spec_ids", SqlDbType.NVarChar,500),
					    new SqlParameter("@spec_text", SqlDbType.NText),
					    new SqlParameter("@stock_quantity", SqlDbType.Int,4),
					    new SqlParameter("@market_price", SqlDbType.Decimal,5),
					    new SqlParameter("@sell_price", SqlDbType.Decimal,5),
                        new SqlParameter("@sell_date", SqlDbType.DateTime)};
                        parameters[0].Value = article_id;
                        parameters[1].Value = model.goods_no;
                        parameters[2].Value = model.spec_ids;
                        parameters[3].Value = model.spec_text;
                        parameters[4].Value = model.stock_quantity;
                        parameters[5].Value = model.market_price;
                        parameters[6].Value = model.sell_price;
                        parameters[7].Value = model.sell_date;
                        object goodsId = DbHelperSQL.GetSingle(conn, trans, strSql.ToString(), parameters); //带事务
                        model.id = Convert.ToInt32(goodsId);
                        //自定义会员组价格
                        if (model.group_prices != null)
                        {
                            StringBuilder strSql1;
                            foreach (Model.user_group_price gp in model.group_prices)
                            {
                                strSql1 = new StringBuilder();
                                strSql1.Append("insert into " + databaseprefix + "user_group_price(");
                                strSql1.Append("article_id,goods_id,group_id,price)");
                                strSql1.Append(" values (");
                                strSql1.Append("@article_id,@goods_id,@group_id,@price)");
                                SqlParameter[] parameters1 = {
					        new SqlParameter("@article_id", SqlDbType.Int,4),
					        new SqlParameter("@goods_id", SqlDbType.Int,4),
					        new SqlParameter("@group_id", SqlDbType.Int,4),
					        new SqlParameter("@price", SqlDbType.Decimal,5)};
                                parameters1[0].Value = article_id; //内容ID
                                parameters1[1].Value = model.id; //商品ID
                                parameters1[2].Value = gp.group_id;
                                parameters1[3].Value = gp.price;
                                DbHelperSQL.GetSingle(conn, trans, strSql1.ToString(), parameters1); //带事务
                            }
                        }
                        trans.Commit();
                    }
                    catch
                    {
                        trans.Rollback();
                        return false;
                    }
                }
            }
            return true;
        }
        /// <summary>
        /// 添加一条记录，带事务
        /// </summary>
        public void Add(SqlConnection conn, SqlTransaction trans, Model.article_goods model, int article_id)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("insert into " + databaseprefix + "article_goods(");
            strSql.Append("article_id,goods_no,spec_ids,spec_text,stock_quantity,market_price,sell_price,sell_date)");
            strSql.Append(" values (");
            strSql.Append("@article_id,@goods_no,@spec_ids,@spec_text,@stock_quantity,@market_price,@sell_price,@sell_date)");
            strSql.Append(";select @@IDENTITY");
            SqlParameter[] parameters = {
					new SqlParameter("@article_id", SqlDbType.Int,4),
					new SqlParameter("@goods_no", SqlDbType.NVarChar,50),
					new SqlParameter("@spec_ids", SqlDbType.NVarChar,500),
					new SqlParameter("@spec_text", SqlDbType.NText),
					new SqlParameter("@stock_quantity", SqlDbType.Int,4),
					new SqlParameter("@market_price", SqlDbType.Decimal,5),
					new SqlParameter("@sell_price", SqlDbType.Decimal,5),
                    new SqlParameter("@sell_date", SqlDbType.DateTime)};
            parameters[0].Value = article_id;
            parameters[1].Value = model.goods_no;
            parameters[2].Value = model.spec_ids;
            parameters[3].Value = model.spec_text;
            parameters[4].Value = model.stock_quantity;
            parameters[5].Value = model.market_price;
            parameters[6].Value = model.sell_price;
            parameters[7].Value = model.sell_date;
            object goodsId = DbHelperSQL.GetSingle(conn, trans, strSql.ToString(), parameters); //带事务
            model.id = Convert.ToInt32(goodsId);
            //自定义会员组价格
            if (model.group_prices != null)
            {
                StringBuilder strSql1;
                foreach (Model.user_group_price gp in model.group_prices)
                {
                    strSql1 = new StringBuilder();
                    strSql1.Append("insert into " + databaseprefix + "user_group_price(");
                    strSql1.Append("article_id,goods_id,group_id,price)");
                    strSql1.Append(" values (");
                    strSql1.Append("@article_id,@goods_id,@group_id,@price)");
                    SqlParameter[] parameters1 = {
					        new SqlParameter("@article_id", SqlDbType.Int,4),
					        new SqlParameter("@goods_id", SqlDbType.Int,4),
					        new SqlParameter("@group_id", SqlDbType.Int,4),
					        new SqlParameter("@price", SqlDbType.Decimal,5)};
                    parameters1[0].Value = article_id; //内容ID
                    parameters1[1].Value = model.id; //商品ID
                    parameters1[2].Value = gp.group_id;
                    parameters1[3].Value = gp.price;
                    DbHelperSQL.GetSingle(conn, trans, strSql1.ToString(), parameters1); //带事务
                }
            }
        }


        /// <summary>
        /// 根据日期删除价格
        /// </summary>
        public void Delete(SqlConnection conn, SqlTransaction trans, string date,int article_id)
        {
            //删除用户组价格
            StringBuilder strSql = new StringBuilder();
            strSql.Append("delete from " + databaseprefix + "user_group_price ");
            strSql.Append(" where article_id=@article_id");
            strSql.Append(" and  exists(select 1 from " + databaseprefix + "article_goods  a where " + databaseprefix + "user_group_price.goods_id=a.id and convert(varchar(10), sell_date, 23)=@date)");
            SqlParameter[] parameters = { new SqlParameter("@article_id", SqlDbType.Int, 4), new SqlParameter("@date", SqlDbType.NVarChar, 10) };
            parameters[0].Value = article_id;
            parameters[1].Value = date;
            DbHelperSQL.ExecuteSql(conn, trans, strSql.ToString(), parameters);

            //删除主表
            StringBuilder strSql2 = new StringBuilder();
            strSql2.Append("delete from " + databaseprefix + "article_goods");
            strSql2.Append(" where article_id=@article_id and convert(varchar(10), sell_date, 23)=@date");
            SqlParameter[] parameters2 = { new SqlParameter("@article_id", SqlDbType.Int, 4), new SqlParameter("@date", SqlDbType.NVarChar, 10) };
            parameters2[0].Value = article_id;
            parameters2[1].Value = date;
            DbHelperSQL.ExecuteSql(conn, trans, strSql2.ToString(), parameters2);
        }
        /// <summary>
        /// 删除一条数据 根据数据模型
        /// </summary>
        public void Delete(SqlConnection conn, SqlTransaction trans,  Model.article_goods model,int article_id)
        {
            //删除用户组价格
            StringBuilder strSql = new StringBuilder();
            strSql.Append("delete from " + databaseprefix + "user_group_price ");
            strSql.Append(" where article_id=@article_id");
            strSql.Append(" and  exists(select 1 from " + databaseprefix + "article_goods  a where " + databaseprefix + "user_group_price.goods_id=a.id and id=@id)");
            SqlParameter[] parameters = { new SqlParameter("@article_id", SqlDbType.Int, 4), new SqlParameter("@id", SqlDbType.Int, 4) };
            parameters[0].Value = article_id;
            parameters[1].Value = model.id;
            DbHelperSQL.ExecuteSql(conn, trans, strSql.ToString(), parameters);

            //删除主表
            StringBuilder strSql2 = new StringBuilder();
            strSql2.Append("delete from " + databaseprefix + "article_goods");
            strSql2.Append(" where article_id=@article_id and id=@id");
            SqlParameter[] parameters2 = { new SqlParameter("@article_id", SqlDbType.Int, 4), new SqlParameter("@id", SqlDbType.Int, 4) };
            parameters2[0].Value = article_id;
            parameters2[1].Value = model.id;
            DbHelperSQL.ExecuteSql(conn, trans, strSql2.ToString(), parameters2);
        }
        /// <summary>
        /// 删除一条数据，带事务
        /// </summary>
        public void Delete(SqlConnection conn, SqlTransaction trans, int article_id, string spec_ids = "")
        {
            //删除用户组价格
            StringBuilder strSql = new StringBuilder();
            strSql.Append("delete from " + databaseprefix + "user_group_price ");
            strSql.Append(" where article_id=@article_id");
            if (!string.IsNullOrEmpty(spec_ids)) strSql.Append(" and not exists(select 1 from " + databaseprefix + "article_goods  a where " + databaseprefix + "user_group_price.goods_id=a.id and spec_ids in(" + spec_ids + "))");
            SqlParameter[] parameters = { new SqlParameter("@article_id", SqlDbType.Int, 4) };
            parameters[0].Value = article_id;
            DbHelperSQL.ExecuteSql(conn, trans, strSql.ToString(), parameters);

            //删除主表
            StringBuilder strSql2 = new StringBuilder();
            strSql2.Append("delete from " + databaseprefix + "article_goods");
            strSql2.Append(" where article_id=@article_id");
            if (!string.IsNullOrEmpty(spec_ids)) strSql2.Append(" and spec_ids not in(" + spec_ids + ")");
            SqlParameter[] parameters2 = { new SqlParameter("@article_id", SqlDbType.Int, 4) };
            parameters2[0].Value = article_id;
            DbHelperSQL.ExecuteSql(conn, trans, strSql2.ToString(), parameters2);
        }




        /// <summary>
        /// 得到一个商品规格列表
        /// </summary>
        public List<Model.article_goods_spec> GetSpecList(int article_id, int parent_id)
        {
            List<Model.article_goods_spec> modelList = new List<Model.article_goods_spec>();

            StringBuilder strSql = new StringBuilder();
            strSql.Append("select article_id,spec_id,parent_id,title,img_url");
            strSql.Append(" FROM " + databaseprefix + "article_goods_spec");
            strSql.Append(" where article_id=" + article_id + " and parent_id=" + parent_id);
            DataTable dt = DbHelperSQL.Query(strSql.ToString()).Tables[0];

            int rowsCount = dt.Rows.Count;
            if (rowsCount > 0)
            {
                Model.article_goods_spec model;
                for (int n = 0; n < rowsCount; n++)
                {
                    model = new Model.article_goods_spec();
                    if (dt.Rows[n]["article_id"] != null && dt.Rows[n]["article_id"].ToString() != "")
                    {
                        model.article_id = int.Parse(dt.Rows[n]["article_id"].ToString());
                    }
                    if (dt.Rows[n]["spec_id"] != null && dt.Rows[n]["spec_id"].ToString() != "")
                    {
                        model.spec_id = int.Parse(dt.Rows[n]["spec_id"].ToString());
                    }
                    if (dt.Rows[n]["parent_id"] != null && dt.Rows[n]["parent_id"].ToString() != "")
                    {
                        model.parent_id = int.Parse(dt.Rows[n]["parent_id"].ToString());
                    }
                    if (dt.Rows[n]["title"] != null)
                    {
                        model.title = dt.Rows[n]["title"].ToString();
                    }
                    if (dt.Rows[n]["img_url"] != null)
                    {
                        model.img_url = dt.Rows[n]["img_url"].ToString();
                    }
                    modelList.Add(model);
                }
            }
            return modelList;
        }
        #endregion
    }
}

