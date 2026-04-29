# Tab Out 中文定制版说明

本仓库基于原项目 **Tab Out** 修改而来，保留原作者、原许可证和原项目链接。

## 原项目引用

- 原项目: [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out)
- 原作者: [Zara Zhang](https://x.com/zarazhangrui)
- 原许可证: MIT License
- 原项目说明: Tab Out 是一个 Chrome 新标签页扩展，用于按域名分组展示已打开标签页，并提供关闭、去重、稍后查看等功能。

## 本版本修改内容

- 将主要界面文案改为简体中文。
- 将字体改为系统标准中文字体栈，移除 Google Fonts 依赖。
- 将整体视觉改为接近 Chrome 原生新标签页的暗色风格。
- 增加“黑暗模式”和明亮模式一键切换，默认使用黑暗模式。
- 增加顶部快捷网址区域，支持添加、删除、自动获取网站图标。
- 默认写入 Bilibili、V2EX、YouTube、微博、闲鱼 5 个快捷网址。
- 快捷网址使用 `chrome.storage.local` 本地保存，不上传到外部服务。
- 右下角显示当前时间和无锡天气。
- 工具栏图标增加设置弹窗，可暂停 Tab Out 页面。
- 将 `127.0.0.1` 和 `localhost` 分组标题显示为“本地网页”。

## 第三方与外部服务引用

- 天气数据: [Open-Meteo Forecast API](https://open-meteo.com/)
- 网站图标: Chrome Manifest V3 `_favicon` 机制，需要 `favicon` 权限。
- 浏览器 API: Chrome Extensions API，包括 `tabs`、`storage`、`favicon`、`chrome_url_overrides`。

## 安装方式

1. 打开 Chrome，进入 `chrome://extensions`。
2. 打开右上角“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择本仓库中的 `extension/` 文件夹。
5. 打开新标签页即可使用。

## 关于暂停开关

Chrome 不提供扩展在启用状态下临时撤销 `chrome_url_overrides.newtab` 的 API。因此工具栏弹窗中的暂停开关不会真正恢复 Chrome 原生新标签页，而是显示一个临时暂停页面，并提供打开 `chrome://newtab` 的入口。

## 许可证

本版本继续遵循原项目 MIT License。原作者版权声明保留在 `LICENSE` 中。
