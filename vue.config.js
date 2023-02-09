module.exports = () => {
  return {
    devServer: {
      proxy: {
        '/api': {
          target: process.env.BABEL_ENV === 'development' ? 'https://www.baidu.com' : 'https://www.baidu.com',
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

