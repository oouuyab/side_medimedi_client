<script>
	import Router from 'svelte-spa-router'
	import routes from './routes';
</script>

<main>
	<Router {routes} />
</main>

<style lang='scss'>
	main {
		height: 100vh;
	}
</style>
