<template>
  <div class="tans-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLTabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (name, vm) => {
        let {width, height, left, top} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left}px`;
      })
    },
  }
</script>

<style lang="scss" scoped>
  $height: 40px;
  .tans-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: $height;
    position: relative;

    > .line {
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid blue;
      transition: all 350ms;
    }

    > .action-wrapper {
      margin-left: auto;
    }
  }
</style>