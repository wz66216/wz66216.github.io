# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🎵 音乐播放器 (Custom Music Player)
本项目内置了一个纯原生 Vanilla JS 编写的极简黑胶音乐播放器，完美融入博客的 Swiss Grid × Chess 主题。
- 支持自由拖拽，且避免了 flexbox 布局塌陷。
- 支持酷狗音乐每日歌单（通过 Meting API）。
- Light/Dark/Cyberpunk 多主题平滑无缝切换。
- UI 交互：悬停/点击圆形黑胶图标即可展开黑白风格（无圆角矩形）的极简控制面板。

**如何使用/修改歌单：**
在 `src/layouts/BaseLayout.astro` 的底部，找到 `<CustomMusicPlayer>` 组件，将 `id` 属性修改为你自己的酷狗歌单 ID 即可（当前默认为 kugou playlist）。
