# Tab Out 中文定制版

一个面向中文用户定制的 Chrome 新标签页扩展：暗色背景、快捷网址、标签页分组、稍后查看、无锡天气和本地时间。

本项目基于 [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out) 修改，原作者为 [Zara Zhang](https://x.com/zarazhangrui)，许可证为 MIT License。原作者信息和修改说明见 [`MODIFICATIONS.zh-CN.md`](./MODIFICATIONS.zh-CN.md)。

## 安装

### 推荐方式：让 Agent 学习安装

把下面这段内容发给你的 coding agent、终端助手或支持联网操作的 AI 工具：

```text
请帮我安装这个 Chrome 新标签页扩展：
https://github.com/winglight9/tab-out

请先阅读仓库 README 和 MODIFICATIONS.zh-CN.md，然后完成：
1. 克隆仓库或下载 Release 包。
2. 找到 extension/ 文件夹。
3. 打开 chrome://extensions。
4. 引导我开启开发者模式并加载 extension/ 文件夹。
```

Agent 需要安装的扩展目录是：

```text
tab-out/extension/
```

### 方式二：下载打包版本

1. 打开发布页：<https://github.com/winglight9/tab-out/releases/tag/chinese-custom-v1>
2. 下载 `tab-out-chinese-custom.zip`。
3. 解压 zip 文件。
4. 打开 Chrome，进入 `chrome://extensions`。
5. 打开右上角“开发者模式”。
6. 点击“加载已解压的扩展程序”。
7. 选择解压后的 `extension/` 文件夹。
8. 打开新标签页即可使用。

### 方式三：从源码安装

```bash
git clone https://github.com/winglight9/tab-out.git
```

然后在 Chrome 中加载仓库里的 `extension/` 文件夹：

1. 打开 `chrome://extensions`。
2. 打开“开发者模式”。
3. 点击“加载已解压的扩展程序”。
4. 选择 `tab-out/extension/`。

## 功能

- 简体中文界面。
- 接近 Chrome 原生新标签页的暗色背景。
- 顶部快捷网址，支持添加、删除和自动获取网站图标。
- 默认快捷网址：Bilibili、V2EX、YouTube、微博、闲鱼。
- 按网站域名分组展示当前打开的标签页。
- `127.0.0.1` 和 `localhost` 会显示为“本地网页”。
- 支持关闭单个标签页、关闭整组标签页、关闭重复标签页。
- 支持把标签保存到“稍后查看”。
- 右下角显示当前时间和无锡天气。
- 点击工具栏 Tab Out 图标可打开设置弹窗，临时暂停 Tab Out 页面。

## 使用说明

打开新标签页后：

1. 顶部区域显示快捷网址。
2. 点击浅色加号可以添加新网址。
3. 鼠标移到快捷网址上可以删除。
4. 中间区域按网站分组显示当前打开的标签页。
5. 点击标签标题可以跳转到对应标签页。
6. 点击标签右侧按钮可以关闭或保存到稍后查看。
7. 右侧“稍后查看”区域会显示已保存的标签。

## 关于暂停开关

Chrome 不提供扩展在启用状态下临时撤销 `chrome_url_overrides.newtab` 的 API。

因此工具栏弹窗中的暂停开关不会真正恢复 Chrome 原生新标签页，而是显示一个临时暂停页面，并提供打开 `chrome://newtab` 的入口。

## 数据与隐私

- 快捷网址保存在 `chrome.storage.local`。
- 稍后查看列表保存在 `chrome.storage.local`。
- 标签页信息只在本地读取和渲染。
- 天气数据来自 [Open-Meteo Forecast API](https://open-meteo.com/)。
- 网站图标使用 Chrome Manifest V3 `_favicon` 机制。

## 技术栈

| 内容 | 实现 |
|------|------|
| 扩展 | Chrome Manifest V3 |
| 新标签页接管 | `chrome_url_overrides.newtab` |
| 标签页读取 | `chrome.tabs` |
| 本地存储 | `chrome.storage.local` |
| 网站图标 | Chrome `_favicon` API |
| 天气 | Open-Meteo Forecast API |
| 动画 | CSS transitions + JS confetti particles |

## 来源与许可证

本项目是 [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out) 的中文定制版本。

原项目作者：[Zara Zhang](https://x.com/zarazhangrui)

许可证：MIT License

原作者版权声明保留在 [`LICENSE`](./LICENSE) 中。
