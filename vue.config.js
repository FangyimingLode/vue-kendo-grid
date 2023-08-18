const debug = process.env.NODE_ENV !== 'production'
module.exports = {
  pages: {
    index: {
      // 页面入口
      entry: "src/main.js",
      // 模板来源
      template: "pubilc/index.html"
      ,
      // 输出文件名
      filename: "index.html"
    }
  },
  publicPath: "/",
  outputDir: 'dist',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#3d6fec",
          // "primary-color": "#9867f7",
          "layout-color": "#9867f7"
          // "layout-color": "#ee88aa"
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
     // 开发环境配置
    if (debug) {
      config.devtool = 'source-map'
    }
  },
  lintOnSave:false,
  devServer: {
    proxy: {
      '/caipiaoApi' : {
        // target:'http://114.115.130.228:800/caipiao',
        target:'http://localhost:801/caipiao',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/caipiaoApi': ''
        }
      }
    }
  }
};
