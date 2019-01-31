<template>
  <div class="div">
    
    <div class="dive">
      <h1>例子一. 子->父的$emit $on方法</h1>
      <hr/>
      <p>总数：{{ total }}</p>
      <myComponentTestEmit 
        @increase="handleGetTotal"
        @reduce="handleGetTotal"
      ></myComponentTestEmit>
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
      <learn-module-no3-inline-template inline-template>
        <div>
          <h3>在父组件定义子组件的模板</h3>
          <!-- 目前上面这一句不显示,好奇怪啊 -->
          <p>{{ message }}</p>
          <p>{{  msg }}</p>
        </div>
      </learn-module-no3-inline-template>
    </div>
<!-- 以上，例三 --> 

  </div>
</template>

<script>
  import myComponentTestEmit from './my-component-testemit'
  import Vue from 'vue'
  export default {
    data(){
      return{
        total:0,
        sum:100,
        message: '在父组件data中声明的数据11'
      }
    },
    methods:{
      handleGetTotal:function(total){
        this.total = total;
      },
      handleReduce:function(){
        this.sum--;
      }
    },
    components:{
      myComponentTestEmit
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

</style>
