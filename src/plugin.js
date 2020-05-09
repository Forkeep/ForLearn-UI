import Toast from './toast'

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor(toastOptions && {
        propsData: {
          closeButton: toastOptions.closeButton,
          enableHTML: toastOptions.enableHTML
        }
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el)
    }
  }
}