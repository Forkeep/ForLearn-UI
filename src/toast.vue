<template>
  <div class="toast">
    <slot v-if="!enableHTML"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="clickClose">{{closeButton.text}}</span>
  </div>
</template>

<script lang="js">
  export default {
    name: 'FLToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 5
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭',
            callBack: undefined
          }
        }
      },
      enableHTML: {
        type: Boolean,
        default: false
      }
    },
    created() {
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      clickClose() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callBack === 'function') {
          this.closeButton.callBack()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
$toast-bg : rgba(0,0,0,.75);
$toast-shadow : 0 0 3px 0 rgba(0,0,0,0.5);
.toast{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  font-size: 14px;
  line-height: 1.8;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $toast-bg;
  box-shadow: $toast-shadow;
  border-radius: 4px;
  padding: 0 16px;
  color: white;

  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin: 0 16px;
  }

  .close {
    cursor: pointer;
    flex-shrink: 0;
  }
}

</style>