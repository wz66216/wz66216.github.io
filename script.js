/*
  ============================================================
  script.js - 博客交互逻辑
  ============================================================
  
  JavaScript 基础知识：
  
  1. 变量声明：
     - const：常量，不可重新赋值（优先使用）
     - let：变量，可以重新赋值
     - var：老写法，不推荐使用
  
  2. DOM（Document Object Model）：
     - 浏览器把 HTML 转换成的"对象树"
     - 通过 DOM API 可以用 JS 操控网页内容
     - document.querySelector('选择器')：选中元素
     - element.addEventListener('事件', 回调函数)：监听事件
  
  3. 常见事件：
     - 'click'：点击
     - 'scroll'：滚动
     - 'DOMContentLoaded'：HTML 加载完成
  
  ============================================================
*/

// 等待 HTML 文档加载完成后再执行 JS
// 这很重要，否则 JS 可能找不到还没加载的 HTML 元素
document.addEventListener('DOMContentLoaded', function () {

  // ==================== 1. 移动端导航菜单 ====================
  
  /*
    功能：点击汉堡菜单按钮，展开/收起导航链接
    
    querySelector() 通过 CSS 选择器找到 HTML 元素
    classList.toggle() 切换 CSS 类名（有则删除，无则添加）
  */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');

      // 切换汉堡菜单的动画效果（变成 X）
      navToggle.classList.toggle('active');
    });
  }

  // 点击导航链接后自动收起菜单（手机上）
  if (navLinks) {
    const links = navLinks.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        if (navToggle) {
          navToggle.classList.remove('active');
        }
      });
    });
  }

  // ==================== 2. 导航栏滚动效果 ====================
  
  /*
    功能：页面滚动超过 50px 时，给导航栏添加阴影效果
    
    window.scrollY：当前滚动距离（像素）
    classList.add/remove：添加/移除 CSS 类名
  */
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==================== 3. 滚动渐显动画 ====================
  
  /*
    Intersection Observer API：
    一个高效的方式来检测元素是否进入/离开视口（用户可见区域）
    
    比传统的 scroll 事件监听性能更好：
    - scroll 事件每次滚动都会触发（可能每秒 60 次）
    - Observer 只在元素状态改变时触发
  */
  const observerOptions = {
    threshold: 0.1,    // 元素 10% 进入视口时触发
    rootMargin: '0px'  // 不额外扩展检测区域
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // 元素进入视口时添加 'visible' 类
        entry.target.classList.add('visible');
        // 只触发一次，之后停止观察
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察所有文章卡片
  const postCards = document.querySelectorAll('.post-card');
  postCards.forEach(function (card) {
    observer.observe(card);
  });

  // ==================== 4. 返回顶部功能（可选） ====================
  
  /*
    创建一个"返回顶部"按钮
    当用户滚动超过 300px 时显示
  */
  
  // 动态创建按钮元素
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '&#8593;';  // ↑ 向上箭头
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', '返回顶部');
  
  // 设置按钮样式
  backToTop.style.cssText = [
    'position: fixed',
    'bottom: 30px',
    'right: 30px',
    'width: 44px',
    'height: 44px',
    'border-radius: 50%',
    'background: var(--color-primary)',
    'color: white',
    'border: none',
    'font-size: 1.2rem',
    'cursor: pointer',
    'opacity: 0',
    'visibility: hidden',
    'transition: all 0.3s ease',
    'z-index: 999',
    'box-shadow: 0 2px 10px rgba(0,0,0,0.2)',
    'display: flex',
    'align-items: center',
    'justify-content: center'
  ].join('; ');
  
  // 添加到页面
  document.body.appendChild(backToTop);
  
  // 滚动时控制显示/隐藏
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });
  
  // 点击返回顶部
  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // 平滑滚动
    });
  });

  // ==================== 5. 打印欢迎信息到控制台 ====================
  
  /*
    console.log() 在浏览器开发者工具的"控制台"中打印信息
    
    如何打开开发者工具：
    - Chrome/Edge: 按 F12 或 Ctrl+Shift+I
    - Firefox: 按 F12
    - 然后点击 "Console"（控制台）标签
  */
  console.log('%c欢迎来到我的博客！🎉', 'font-size: 20px; color: #5b6abf; font-weight: bold;');
  console.log('%c这个网站是用纯 HTML + CSS + JS 搭建的', 'font-size: 14px; color: #636e72;');
  console.log('%c按 F12 打开的这个面板叫"开发者工具"，是前端开发的必备利器！', 'font-size: 14px; color: #636e72;');

});
