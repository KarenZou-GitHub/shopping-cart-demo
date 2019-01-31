<template>
  <div class="div">
    <div  class="dive">
      <span>例子1. v-model在多选下拉框中的应用</span>
      <select v-model="selected" multiple>
        <option>html</option>
        <option>js</option>
        <option>css</option>
      </select>
      <p>选择的项是：{{ selected }}</p>
    </div>
<!-- 以上，例一 -->    
    <div class="dive">
      <span>例子2. v-bind在复选框中的应用</span>
      <input 
        type="checkbox" 
        v-model="toggle"
        :true-value="value1"
        :false-value="value2">
      <label>复选框</label>
      <p>{{ toggle}}</p>
      <p>{{ value1 }}</p>
      <p>{{ value2 }}</p>
    </div>
<!-- 以上，例二 -->    
    <div class="dive">
      <span>例子3. v-model.lazy和组件注册、传值</span>
      <input type="text" v-model.lazy="parentMessage">
      <my-component :message="parentMessage"></my-component>
    </div>
<!-- 以上，例三 -->    
    <div class="dive">
      <span>例子4. 组件传值时，v-bind和非v-bind的区别</span>
      <span>这个只传字符串，没有使用v-bind，传的是字符串</span>
      <my-component-test-vbind message="[1,2,3]"></my-component-test-vbind>
      <span>这个是使用了v-bind,传递的是数组</span>
      <my-component-test-vbind :message="[1,2,3]"></my-component-test-vbind>
    </div>
<!-- 以上，例四 -->       
  </div>
</template>
<script>
  export default {
    data(){
      return{
        selected: ['html', 'js'],
        toggle:false,
        value1:'a',
        value2:'b',
        parentMessage:''
      }
    }
  }
</script>
<style>
  .div{
    width:500px;
    heigth:400px;
    margin-left:30px;
  }
  .div span{
    display:block;
  }
  .dive{    
    width:500px;
    height: 150px;
  }
</style>