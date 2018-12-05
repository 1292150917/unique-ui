## Sticky 粘性定位

常用来实现吸顶效果，如果浏览器支持`sticky`定位，则使用原生的，否则会模拟实现，但可能与原生有些许差别

### 代码演示

```html
<i-sticky :top="0">
  <i-tag type="info">top: 0</i-tag>
</i-sticky>

<p v-for="item in 3">{{ item }}</p>

<i-sticky :top="60">
  <i-tag type="warning">top: 60px</i-tag>
</i-sticky>

<p v-for="item in 6">{{ item }}</p>

<i-sticky :top="100">
  <img src="https://s1.ax2x.com/2018/11/10/5m6blY.jpg" alt="5m6blY.jpg" style="border: 1px solid #eee;" />
</i-sticky>

<p v-for="item in 8">{{ item }}</p>

<i-sticky :top="300">
  <i-tag type="success">top: 300px</i-tag>
</i-sticky>

<p v-for="item in 9">{{ item }}</p>

<i-sticky :top="350">
  <i-tag type="danger">top: 350px</i-tag>
</i-sticky>

<p v-for="item in 20">{{ item }}</p>
```


### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| top | 距浏览器顶部的距离（单位为px） | `String | Number` | `0` |
| z-index | 原生 z-index 属性 | `String | Number` | `1` |
