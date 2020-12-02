/* eslint valid-jsdoc: "off" */
'use strict';
// 配置路由映射
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606805433821_7065';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: false,
    ctoken: false,
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',//用户名
    password: 'root',//用户密码
    database: 'test',//数据库名
    define: {
      underscored: true,
      freezeTableName: true,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
