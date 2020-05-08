<template>
  <div class="layout" :class="layoutClass">
    <slot/>
  </div>
</template>

<script lang="js">
  export default {
    name : 'FLLayout',
    data(){
      return {
        layoutClass: {
          layoutHasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach((element)=>{
          if (element.$options.name === 'FLSider'){
            this.layoutClass.layoutHasSider = true
          }
      })
    }
  }
</script>

<style lang="scss" scoped>
.layout{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.layoutHasSider{
    flex-direction: row;
  }
}

</style>