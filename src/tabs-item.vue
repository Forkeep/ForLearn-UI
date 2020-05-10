<template>
  <div class="tabs-item" @click="XXX" :class="tabItemClasses">
    <slot></slot>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLTabsItem',
    inject:['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name:{
        type: [String,Number],
        required: true
      }
    },
    computed:{
      tabItemClasses(){}
    },
    created() {
      this.eventBus.$on('update:selected',(value)=>{
        console.log(value)
      })
    },
    methods:{
      XXX(){
        this.eventBus.$emit('update:selected',this.name)
      }
    }

  }
</script>

<style lang="scss" scoped>
.tabs-item{
  padding: 0 1.5em;
}
</style>