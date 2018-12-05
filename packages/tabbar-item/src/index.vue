<template>
  <div
    :class="classList"
    :style="style"
    @click="handleClick">
    <slot
      name="icon"
      :active="isActive"><i
        class="i-tabbar-item__icon"
        :class="`fa fa-fw fa-${icon}`"></i></slot>
    <span class="i-tabbar-item__text">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'ITabbarItem',
  data() {
    return {}
  },
  props: {
    label: String,
    value: String,
    icon: String
  },
  computed: {
    isActive() {
      return this.$parent.value === this.value
    },
    classList() {
      return [
        'i-tabbar-item',
        {
          'i-tabbar-item--active': this.isActive
        }
      ]
    },
    style() {
      return {
        color: this.isActive ? this.$parent.activeColor : this.$parent.color
      }
    }
  },
  methods: {
    handleClick(ev) {
      if (this.$parent.active !== this.value) {
        this.$parent.onChange(this.value)
      }
    }
  }
}
</script>
