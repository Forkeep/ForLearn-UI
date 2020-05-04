<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script lang="js">
  export default {
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      },
      loading:{
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
  .g-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-bg);display: inline-flex;align-items: center;justify-content: center;vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .2em;
    }

    > .content {
      order: 2;
    }

    &.icon-right {

      > .icon {
        order: 2;
        margin-left: .2em;
        margin-right: 0;
      }

      > .content {
        order: 1;
      }
    }
    .loading{
      animation: spin 1s infinite linear;
    }
  }


</style>