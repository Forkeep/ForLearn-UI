<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script lang="js">
  export default {
    name:'FLTabsPane',
    inject:['eventBus'],
    created() {
      this.eventBus.$on('update:selected',(value)=>{
        console.log(value)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>