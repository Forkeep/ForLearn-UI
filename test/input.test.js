const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  });

  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });
    it('should 接收value', function () {
      vm = new Constructor({
        propsData: {
          value: 'value'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('value')
    });

    it('should 接收disabled', function () {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.eq(true)
    });

    it('should 接收readonly', function () {
      vm = new Constructor({
        propsData: {
          readonly: true
        },
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.eq(true)
    });

    it('should 接收error', function () {
      vm = new Constructor({
        propsData: {
          error: '错误'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error');
      const errorMessage = vm.$el.querySelector('span');
      expect(errorMessage.innerText).to.eq('错误')
    });
  });

  describe('event', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });
    it('should 支持change/input/focus/blur事件', function () {
      ['change','input','focus','blur'].forEach((eventName)=>{
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName,callback);
        let event = new Event(eventName);
        let inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(event)
      })
    });
  })
});