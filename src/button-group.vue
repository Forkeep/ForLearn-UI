<template>
  <div class="g-button-group">
    <slot/>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children){
      let name = node.nodeName.toLowerCase();
      if (name !== 'button'){
        console.warn(`g-button-group 的所有子元素必须是 g-button，但是此处是${name}`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    .g-button{
      &:not(:first-child){
        margin-left: -1px;
      }
      border-radius: 0;
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-bottom-right-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>