<template>
	<div>
        <h4>Página do Usuário</h4>
        <span>ID do usuário: {{ $route.params.id }}</span>

        <hr/>

        <router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
		
		}
	}
}
</script>

<style>
	span {
		color: #0000FF;
	}
</style>