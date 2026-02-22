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
    "nav.about": "关于",

    // Hero
    "hero.subtitle.line1": "清华大学物理学 · 国际象棋国家二级运动员",
    "hero.subtitle.line2": "Physics Student · Chess Player",

    // About Section (homepage)
    "about.section.title": "关于我 / ABOUT",
    "about.section.p1": "我是王翟，清华大学物理学专业大二学生，同时也是一名国际象棋国家二级运动员。",
    "about.section.p2": "在物理的世界里，我探索 AI for Science 的前沿方向；在棋盘上，我寻找每一步的最优解。两者的共同点是——对真理的不懈追求。",
    "about.section.p3": "这个网站是我的个人空间，记录物理笔记、棋局分析和生活感悟。",

    // About Page
    "about.page.title": "关于我 / ABOUT",
    "about.intro.1": "我是王翟（WangZhai），清华大学物理学专业大二学生，同时也是一名国际象棋国家二级运动员。",
    "about.intro.2": "在物理的世界里，我正在探索 AI for Science 的前沿方向——用人工智能的方法解决物理学中的核心问题。在棋盘上，我寻找每一步的最优解，从西西里防御到新印度防御，棋局如同一场思维的交响。",
    "about.intro.3": "两者的共同点是——对真理的不懈追求，以及在无限可能中找到最优路径的执着。",
    "about.physics.title": "♜ 物理 / PHYSICS",
    "about.physics.desc": "清华大学物理学专业大二在读，目前研究方向为 AI for Science——探索人工智能与物理学的交叉领域。日常大量使用 LaTeX 记录推导过程和课程笔记，这也是搭建这个博客的初衷之一。",
    "about.chess.title": "♞ 国际象棋 / CHESS",
    "about.chess.desc": "国家二级运动员，擅长开局理论和策略性中局。偏好西西里防御（黑方）、新印度防御（黑方）以及阿拉平变例（白方）、意大利开局（白方）。在博客中，我会分享经典对局分析、开局研究和实战复盘。",
    "about.more.title": "♝ 其他 / MORE",
    "about.more.desc": "除了物理和棋类，我也对编程（Python、数据分析）和技术写作感兴趣。这个网站本身就是我学习 Web 开发的一个实践项目。",
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
    "blog.back": "← 返回博客",
    "blog.prev": "← 上一篇",
    "blog.next": "下一篇 →",

    // Search
    "search.placeholder": "搜索文章...",
    "search.no.results": "没有找到匹配的文章",
    "search.no.results.hint": "试试其他关键词？",

    // Comments
    "comments.title": "评论 / COMMENTS",

    // Footer
    "footer.copyright": "© 2026 Wang Zhai",

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
    "nav.about": "About",

    // Hero
    "hero.subtitle.line1": "Tsinghua University Physics · National Chess Player",
    "hero.subtitle.line2": "",

    // About Section (homepage)
    "about.section.title": "ABOUT",
    "about.section.p1": "I'm WangZhai, a sophomore physics student at Tsinghua University and a nationally ranked chess player.",
    "about.section.p2": "In physics, I explore the frontier of AI for Science; on the chessboard, I search for the optimal move. What unites them is a relentless pursuit of truth.",
    "about.section.p3": "This website is my personal space for physics notes, game analyses, and reflections on life.",

    // About Page
    "about.page.title": "ABOUT",
    "about.intro.1": "I'm WangZhai, a sophomore physics student at Tsinghua University and a nationally ranked chess player.",
    "about.intro.2": "In the world of physics, I'm exploring the frontier of AI for Science—applying artificial intelligence to solve core problems in physics. On the chessboard, I search for the optimal move, from the Sicilian Defense to the Nimzo-Indian Defense. Both are symphonies of thought.",
    "about.intro.3": "What they share is a relentless pursuit of truth, and a passion for finding the optimal path among infinite possibilities.",
    "about.physics.title": "♜ PHYSICS",
    "about.physics.desc": "Sophomore at Tsinghua University majoring in Physics. Currently exploring AI for Science—the intersection of artificial intelligence and physics. I use LaTeX extensively for derivations and course notes—systematizing knowledge is one reason I built this blog.",
    "about.chess.title": "♞ CHESS",
    "about.chess.desc": "Nationally ranked player (National Level 2 Athlete) specializing in opening theory and strategic middlegames. I favor the Sicilian Defense (Black), Nimzo-Indian Defense (Black), Alapin Variation (White), and Italian Game (White). On this blog, I share classic game analyses, opening studies, and post-game reviews.",
    "about.more.title": "♝ MORE",
    "about.more.desc": "Beyond physics and chess, I'm interested in programming (Python, data analysis) and technical writing. This website itself is a hands-on project in my web development journey.",
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
    "blog.back": "← Back to blog",
    "blog.prev": "← Previous",
    "blog.next": "Next →",

    // Search
    "search.placeholder": "Search posts...",
    "search.no.results": "No matching posts found",
    "search.no.results.hint": "Try different keywords?",

    // Comments
    "comments.title": "COMMENTS",

    // Footer
    "footer.copyright": "© 2026 Wang Zhai",

    // Rank labels
    "rank.core": "CORE",
    "rank.expert": "EXPERT",
    "rank.advanced": "ADVANCED",
    "rank.intermediate": "INTERMEDIATE",
    "rank.beginner": "BEGINNER",
  },
} as const;

export type TranslationKey = keyof typeof translations.zh;
