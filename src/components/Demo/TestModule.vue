<template>
  <div class="div">
    
    <div class="dive">
      <h1>例子一. 子->父的$emit $on方法</h1>
      <hr/>
      <p>总数：{{ total }}</p>
      <my-component-test-emit 
        @increase="handleGetTotal"
        @reduce="handleGetTotal"
      ></my-component-test-emit >
<!-- 这个地方，把组件注册那里的emit函数改成特殊的this.$emit('input',this.counter),然后把这个组件的两个函数换成v-model="total"也可以实时获得total 。是个语法糖-->
    </div>
<!-- 以上，例一--> 


    <div class="dive">
      <h1>例子二. v-model实现父子组件双向绑定</h1>
      <hr/>
      <p>总数：{{ sum }}</p>
      <my-component-testvmodel
        v-model="sum"
      ></my-component-testvmodel>
      <button @click="handleReduce">-1</button>
    </div>
<!-- 以上，例二--> 

    <div class="dive">
      <h1>例子三. 高级组件之内联模板</h1>
      <span>组件的第三种注册方法</span>
      <hr/>
      <learn-module-no3-inline-template :message="message" inline-template>
        <div>
          <h3>在父组件定义子组件的模板</h3>
          <p>{{ message }}</p>
          <!-- 目前上面这一句不显示,好奇怪啊 -->
<!-- *******遗留问题！！！！！！！！！！！！！！！ -->
          <p>{{  msg }}</p>
        </div>
      </learn-module-no3-inline-template>
    </div>
<!-- 以上，例三 --> 

    <div class="dive">
      <h1>例子四. 高级组件之动态组件</h1>
      <span>component元素使用is特性来选择需要挂载的组件，在components里面构建组件</span>
      <hr/>
      <component :is="currentView"></component>
      <button @click="handleChangeView('A')">点击切换到组件A</button>
      <button @click="handleChangeView('B')">点击切换到组件B</button>
      <button @click="handleChangeView('C')">点击切换到组件C</button>
      <span>使用var构建组件</span>
      <component :is="currentView2"></component>
      <button @click="handleChangeView2('D')">点击切换到组件varcomD</button>
      <button @click="handleChangeView2('E')">点击切换到组件varcomE</button>
    </div>
<!-- 以上，例四--> 

  </div>
</template>

<script>
  import myComponentTestEmit from './my-component-testemit'
  import Vue from 'vue'

 var learnModuleNo3InlineTemplate={
    name: 'learn-module-no3-inline-template',
    data: function(){
      return {
        msg:'在子组件data中声明的数据123'
        //message: '在父组件data中声明的数据12'
      }
    }
  }

  var varcomD={
    template:'<div>本组件是使用var声明的comD</div>'
  }
  var varcomE={
    template:'<div>本组件是使用var声明的comE</div>'
  }

  export default {
    data(){
      return{
        total:0,
        sum:100,
        currentView: 'comD',
        currentView2: varcomD,
        message: '在父组件data中声明的数据1'
      }
    },
    props(){
      return {
         message: '在父组件data中声明的数据1'
      }
    },
    methods:{
      handleGetTotal:function(total){
        this.total = total;
      },
      handleReduce:function(){
        this.sum--;
      },
      handleChangeView: function(component){
        this.currentView='com'+ component
      },
      handleChangeView2: function(component){
        switch(component) {
          case 'D': currentView2=varcomD;break;
          case "E": currentVIew2=varcomE;break;
          default:break;
        } 

      }
    },
    components:{
      "my-component-test-emit ":myComponentTestEmit,
      "learn-module-no3-inline-template":learnModuleNo3InlineTemplate,
      comA:{
        template:'<div>本组件是comA</div>'
      },
      comB:{
        template:'<div>本组件是comB</div>'
      },
      comC:{
        template:'<div>本组件是comC</div>'
      },
      //例子四动态组件所需的组件配置

    }
  }
  Vue.component('learn-module-no3-inline-template',{
    data: function(){
      return {
        msg:'在子组件data中声明的数据'
        //message: '在父组件data中声明的数据12'
      }
    }
  })


 
</script>
<style>
  .div{
    width:500px;
    heigth:400px;
    margin-left:30px;
  }
  .dive{    
    width:500px;
    height: 150px;
  }
  .dive span{
    display:block;
  }
  .dive button{
    background: #FFEC8B;
    border: 1px solid #FFB90F;
  }

</style>
