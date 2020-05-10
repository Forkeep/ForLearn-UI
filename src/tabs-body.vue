<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script lang="js">
  export default {
    name:'FLTabsBody',
    inject:['eventBus'],
    created() {
      this.eventBus.$on('update:selected',(value,vm)=>{
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>