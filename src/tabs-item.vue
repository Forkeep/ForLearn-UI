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
          active: this.active,
          disabled: this.disabled
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
        if (this.disabled){return}
        this.eventBus.$emit('update:selected',this.name,this)
      }
    }

  }
</script>

<style lang="scss" scoped>
  $tabItemColor: green;
  .tabs-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5em;
    cursor: pointer;

    &.active {
      color: $tabItemColor;
      font-weight: 700;
    }

    &.disabled {
      color: #666;
      cursor: not-allowed;

    }
  }
</style>