<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false" class="close">关闭</button>
    </div>
  </transition>
</template>

<script lang="js">
  export default {
    name: 'FLSider',
    data() {
      return {
        visible: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sider{
    position: relative;
    .close{
      position: absolute;
      right: 0;
      top:0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }

  .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    margin-left: -200px;
  }
</style>