# 网站搭建日志

## 2026-02-15

### 阶段一：项目初始化与设计
- 通过交互式问答完成设计规范文档 `DESIGN.md`
- 确定技术栈：Astro 5.x + 静态输出 + Cloudflare Pages
- 确定设计风格：瑞士网格 × 国际象棋深度融合，纯黑白配色
- 删除旧的 HTML/CSS/JS 文件，用 Astro 项目替换

### 阶段二：Astro 项目搭建
- `npm create astro@latest` 初始化项目（minimal 模板）
- 安装依赖：`astro`、`remark-math`、`rehype-katex`
- 配置 `astro.config.mjs`：静态输出 + LaTeX 公式支持
- 创建 `src/styles/global.css`：CSS 变量、主题色、重置样式、棋盘分割线工具类
- 创建 `src/layouts/BaseLayout.astro`：Google Fonts、KaTeX CSS、主题脚本、侧边栏 + 主内容结构
- 创建 `src/components/Sidebar.astro`：Logo（♚）、导航链接、主题切换、语言切换、移动端汉堡菜单

### 阶段三：首页组件开发
- 创建 `src/components/Hero.astro`：全屏棋盘背景（CSS Grid 8×8，opacity 0.06）、"WANG ZHAI" 大标题（fade-in 动画）、中英文副标题、弹跳滚动箭头
- 创建 `src/components/AboutSection.astro`：白色背景、"关于我 / ABOUT" 标题、棋盘分割线、3 段占位文字、max-width 720px
- 创建 `src/components/SkillsSection.astro`：深色背景、棋子等级制技能卡片（♚→♞）、3/2/1 列响应式网格
- 创建 `src/components/BlogSection.astro`：2 列棋盘式黑白交替卡片、悬停颜色反转、分类图标（♜♞♝）、"查看全部文章 →" 链接
- 创建 `src/components/Footer.astro`：极简页脚、棋盘分割线 + "© 2026 Wang Zhai"
- 重写 `src/pages/index.astro`：组装所有首页组件

### 阶段三补丁：对比度修复
- **问题**：浅色模式下，`--color-bg-black`（#F0F0F0）上显示白色文字（#FFFFFF），几乎不可见
- **修复**：在 `global.css` 中新增 `--color-section-dark-*` 变量组，确保"深色区块"在两种主题下都有真正的深色背景和浅色文字
- 更新 `SkillsSection.astro` 和 `BlogSection.astro` 使用新变量
- 构建通过，浅色/深色模式均通过 Playwright 截图验证

### 阶段四：博客系统
- 创建 `src/content.config.ts`：内容集合 schema（title, description, date, category 枚举）
- 创建 3 篇示例博客文章（量子路径积分、西西里纳伊道夫、物理与棋）
- 创建 `src/pages/blog/index.astro`：博客列表页，分类过滤（全部/物理笔记♜/国际象棋♞/随笔♝），棋盘式黑白交替卡片
- 创建 `src/pages/blog/[...slug].astro`：博客详情页，KaTeX 渲染，上下篇导航
- 构建通过，Playwright 截图验证 LaTeX 公式渲染正常

### 阶段五：关于页
- 创建 `src/pages/about.astro`：简洁段落式，含 intro/物理/国际象棋/其他/联系方式五个区块
- 联系方式区块包含邮箱和 GitHub 链接

### 阶段六：棋类主题动效
- 在 `global.css` 中添加动画类：`animate-on-scroll`（淡入上移）、`animate-drop`（棋子落子）、`animate-knight`（L形马步滑入）
- 在 `BaseLayout.astro` 中添加 Intersection Observer 脚本（15% 可见触发，仅播放一次）
- 主题切换翻转动画（`.theme-transitioning` → `rotateY(180deg)` + 300ms 中点切换）
- `prefers-reduced-motion` 支持：禁用所有动画
- 首页组件添加动画类：Hero title（animate-drop）、AboutSection（animate-on-scroll）、SkillsSection cards（animate-knight 交错延迟）、BlogSection cards（animate-on-scroll 交错延迟）

