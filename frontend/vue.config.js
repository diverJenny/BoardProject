const path = require("path");

module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      '/sign-api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/sign-api': '/api'  // '/sign-api' 경로를 '/api'로 재작성
        }
      }
    },
    port: 3000
  },

  outputDir: path.resolve(__dirname, "../src/main/resources/static"),

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },

  lintOnSave: false
};