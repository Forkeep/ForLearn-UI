<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLTabsItem',
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>