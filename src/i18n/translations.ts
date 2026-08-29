export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'zh';

export const translations = {
  zh: {
    // Nav
    "nav.home": "首页",
    "nav.blog": "博客",
    "nav.music": "音乐",
    "nav.about": "关于",
    "nav.chessAnalysis": "国际象棋分析",
    "nav.searchLab": "搜索实验室",

    // Music
    "music.page.title": "音乐 / MUSIC",
    "music.platform": "选择平台",
    "music.search.placeholder": "搜索歌曲...",
    "music.nowPlaying": "正在播放",
    "music.playlist": "歌单",
    "music.song": "歌曲",
    "music.search.results": "搜索结果",
    "music.search.empty": "输入关键词搜索歌曲",
    "music.search.no.results": "没有搜索到结果",

    // Hero
    "hero.subtitle.line1": "清华大学物理专业学生",
    "hero.subtitle.line2": "国际象棋国家二级运动员",

    // About Section (homepage)
    "about.section.title": "关于我 / ABOUT",
    "about.section.p1": "我是王翟，清华大学物理专业学生，国际象棋国家二级运动员。",
    "about.section.p2": "我关注 AI for Science，兴趣包括量子纠错、国际象棋与量化金融。",
    "about.section.p3": "这个网站用于整理公开项目、物理笔记、棋局分析与研究方法。",

    // Focus Areas
    "focus.title": "研究与实践 / FOCUS",
    "focus.qec.title": "量子纠错",
    "focus.qec.desc": "关注拓扑量子码、解码算法与可复现实验。",
    "focus.qec.link": "查看公开项目 →",
    "focus.chess.title": "国际象棋",
    "focus.chess.desc": "棋局分析、搜索算法与可解释的计算实验。",
    "focus.chess.link": "进入分析工具 →",
    "focus.quant.title": "量化金融",
    "focus.quant.desc": "关注时间序列数据质量、统计学习、风险建模与可复现研究。",
    "focus.quant.link": "了解研究范围 →",

    // Quantitative Finance
    "quant.page.title": "量化金融 / QUANTITATIVE FINANCE",
    "quant.intro": "这是一个面向研究兴趣与方法的公开页面，聚焦可复现、可审计的量化金融研究实践。",
    "quant.themes.title": "研究主题 / RESEARCH THEMES",
    "quant.themes.body": "时间序列数据质量、统计学习、风险建模与可复现研究。",
    "quant.method.title": "方法 / METHODOLOGY",
    "quant.method.body": "从数据验证与问题定义出发，使用受控实验、历史评估与风险复核形成可追溯的研究记录。",
    "quant.scope.title": "公开范围 / PUBLIC SCOPE",
    "quant.scope.body": "本页面仅介绍公开的方法类别，不包含专有数据、策略细节、参数、交易信号或业绩结果。",
    "quant.disclaimer.title": "声明 / DISCLAIMER",
    "quant.disclaimer.body": "仅用于研究与教育，不构成投资建议，不提供交易信号或业绩声明。",

    // About Page
    "about.page.title": "关于我 / ABOUT",
    "about.intro.1": "我是王翟（Wang Zhai），清华大学物理专业学生，国际象棋国家二级运动员。",
    "about.intro.2": "我关注 AI for Science，研究与实践兴趣包括量子纠错、国际象棋和量化金融。",
    "about.intro.3": "这个网站记录公开项目、物理笔记、棋局分析与研究方法。",
    "about.physics.title": "♜ 物理 / PHYSICS",
    "about.physics.desc": "清华大学物理专业在读，关注 AI for Science 与量子纠错。日常使用 LaTeX 记录推导、课程笔记与可复现实验。",
    "about.chess.title": "♞ 国际象棋 / CHESS",
    "about.chess.desc": "国家二级运动员，擅长开局理论和策略性中局。偏好西西里防御（黑方）、新印度防御（黑方）以及阿拉平变例（白方）、意大利开局（白方）。在博客中，我会分享经典对局分析、开局研究和实战复盘。",
    "about.more.title": "♝ 其他 / MORE",
    "about.more.desc": "除了物理和棋类，我也对编程（Python、数据分析）和技术写作感兴趣。这个网站本身就是我学习 Web 开发的一个实践项目。",
    "about.quant.title": "♜ 量化金融 / QUANTITATIVE FINANCE",
    "about.quant.desc": "关注时间序列数据质量、统计学习、风险建模与可复现研究；公开内容仅限研究兴趣和方法类别。",
    "about.contact.title": "联系方式 / CONTACT",
    "about.contact.email": "邮箱 / Email",
    "about.contact.github": "GitHub",

    // Skills
    "skills.title": "技能 / SKILLS",
    "skills.chess.name": "国际象棋",
    "skills.chess.desc": "准专业级棋手，深耕多年",
    "skills.physics.name": "物理学",
    "skills.physics.desc": "专业方向，理论与实验",
    "skills.python.name": "Python",
    "skills.python.desc": "数据分析与科学计算",
    "skills.latex.name": "LaTeX",
    "skills.latex.desc": "学术写作与排版",
    "skills.data.name": "数据分析",
    "skills.data.desc": "统计方法与可视化",
    "skills.web.name": "Web 开发",
    "skills.web.desc": "前端技术与网站搭建",
    "skills.ml.name": "机器学习",
    "skills.ml.desc": "基础算法与应用",

    // Blog
    "blog.section.title": "最新文章 / RECENT POSTS",
    "blog.view.all": "查看全部文章 →",
    "blog.page.title": "博客 / BLOG",
    "blog.filter.all": "全部",
    "blog.filter.physics": "物理笔记 ♜",
    "blog.filter.chess": "国际象棋 ♞",
    "blog.filter.essay": "随笔 ♝",
    "blog.category.physics": "物理笔记",
    "blog.category.chess": "国际象棋",
    "blog.category.essay": "随笔",
    "blog.back": "← 返回博客",
    "blog.prev": "← 上一篇",
    "blog.next": "下一篇 →",

    "blog.download.pdf": "📎 下载附件 PDF",
    "blog.inspiration": "每日灵感 / INSPIRATION",
    "blog.actions": "操作 / ACTIONS",
    "blog.focusMode": "专注模式",
    "blog.backToTop": "回到顶部",
    "blog.adminPanel": "写作后台",
    // Search
    "search.placeholder": "搜索文章...",
    "search.no.results": "没有找到匹配的文章",
    "search.no.results.hint": "试试其他关键词？",

    // Comments
    "comments.title": "评论 / COMMENTS",

    // Footer
    "footer.copyright": "© 2026 Wang Zhai",
    "footer.admin": "写作后台 / ADMIN",

    // Rank labels
    "rank.core": "核心 / CORE",
    "rank.expert": "精通 / EXPERT",
    "rank.advanced": "高级 / ADVANCED",
    "rank.intermediate": "中级 / INTERMEDIATE",
    "rank.beginner": "初级 / BEGINNER",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.music": "Music",
    "nav.about": "About",
    "nav.chessAnalysis": "Chess Analysis",
    "nav.searchLab": "Search Lab",

    // Music
    "music.page.title": "MUSIC",
    "music.platform": "Platform",
    "music.search.placeholder": "Search songs...",
    "music.nowPlaying": "Now Playing",
    "music.playlist": "Playlists",
    "music.song": "Songs",
    "music.search.results": "Search Results",
    "music.search.empty": "Type to search songs",
    "music.search.no.results": "No matching songs",

    // Hero
    "hero.subtitle.line1": "Physics Student at Tsinghua University",
    "hero.subtitle.line2": "National Level-II Chess Athlete (China)",

    // About Section (homepage)
    "about.section.title": "ABOUT",
    "about.section.p1": "I'm Wang Zhai, an undergraduate physics student at Tsinghua University and a National Level-II Chess Athlete (China).",
    "about.section.p2": "I'm interested in AI for Science, quantum error correction, chess, and quantitative finance.",
    "about.section.p3": "This website presents public projects, physics notes, game analyses, and research methods.",

    // Focus Areas
    "focus.title": "FOCUS",
    "focus.qec.title": "Quantum Error Correction",
    "focus.qec.desc": "Topological quantum codes, decoding algorithms, and reproducible experiments.",
    "focus.qec.link": "View public project →",
    "focus.chess.title": "Chess",
    "focus.chess.desc": "Game analysis, search algorithms, and interpretable computational experiments.",
    "focus.chess.link": "Open analysis tools →",
    "focus.quant.title": "Quantitative Finance",
    "focus.quant.desc": "Time-series data quality, statistical learning, risk modeling, and reproducible research.",
    "focus.quant.link": "Read the public scope →",

    // Quantitative Finance
    "quant.page.title": "QUANTITATIVE FINANCE",
    "quant.intro": "A public overview of research interests and methods for reproducible, auditable quantitative finance research.",
    "quant.themes.title": "RESEARCH THEMES",
    "quant.themes.body": "Time-series data quality, statistical learning, risk modeling, and reproducible research.",
    "quant.method.title": "METHODOLOGY",
    "quant.method.body": "The workflow begins with data validation and problem definition, then uses controlled experiments, historical evaluation, and risk review to produce traceable research records.",
    "quant.scope.title": "PUBLIC SCOPE",
    "quant.scope.body": "This page describes public method categories only. It contains no proprietary data, strategy details, parameters, trading signals, or performance results.",
    "quant.disclaimer.title": "DISCLAIMER",
    "quant.disclaimer.body": "For research and education only. No investment advice, trading signals, or performance claims.",

    // About Page
    "about.page.title": "ABOUT",
    "about.intro.1": "I'm Wang Zhai, an undergraduate physics student at Tsinghua University and a National Level-II Chess Athlete (China).",
    "about.intro.2": "I'm interested in AI for Science, quantum error correction, chess, and quantitative finance.",
    "about.intro.3": "This website records public projects, physics notes, game analyses, and research methods.",
    "about.physics.title": "♜ PHYSICS",
    "about.physics.desc": "An undergraduate physics student at Tsinghua University interested in AI for Science and quantum error correction. I use LaTeX for derivations, course notes, and reproducible experiments.",
    "about.chess.title": "♞ CHESS",
    "about.chess.desc": "Nationally ranked player (National Level 2 Athlete) specializing in opening theory and strategic middlegames. I favor the Sicilian Defense (Black), Nimzo-Indian Defense (Black), Alapin Variation (White), and Italian Game (White). On this blog, I share classic game analyses, opening studies, and post-game reviews.",
    "about.more.title": "♝ MORE",
    "about.more.desc": "Beyond physics and chess, I'm interested in programming (Python, data analysis) and technical writing. This website itself is a hands-on project in my web development journey.",
    "about.quant.title": "♜ QUANTITATIVE FINANCE",
    "about.quant.desc": "Research interests include time-series data quality, statistical learning, risk modeling, and reproducible research. Public material is limited to interests and method categories.",
    "about.contact.title": "CONTACT",
    "about.contact.email": "Email",
    "about.contact.github": "GitHub",

    // Skills
    "skills.title": "SKILLS",
    "skills.chess.name": "Chess",
    "skills.chess.desc": "Semi-professional, years of dedication",
    "skills.physics.name": "Physics",
    "skills.physics.desc": "Major field, theory & experiment",
    "skills.python.name": "Python",
    "skills.python.desc": "Data analysis & scientific computing",
    "skills.latex.name": "LaTeX",
    "skills.latex.desc": "Academic writing & typesetting",
    "skills.data.name": "Data Analysis",
    "skills.data.desc": "Statistical methods & visualization",
    "skills.web.name": "Web Dev",
    "skills.web.desc": "Frontend & site building",
    "skills.ml.name": "Machine Learning",
    "skills.ml.desc": "Foundational algorithms & applications",

    // Blog
    "blog.section.title": "RECENT POSTS",
    "blog.view.all": "View all posts →",
    "blog.page.title": "BLOG",
    "blog.filter.all": "All",
    "blog.filter.physics": "Physics Notes ♜",
    "blog.filter.chess": "Chess ♞",
    "blog.filter.essay": "Essays ♝",
    "blog.category.physics": "Physics Notes",
    "blog.category.chess": "Chess",
    "blog.category.essay": "Essay",
    "blog.back": "← Back to blog",
    "blog.prev": "← Previous",
    "blog.next": "Next →",

    "blog.download.pdf": "📎 Download PDF Attachment",
    "blog.inspiration": "INSPIRATION",
    "blog.actions": "ACTIONS",
    "blog.focusMode": "Focus Mode",
    "blog.backToTop": "Back to Top",
    "blog.adminPanel": "Writer Studio",
    // Search
    "search.placeholder": "Search posts...",
    "search.no.results": "No matching posts found",
    "search.no.results.hint": "Try different keywords?",

    // Comments
    "comments.title": "COMMENTS",

    // Footer
    "footer.copyright": "© 2026 Wang Zhai",
    "footer.admin": "ADMIN",

    // Rank labels
    "rank.core": "CORE",
    "rank.expert": "EXPERT",
    "rank.advanced": "ADVANCED",
    "rank.intermediate": "INTERMEDIATE",
    "rank.beginner": "BEGINNER",
  },
} as const;

export type TranslationKey = keyof typeof translations.zh;
