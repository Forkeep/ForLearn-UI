<template>
  <div class="tabs-pane" v-if="active" :class="tabPaneClasses">
    <slot></slot>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLTabsPane',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      tabPaneClasses() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>