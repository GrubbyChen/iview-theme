module.exports = {
  // https://github.com/ant-design/ant-motion/issues/44
  // iview 在less中使用js代码，运行会报错，需要加入以下配置
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
}