const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  // antd 按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, // true 代表使用 Less, 默认值：css
  }),
  // 配置 less-loader
  addLessLoader({
    // 高版本 less-loader 需加上 lessOptions
    // lessOptions: {
    javascriptEnabled: true,
    modifyVars: {
      // '@primary-color': '#1DA57A', // 自定义 antd 主题
    },
    // },
  })
);
