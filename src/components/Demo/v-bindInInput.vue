<template>
  <div class="div">
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
</template>
<script>
  export default {
    data(){
      return{
        toggle:false,
        value1:'a',
        value2:'b'
      }
    }
  }
</script>
<style>
  .div{    
    width:100px;
    height: 50px;
  }
</style>