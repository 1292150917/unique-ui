<template>
  <div class="demo-field">
    <demo-block title="简单用法">
      <i-cell-group>
        <i-field v-model="value1" label="账号"></i-field>
      </i-cell-group>
    </demo-block>
    <demo-block title="设置类型">
      <i-cell-group>
        <i-field v-model="value2" label="Username" clearable></i-field>
        <i-field v-model="value3" label="Password" type="password" clearable></i-field>
      </i-cell-group>
    </demo-block>
    <demo-block title="禁用">
      <i-cell-group>
        <i-field label="用户名" disabled value="已禁用"></i-field>
      </i-cell-group>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-field {
}
</style>
