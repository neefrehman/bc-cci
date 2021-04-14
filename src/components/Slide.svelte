<script>
	export let padding = 2;
	export let gap = 2;
</script>

<main style="padding: {padding}em; gap: {gap}em">
	<slot />
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
