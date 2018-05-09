using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Web;
using System.Web.Caching;
using Plumsys.Common;

namespace Plumsys.BLL
{
    public partial class userconfig
    {
        private readonly DAL.userconfig dal = new DAL.userconfig();

        /// <summary>
        ///  读取用户配置文件
        /// </summary>
        public Model.userconfig loadConfig()
        {
            Model.userconfig model = CacheHelper.Get<Model.userconfig>(PLKeys.CACHE_USER_CONFIG);
            if (model == null)
            {
                CacheHelper.Insert(PLKeys.CACHE_USER_CONFIG, dal.loadConfig(Utils.GetXmlMapPath(PLKeys.FILE_USER_XML_CONFING)),
                    Utils.GetXmlMapPath(PLKeys.FILE_USER_XML_CONFING));
                model = CacheHelper.Get<Model.userconfig>(PLKeys.CACHE_USER_CONFIG);
            }
            return model;
        }

        /// <summary>
        ///  保存用户配置文件
        /// </summary>
        public Model.userconfig saveConifg(Model.userconfig model)
        {
            return dal.saveConifg(model, Utils.GetXmlMapPath(PLKeys.FILE_USER_XML_CONFING));
        }

    }
}
