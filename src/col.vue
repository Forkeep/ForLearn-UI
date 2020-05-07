<template>
  <div class="col" :class="[colSpan,colOffset]" :style="colGutter">
    <slot/>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    date() {
      return {
        gutter: 0
      }
    },
    computed: {
      colSpan() {
        if (this.span) {
          return `col-${this.span}`
        }
      },
      colOffset() {
        if (this.offset) {
          return `offset-${this.offset}`
        }
      },
      colGutter() {
          return {
            paddingLeft: this.gutter / 2 + 'px',
            paddingRight: this.gutter / 2 + 'px'
          }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    width: 50%;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
</style>