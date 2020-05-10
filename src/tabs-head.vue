<template>
  <div class="tans-head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLTabsHead',
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(`tabs-head:${name}`)
      })
    },
  }
</script>

<style lang="scss" scoped>
  $height: 40px;
  .tans-head {
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: $height;
    > .action-wrapper{
      margin-left: auto;
    }
  }
</style>