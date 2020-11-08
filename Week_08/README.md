## 学习笔记  
---

### 浏览器渲染过程  

**URL** -- _HTTP_ --> **HTML** -- _parse_ --> **DOM** -- _css computing_ --> **DOM with CSS** -- _layout_ --> **DOM with Position** -- _render_ --> **Bitmap** 

&nbsp;

* 1、排版 | 根据浏览器属性进行排版
* 2、排版 | 收集元素进行
  * 根据主轴尺寸，把元素进行分行
  * 若设置了no-wrap，则强行分配进第一行
* 3、排版 | 计算主轴
  * 找出所有Flex元素
  * 把主轴方向的剩余尺寸按比例分配给这些元素
  * 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
* 4、排版 | 计算交叉轴
  * 根据每一行中最大元素尺寸计算行高
  * 根据行高flex-align和item-align，确定元素具体位置
* 5、渲染 | 绘制单个元素
  * 绘制需要依赖一个图形环境
  * 我们这里采用了npm包images
  * 绘制在一个viewport上进行
  * 与绘制相关的属性：background-color、border、background-image等
* 6、渲染 | 绘制DOM树
  * 递归调用子元素的绘制方法完成DOM树的绘制
  * 忽略一些不需要绘制的节点
  * 实际浏览器中，文字绘制是难点，需要依赖字体库，我们这里忽略
  * 实际浏览器中，还会对一些图层做compositing，我们这里也忽略了