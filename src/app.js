import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import plugin from "./plugin";
import Tabs from './tabs';
import TabsItem from './tabs-item';
import TabsHead from './tabs-head';
import TabsBody from './tabs-body';
import TabsPane from './tabs-pane';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-pane',TabsPane);

Vue.use(plugin);

new Vue({
    el: '#app',
    data: {
      loading1: false,
      loading2: false,
      loading3: false,
      value1: '0'
    },
    created() {
      // this.$toast('很多文字很多文', {
      //   closeButton: {
      //     text: '我知道了',
      //     callBack: () => {console.log('用户说他知道了')}
      //   }
      // })
    },
    methods: {
      showToast(){
        this.$toast('测试代码css三个位置的动画',{
          closeButton: {
            text: '关闭',
            callBack(){
              console.log('aaaaaaaok')
            }
          },
          enableHTML :true,
          autoClose:false,
          position: 'middle'
        })
      },
      showToast2(){
        this.$toast('测试代码css三个位置的动画',{
          closeButton: {
            text: '关闭',
            callBack(){
              console.log('aaaaaaaok')
            }
          },
          enableHTML :true,
          autoClose:false,
          position: 'bottom'
        })
      },
      showToast3(){
        this.$toast('<p><a href="http://qq.com">111111111</a></p>',{
          closeButton: {
            text: '关闭',
            callBack(){
              console.log('aaaaaaaok')
            }
          },
          enableHTML :true,
          autoClose:2,
          position: 'top'
        })
      },
    }

  }
);
