<template>
  <div class="tabs-item" @click="selectItem" :class="tabItemClasses">
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
      tabItemClasses() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods:{
      selectItem(){
        this.eventBus.$emit('update:selected',this.name)
      }
    }

  }
</script>

<style lang="scss" scoped>
.tabs-item{
  padding: 0 1.5em;
  cursor: pointer;
  &.active{
    background: red;
  }
}
</style>