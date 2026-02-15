---
title: "量子力学中的路径积分"
title_en: "Path Integrals in Quantum Mechanics"
date: 2026-02-10
category: "物理笔记"
description: "从费曼路径积分的基本思想出发，探讨量子力学中的路径积分方法及其应用。"
description_en: "Exploring the path integral formulation of quantum mechanics, from Feynman's core ideas to applications."
---

量子力学的路径积分表述（Path Integral Formulation）是理查德·费曼在1948年提出的一种全新的量子力学表述方式。与薛定谔方程的波动方程形式和海森堡的矩阵力学形式不同，路径积分关注的是粒子从一个时空点运动到另一个时空点的所有可能路径。基本思想是：粒子不仅仅走经典的“最小作用量”路径，而是同时走过所有可能的路径。每一条路径对概率幅都有贡献。

在量子力学中，波函数 $\psi(x,t)$ 描述了系统的状态。在路径积分表述中，粒子从时空点 $(x_a, t_a)$ 传播到 $(x_b, t_b)$ 的传播子（Propagator）可以表示为所有可能路径的加权和。权重因子由经典的瞬时作用量 $S$ 决定，形式为 $e^{iS/\hbar}$。数学上，这表达为对路径空间的功能积分：

$$K(x_b, t_b; x_a, t_a) = \int \mathcal{D}[x(t)] \, e^{iS[x]/\hbar}$$

这里，$\mathcal{D}[x(t)]$ 表示对所有连接起点和终点的路径进行积分。作用量 $S[x]$ 是拉格朗日量 $L$ 在时间上的积分：

$$S[x] = \int_{t_a}^{t_b} L(\dot{x}, x, t) \, dt$$

当系统的特征作用量远大于普朗克常数 $\hbar$ 时，相位因子 $e^{iS/\hbar}$ 振荡极其剧烈，除了经典路径（使作用量取极值的路径）附近，其他路径的贡献会因破坏性干涉而相互抵消。这就是为什么在宏观尺度下我们只观察到经典轨迹的原因。路径积分不仅在非相对论量子力学中提供了直观的图像，更是量子场论（Quantum Field Theory）中处理相互作用和微扰展开（费曼图）的核心工具。
