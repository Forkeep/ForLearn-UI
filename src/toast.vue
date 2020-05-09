<template>
  <div class="toast">
    <slot></slot>
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
      }
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
}

</style>