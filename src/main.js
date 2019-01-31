// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
Vue.use(VueRouter)


Vue.use(VueResource);
//1.¶¨Òå×é¼þ£¬ÕâÀïÊ¹ÓÃ´ÓÆäËûÎÄ¼þimport½øÀ´


import Nothing from './components/common/Nothing'
import addressp from './components/addressp/addressp'
import vmodelInSelect from './components/Demo/v-modelInSelect'
/*import shoppingCart from './components/shoppingCart/shoppingCart'*/
import testModule from './components/Demo/TestModule'
import testSlot from './components/Demo/TestSlot'


Vue.component('my-component',{
    props: ['message'],
    template: '<div>{{ message }}</div>'
})
Vue.component('my-component-test-vbind',{
    props: ['message'],
    template: '<div>{{ message }} 长度为：{{ message.length }}</div>'
})
Vue.component('my-component-testvmodel',{
    props:['value'],
    template:'<input :value="value" @input="updateValue">',
    methods:{
      updateValue: function(event){
          this.$emit('input', event.target.value);
      }
    }    
})
//简单组件可以使用这种方式，在这里注册的，注册了之后就可以使用了
//上面的import可能是往这个页面页面注册的

//2.¶¨ÒåÂ·ÓÉ
const routes = [
  { path: '/addressp', component: addressp },
/*  { path: '/shoppingCart', component: shoppingCart },*/
  { path: '/vmodelInSelect', component: vmodelInSelect },
  { path: '/testModule', component: testModule},
  { path: '/testSlot', component: testSlot}
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

const app = new Vue({
      router,
      data:{
      },
      render: h => h(App)
}).$mount('#app')
