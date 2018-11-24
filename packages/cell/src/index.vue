<template>
  <div :class="classList" @click="onClick">
    <div class="i-cell__hd">
      <slot name="icon"><i :class="`i-cell__icon fa fa-fw fa-${this.icon}`" v-if="icon" /></slot>
    </div>
    <div class="i-cell__bd">
      <slot name="title">
        <span class="i-cell__title">{{ title }}</span>
        <span class="i-cell__desc" v-if="desc">{{ desc }}</span>
      </slot>
    </div>
    <div class="i-cell__ft">
      <slot><slot name="value"><span class="i-cell__value">{{ value }}</span></slot></slot>
      <slot name="right-icon"><i class="i-cell__arrow fa fa-fw fa-angle-right" v-if="clickable"></i></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ICell',
  props: {
    icon: String,
    title: String,
    value: String,
    desc: String,
    isLink: Boolean,
    to: [Number, Object],
    replace: Boolean
  },
  computed: {
    classList() {
      return [
        'i-cell',
        {
          'i-cell--clickable': this.clickable
        }
      ]
    },
    leftIconClassName() {
      return `fa fw fa-${this.icon}`
    },
    clickable() {
      return this.isLink || this.to
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
      if (this.to) this.$router[this.replace ? 'replace' : 'push'](this.to)
    }
  }
}
</script>
