<template>
  <div class="col" :class="[colSpan,colOffset,colEquipment]" :style="colGutter">
    <slot/>
  </div>
</template>

<script lang="js">
  let validator = (value) => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach((key) => {
      if (!['span', 'offset'].indexOf(key)>=0) {
        valid = false
      }
    });
    return valid
  };
  export default {
    name: 'FLCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      ipad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator},
    },
    data() {
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
      colEquipment() {
        let {ipad, narrowPc, pc, widePc} = this;
        return [
          ...(ipad ? [`col-ipad-${ipad.span}`] : []),
          ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
          ...(pc ? [`col-pc-${pc.span}`] : []),
          ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
        ]
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
    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) { // 770
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>