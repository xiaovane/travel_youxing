using System;
using System.Text;
using System.Data;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Plumsys.Common;

namespace Plumsys.Web.admin.dialog
{
    public partial class dialog_goods_price : Web.UI.ManagePage
    {
        private int article_id = 0;
        private string s_start_time = string.Empty;
        private string s_end_time = string.Empty;
        private DateTime? start_time;
        private DateTime? end_time;
        BLL.article bll = new BLL.article();
        Model.article article_model = new Model.article();

        protected void Page_Load(object sender, EventArgs e)
        {
            article_id = PLRequest.GetInt("article_id", 0);
            s_start_time = PLRequest.GetQueryString("date");
            s_end_time = PLRequest.GetQueryString("date");
            if (article_id <= 0)
            {
                JscriptMsg("传输参数不正确！", "back");
                return;
            }
            if (!string.IsNullOrEmpty(s_start_time))
            {
                DateTime time;
                if (!DateTime.TryParse(s_start_time, out time))
                    start_time = null;
                else start_time = time;
            }
            if (!string.IsNullOrEmpty(s_end_time))
            {
                DateTime time;
                if (!DateTime.TryParse(s_end_time, out time))
                    end_time = null;
                else end_time = time;
            }
            if (!bll.Exists(article_id))
            {
                JscriptMsg("商品不存在或已被删除！", "back");
                return;
            }
            if (!Page.IsPostBack)
            {
                ShowInfo(article_id);
            }
        }

        #region 赋值操作=================================
        private void ShowInfo(int article_id)
        {
            article_model = bll.GetModel(article_id, start_time, end_time);
            //绑定商品规格
            List<Model.article_goods_spec> goodsSpecList = new BLL.article_goods_spec().GetList(article_model.id, "");
            hide_goods_spec_list.Value = JsonHelper.ObjectToJSON(goodsSpecList);
            rptGroupPrice.DataSource = article_model.goods;
            rptGroupPrice.DataBind();
        }
        #endregion
        #region 修改操作==================================
        private bool DoEdit(int _id)
        {
            BLL.article_goods goods_bll = new BLL.article_goods();
            //保存商品信息
            string[] specGoodsIdArr = Request.Form.GetValues("hide_goods_id");
            string[] specGoodsNoArr = Request.Form.GetValues("spec_goods_no");
            string[] specMarketPriceArr = Request.Form.GetValues("spec_market_price");
            string[] specSellPriceArr = Request.Form.GetValues("spec_sell_price");
            string[] specSellDateArr = Request.Form.GetValues("hide_spec_sell_date");
            string[] specStockQuantityArr = Request.Form.GetValues("spec_stock_quantity");
            string[] specSpecIdsArr = Request.Form.GetValues("hide_spec_ids");
            string[] specTextArr = Request.Form.GetValues("hide_spec_text");
            string[] specGroupPriceArr = Request.Form.GetValues("hide_group_price");
            if (specGoodsIdArr != null && specGoodsNoArr != null && specMarketPriceArr != null && specSellPriceArr != null && specSellDateArr != null && specStockQuantityArr != null
                && specSpecIdsArr != null && specTextArr != null && specGroupPriceArr != null
                && specGoodsIdArr.Length > 0 && specGoodsNoArr.Length > 0 && specMarketPriceArr.Length > 0 && specSellPriceArr.Length > 0
                && specStockQuantityArr.Length > 0 && specSpecIdsArr.Length > 0 && specTextArr.Length > 0 && specGroupPriceArr.Length > 0)
            {
                List<Model.article_goods> goodsList = new List<Model.article_goods>();
                for (int i = 0; i < specGoodsNoArr.Length; i++)
                {
                    List<Model.user_group_price> groupList = new List<Model.user_group_price>();
                    if (!string.IsNullOrEmpty(specGroupPriceArr[i]))
                    {
                        groupList = (List<Model.user_group_price>)JsonHelper.JSONToObject<List<Model.user_group_price>>(specGroupPriceArr[i]);
                    }
                    goodsList.Add(new Model.article_goods
                    {
                        goods_no = specGoodsNoArr[i],
                        spec_ids = specSpecIdsArr[i],
                        spec_text = specTextArr[i],
                        stock_quantity = Utils.StrToInt(specStockQuantityArr[i], 0),
                        market_price = Utils.StrToDecimal(specMarketPriceArr[i], 0),
                        sell_price = Utils.StrToDecimal(specSellPriceArr[i], 0),
                        sell_date = Utils.StrToDateTime(specSellDateArr[i], DateTime.Now),
                        group_prices = groupList
                    });
                }
                if (goods_bll.Update(goodsList, _id, PLRequest.GetQueryDateTime("date").ToString("yyyy-MM-dd")))
                {

                    AddAdminLog(PLEnums.ActionEnum.Edit.ToString(), "修改价格规格频道内容:" + article_model.title); //记录日志
                    return true;
                }
            }
            return false;
        }
        #endregion
        //保存
        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (!DoEdit(this.article_id))
            {
                JscriptMsg("保存过程中发生错误啦！", string.Empty);
                return;
            }
        }
    }


}