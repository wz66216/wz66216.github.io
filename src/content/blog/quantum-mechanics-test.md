---
title: "测试长文：量子力学与薛定谔方程推导"
title_en: "Test Post: Quantum Mechanics and Schrödinger Equation"
date: 2026-04-24
category: "物理笔记"
description: "用于测试动态棋子目录（TOC）和 LaTeX 公式渲染的长篇物理测试文章。"
description_en: "A long physics test article to verify the dynamic chess piece Table of Contents (TOC) and LaTeX rendering."
---

这篇超长文章是我为您专门生成的，目的就是用来测试刚才为您添加的 **“棋子动态目录 (Table of Contents)”** 以及网站原有的 LaTeX 公式渲染。您可以向下滚动查看右侧那只跟随您移动的“马 (♞)”。

## 1. 经典力学的局限性

在十九世纪末与二十世纪初，物理学界遇到了一系列无法用经典牛顿力学和麦克斯韦电磁理论解释的现象。比如黑体辐射的紫外灾变、光电效应以及原子的稳定性。

### 1.1 紫外灾变

根据瑞利-金斯定律，黑体辐射的能量密度公式推导得出高频波段（紫外线及更高）能量将趋向无穷大，这显然违背了能量守恒定律。普朗克在1900年提出了能量量子化假说，即电磁波的能量只能是一定基本能量量子 $E = h\nu$ 的整数倍。

### 1.2 光电效应

爱因斯坦进一步扩展了普朗克的想法，他认为光不仅在发射和吸收时表现出量子特性，而且在空间传播时也是如此，即光由光子组成。这完美地解释了光电效应：

$$ E_{k} = h\nu - W $$

这里 $E_{k}$ 是逸出电子的最大动能，$\nu$ 是入射光的频率，$W$ 是金属的逸出功。这也是经典力学无法预测的。

## 2. 波粒二象性

物质的本性到底是什么？这是一个贯穿几个世纪的谜题。德布罗意在1924年做出了大胆的假设：既然光波具有粒子性，那么实物粒子（如电子）也应当具有波动性。

### 2.1 德布罗意关系

任何具有动量 $p$ 的粒子，都带有一个特征波长 $\lambda$，两者的关系由下式给出：

$$ \lambda = \frac{h}{p} $$

其中 $h$ 是普朗克常数。这一关系后来被戴维森-革末实验（电子衍射实验）所证实。

为了更好地观察我们添加的目录功能，我在这里插入一大段占位文本，以拉长文章的篇幅。

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam aliquet faucibus pellentesque. Mauris adipiscing mauris fringilla turpis interdum sed pulvinar nisi malesuada.

## 3. 薛定谔方程的引入

如果电子是一种波，那么描述这种波的“波函数”是什么？控制其演化的方程又是什么？1926年，奥地利物理学家埃尔温·薛定谔提出了著名的薛定谔方程。

### 3.1 一维稳态薛定谔方程

对于一个质量为 $m$ 的粒子，在势场 $V(x)$ 中运动，其稳态（不含时）波函数 $\psi(x)$ 必须满足以下特征值方程：

$$ -\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x) $$

其中 $\hbar = \frac{h}{2\pi}$ 是约化普朗克常数，$E$ 是系统的总能量。

### 3.2 三维含时薛定谔方程

如果是描述随时间演化的状态，那么波函数 $\Psi(\mathbf{r}, t)$ 满足的含时薛定谔方程为：

$$ i\hbar \frac{\partial \Psi(\mathbf{r}, t)}{\partial t} = \hat{H} \Psi(\mathbf{r}, t) $$

其中哈密顿算符 $\hat{H}$ 通常表示为动能与势能算符之和：

$$ \hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V(\mathbf{r}) $$

再次插入较长的占位文本以便于您向下滚动：

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.

## 4. 玻恩的概率诠释

薛定谔方程虽然给出了波函数的形式，但波函数 $\Psi(\mathbf{r}, t)$ 本身是一个复数，没有直接的物理意义。玻恩（Max Born）给出了波函数的统计解释。

### 4.1 概率密度

在空间某一点 $\mathbf{r}$，在时刻 $t$，找到粒子的概率密度由波函数的模方给出：

$$ P(\mathbf{r}, t) = |\Psi(\mathbf{r}, t)|^2 = \Psi^*(\mathbf{r}, t) \Psi(\mathbf{r}, t) $$

这宣告了经典物理中决定论的终结，物理学进入了概率和统计的微观世界。这也是爱因斯坦那句著名的“上帝不掷骰子”的由来。

## 5. 测试完毕

您可以尝试不断地上下滑动这篇文章，查看网页右侧那只代表着物理与智慧的国际象棋“马 (♞)”是否稳健地穿梭于您的目录层级之间！同时，您也可以通过浏览器顶部地址栏进入后台管理系统。