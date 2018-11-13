<template>
  <div :class="classList">
    <div
      class="i-slide__track"
      :style="trackStyle"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @transitionend="$emit('change', 0)">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ISlide',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: Number,
    duration: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      w: 0,
      h: 0,
      items: []
    }
  },
  computed: {
    classList() {
      return ['i-slide']
    },
    count() {
      return this.items.lenght
    },
    trackStyle() {
      return {
        width: `${this.count * this.w}px`,
        transitionDuration: this.duration + 'ms'
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const rect = this.$el.getBoundingClientRect()
      this.w = rect.width
      this.h = rect.height
    },
    onTouchStart(ev) {
      console.log(ev)
    },
    onTouchMove(ev) {},
    onTouchEnd(ev) {}
  }
}
</script>
