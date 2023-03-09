module.exports = () => {
  return {
    devServer: {
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://192.168.50.192:3000/',
          ws: true,
          changeOrigin: true,
          pathRewrite: { //  /api开头的请求会去到target下请求
            '^/api': '' //   替换/api 为空字符
          }
        }
      }
    }
  }
}

