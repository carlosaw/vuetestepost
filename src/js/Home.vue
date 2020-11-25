<template>
	<div>
		<div v-for="post in posts" class="post_item">
		<h5>#{{ post.id }} - {{ post.title }}</h5>
		<p>{{ post.body }}</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			posts: []
		}
	},
  mounted() {
	  axios
	  	.get('https://jsonplaceholder.typicode.com/posts')
	  	.then(json => {
		  	this.posts = json.data
	  	})
  }
}
</script>

<style>
	.post_item {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px;
		max-width: 400px;
	}	
	h1 {
  		color: #ff0000;
	}
</style>