<template>
	<div class="container">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<div clas="main">
			<slot></slot>
		</div>
<!-- 		如果子组件没有默认的slot，那父组件的东西就会被丢弃 -->
		<div class="footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		/*name: 'hello',*/
	    data(){
	      return{
	        
	      }
	    }
	}
</script>