## 学习笔记

&nbsp;


为什么 first-letter 可以设置 float 之类的，而 first-line 不行?

* 想要元素可以设置 float 属性，该元素从网页的正常流动(文档流)中移除。
* first-line是无法匹配任何真实的HTML元素的，float属于破坏性属性。
* first-line 可以选中的字符数量是不固定得，对其重新布局排版消耗性能比较大。