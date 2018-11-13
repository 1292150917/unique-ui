<template>
  <div class="demo-slide">
    <demo-block title="简单用法">
      <i-slide>
        <i-slide-item>0</i-slide-item>
        <i-slide-item>1</i-slide-item>
        <i-slide-item>2</i-slide-item>
        <i-slide-item>3</i-slide-item>
      </i-slide>
    </demo-block>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../theme/src/common/var';

.demo-slide {
  .i-slide-item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38px;
    color: #fff;
    &:nth-child(odd) {
      background-color: lighten($primary-color, 30%);
    }
    &:nth-child(even) {
      background-color: lighten($primary-color, 45%);
    }
  }
}
</style>
