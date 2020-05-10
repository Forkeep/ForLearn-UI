<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    created() {
      // this.$emit('update:selected','XXX')
    }
  }
</script>

<style lang="scss" scoped>

</style>