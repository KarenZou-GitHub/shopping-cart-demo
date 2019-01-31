<template>
  <div class="div">
    <div class="dive">
      <h1>例子一. 学习slot</h1>
      <span>目的：学习子组件中带slot，父组件中带slot name；子组件默认slot这两种情况下如何传值的。通过$slot可以访问具名的slot</span>
      <hr/>
      <learnSlotNo1NameAndDefault>
<!--         <p>正文内容，没有slot</p> -->
<!-- 上面这一句是为了证明，在子组件之中是元素那么排列的，在父组件调用的时候，也会那么排列，上面这句会自动的跑到下面默认的slot位置去的 -->
        <h2 slot="header">标题，slot=header </h2>
        <p>正文内容，没有slot</p>
        <p>更多正文内容,也没有slot</p>
        <div slot="footer">
          底部信息，slot=footer 
        </div>
      </learnSlotNo1NameAndDefault>
    </div>
<!-- 以上，例一--> 

    <div class="dive">
      <h1>例子二. 作用域插槽</h1>
      <span>过程：父组件通过template的props临时变量获取子组件的msg</span>
      <hr/>
      <learnSlotNo2ChaCao>
        <template scope="props">
          <p>来自父组件的内容，有template scope=props内容</p>
          <p>{{ props.msg }}</p>
        </template>
      </learnSlotNo2ChaCao>
    </div>
<!-- 以上，例二--> 

    <div class="dive">
      <h1>例子三. 插槽中最有代表性的列表组件</h1>
      <span>过程：父组件用v-bind绑定books，通过slotname，用props传递books，子组件接收到之后放入自己的books里面</span>
      <hr/>
      <p>----下面是父组件传的books----</p>
      <learnSlotNo3ChaCaoInList :books="books">
        <template slot="book" scope="props">
          <li>{{ props.bookName }}</li>
        </template>
      </learnSlotNo3ChaCaoInList>
      <p>----下面是父组件什么都不传，默认的情况----</p>
      <learnSlotNo3ChaCaoInList >
        <!-- <template slot="book" scope="props"> -->
        <template slot="book">
          <!-- <li>{{ props.bookName }}</li> -->
        </template>
      </learnSlotNo3ChaCaoInList>
      <p>----下面是父组件不传值，但是写了一个默认的li----</p>
      <learnSlotNo3ChaCaoInList >
        <template slot="book">
          <!-- <li>{{ props.bookName }}</li> -->
        </template>
        <li>父组件默认的li，（会替换掉子组件slot的li）</li>
      </learnSlotNo3ChaCaoInList>
      <p>可见props不是一个必要的参数，如果不传值，可以直接删去</p>
    </div>
<!-- 以上，例三--> 
  </div>
</template>
<script>
import learnSlotNo2ChaCao from '../Slot/learn-slot-no2-chacao'
import learnSlotNo1NameAndDefault from '../Slot/learn-slot-no1-nameanddefault'
import learnSlotNo3ChaCaoInList from '../Slot/learn-slot-no3-chacaoinlist'
  export default {
    data(){
      return{
        books:[
          {name: "Vue.js实战"},
          {name: "js实战"},
          {name: "js高级设计"}
        ]
      }
    },
    methods:{

    },
    components:{
      learnSlotNo2ChaCao,
      learnSlotNo1NameAndDefault,
      learnSlotNo3ChaCaoInList
    }
  }
</script>
<style>
  .div{
    width:1000px;
    heigth:100%;
    margin-left:30px;
  }
  .dive{    
    width:1000px;
    height: auto;
    margin-bottom: 30px;  
  }
  .dive span{
    display:block;
  }

</style>