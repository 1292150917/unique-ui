## Switch 开关

### 代码演示

#### 简单用法

```html
<i-switch v-model="value1"></i-switch>
```

#### 禁用状态

```html
<i-switch v-model="value2" disabled></i-switch>
```

#### 加载状态

设置`loading`属性开启加载状态，此时不可点击

```html
<i-switch v-model="value3" loading></i-switch>
```

#### 自定义颜色

```html
<i-switch v-model="value4" active-color="#409eff" inactive-color="#f86f74"></i-switch>
```

#### 搭配 Cell 使用

```html
<i-cell-group>
  <i-cell title="允许通知">
    <i-switch slot="value" v-model="value5" active-color="#24bc59" inactive-color="#f86f74"></i-switch>
  </i-cell>
</i-cell-group>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | `true`打开，`false`关闭 | `String` | `false` |
| disabled | 是否为禁用状态 | `Boolean` | `false` |
| loading | 是否为加载状态 | `Boolean` | `false` |
| active-color | 打开时的背景色 | `String` | 主题色 |
| inactive-color | 关闭时的背景色 | `String` | `#fff` |

### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换时触发 | 状态 |