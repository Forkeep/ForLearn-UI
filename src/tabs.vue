<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script lang="js">
  import Vue from 'vue';
  export default {
    name: 'FLTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(`tabs:${name}`)
      })
    },
    mounted() {
      this.eventBus.$emit('update:selected',this.selected)
    }
  }
</script>

<style lang="scss" scoped>

</style>