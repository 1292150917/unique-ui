<template>
  <i-cell :class="classList" :title="label">
    <div class="i-field__body">
      <textarea v-if="type === 'textarea'"></textarea>
      <input
        v-else
        :class="controlClassList"
        :style="controlStyle"
        :type="type"
        :value="value"
        :readonly="readonly"
        v-on="listeners"
        v-bind="$attrs">
      <i
        v-if="showClear"
        class="i-field__clear icon-close-circle"
        @touchstart.prevent="onClear"></i>
    </div>
  </i-cell>
</template>

<script>
export default {
  name: 'IField',
  props: {
    type: {
      type: String,
      default: 'input'
    },
    value: [String, Number],
    label: String,
    labelAlign: String,
    inputAlign: String,
    clearable: Boolean,
    readonly: Boolean
  },
  data() {
    return {
      focused: false
    }
  },
  computed: {
    classList() {
      return ['i-field', {}]
    },
    controlClassList() {
      return ['i-field__control']
    },
    labelStyle() {
      return {
        'text-align': this.labelAlign
      }
    },
    controlStyle() {
      return {
        'text-align': this.inputAlign
      }
    },
    showClear() {
      return this.clearable && this.focused && this.value !== '' && !this.readonly
    },
    listeners() {
      return {
        ...this.$listeners,
        focus: this.onFocus,
        blur: this.onBlur,
        input: this.onInput
      }
    }
  },
  methods: {
    onFocus(ev) {
      this.focused = true
      this.$emit('focus', ev)
    },
    onBlur(ev) {
      this.focused = false
      this.$emit('blur', ev)
    },
    onInput(ev) {
      this.$emit('input', ev.target.value)
    },
    onClear() {
      this.$emit('input', '')
      this.$emit('clear')
    }
  }
}
</script>