### 阶段七：路由级 i18n（中英双语）
- 创建 `src/i18n/translations.ts`：完整中英翻译字典（导航、Hero、关于、技能、博客、页脚、棋子等级标签）
- 创建 `src/i18n/utils.ts`：`t(lang, key)` 翻译函数、`getLangPrefix()`、`getAlternateUrl()`、`getLangFromUrl()` 等工具函数
- 更新 `src/content.config.ts`：schema 新增可选 `title_en` 和 `description_en` 字段
- 3 篇博客文章添加 `title_en` / `description_en` frontmatter
- **组件 i18n 重构（7个文件）**：
  - `BaseLayout.astro`：添加 `lang` prop，`<html lang>` 动态化
  - `Sidebar.astro`：添加 `lang`/`currentPath` props，导航文字用 `t()`，语言切换改为 `<a>` 链接跳转
  - `Hero.astro`：subtitle 用 `t()`，英文版隐藏 line2
  - `AboutSection.astro`、`SkillsSection.astro`、`BlogSection.astro`、`Footer.astro`：全部用 `t()` 替换硬编码文字
- **中文页面更新（4个文件）**：`index.astro`、`about.astro`、`blog/index.astro`、`blog/[...slug].astro` 添加 `lang="zh"` + `t('zh', ...)` 调用
- **英文路由创建（4个新文件）**：
  - `src/pages/en/index.astro` — 英文首页
  - `src/pages/en/about.astro` — 英文关于页
  - `src/pages/en/blog/index.astro` — 英文博客列表（标题用 `title_en`）
  - `src/pages/en/blog/[...slug].astro` — 英文博客详情（标题/描述用英文翻译，内容保持中文）
- 构建通过：12 页面（6中文 + 6英文）全部生成成功

### 阶段八：Giscus 评论系统
- 通过 GitHub API 和 Giscus API 获取配置参数：`repo-id`（R_kgDORQMrpg）、`category-id`（DIC_kwDORQMrps4C2eCg，Announcements 分类）
- 创建 `src/components/GiscusComments.astro`：
  - 接受 `lang` prop，根据语言切换 `data-lang`（zh-CN / en）
  - 使用 `data-mapping="pathname"` 按路径匹配评论
  - 棋盘分割线 + "评论 / COMMENTS" 标题
  - 主题同步：通过 MutationObserver 监听 `data-theme` 变化，用 postMessage 通知 giscus iframe 切换亮/暗主题
- 在 `src/i18n/translations.ts` 中添加 `comments.title` 翻译键（中文："评论 / COMMENTS"，英文："COMMENTS"）
- 嵌入到中文博客详情页 `src/pages/blog/[...slug].astro`（文章内容与导航之间）
- 嵌入到英文博客详情页 `src/pages/en/blog/[...slug].astro`（同上）
- 构建通过：12 页面，6 篇博客详情页均包含 giscus 评论组件

### 阶段九：Cloudflare Pages 部署
- 修复构建错误：Cloudflare Pages Root directory 配置错误（`my-blog` → 留空），仓库根目录即为项目根目录
- 构建配置：Build command = `npm run build`，Build output directory = `dist`，Root directory = `/`（留空）
- 部署成功：`https://thu-wangzhai.pages.dev` 上线

### 阶段十：个人信息完善
- 更新姓名显示：Hero 标题 "WANG ZHAI" → "WANGZHAI"，关于页标题加入中文名"王翟"
- 更新学校信息：清华大学物理学专业大二，体现在首页 Hero 副标题、关于简介、详细介绍中
- 更新研究方向：从"理论物理、量子场论、统计力学、数学物理"→ "AI for Science"
- 更新棋力等级：从"准专业级棋手"→ "国家二级运动员"
- 更新开局偏好：新增"新印度防御（黑方）"和"阿拉平变例（白方）"
- 更新联系邮箱：`wangzhai@example.com` → `wd24@mails.tsinghua.edu.cn`
- 关于页新增头像占位符（♚ 棋王图标，圆形），待替换为真实照片
- 中英文翻译同步更新（`translations.ts` 中 zh/en 两套文案）

---

**当前状态**：个人信息已完善，网站已上线 `https://thu-wangzhai.pages.dev`
