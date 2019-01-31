<template>
	<div>
		<button @click="handleIncrease">+1</button>
		<button @click="handleReduce">-1</button>
	</div>
</template>
<script>
	export default {
		/*name: 'hello',*/
	    data(){
	      return{
	        counter:0
	      }
	    },
	    methods:{
	    	handleIncrease:function(){
	    		this.counter++;
	    		this.$emit('increase',this.counter);
	    	},
	    	handleReduce:function(){
	    		this.counter--;
	    		this.$emit('reduce',this.counter);
	    	}
	    }
	}
</script>
<!-- 这里和testmodule是子父组件，在父组件中import，在component一下就可以了 -->

