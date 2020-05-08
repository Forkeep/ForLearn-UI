<template>
  <div class="content">
    <slot/>
  </div>
</template>

<script lang="js">
  export default {
    name:'FLContent'
  }
</script>

<style lang="scss" scoped>
  .content {
    flex-grow: 1;
  }
</style>