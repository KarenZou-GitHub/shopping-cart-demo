<template>
	<ul>
		<slot name="book"
			v-for="book in books"
			:book-name="book.name">
		</slot>
		<slot>
			<li>默认slot中的li</li>
		</slot>
	</ul>
</template>
<script>
	export default {
		props:{
			books: {
	    			type: Array,
	    			default: function(){
	    				return [];
	    			}
	    		}
		},
	    data(){
	      return{
	    		
	    	
	      }
	    }
	}
</script>
<!-- 这个props误打误撞放对了地方，记一下记一下 -->

