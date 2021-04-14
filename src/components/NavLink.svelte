<script>
	export let onClick;
	export let next;
</script>

<!-- svelte-ignore a11y-missing-content a11y-missing-attribute -->
<a style={`${next ? 'right' : 'left'}: 0`} sveltekit:prefetch on:click={onClick}>
	<p style={`transform: rotate(${90 * (next ? 1 : -1)}deg);`}>
		{next ? 'NEXT' : 'PREV'}
	</p>
</a>

<style>
	a,
	a:visited {
		cursor: pointer;
		position: fixed;
		top: 0;
		right: 0;
		width: max(20%, 220px);
		height: 100%;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-decoration: none;
	}

	a > p {
		display: none;
		transform: rotate(90deg);
		font-size: 20vh;
		color: var(--offBlack);
	}

	a:hover {
		background-color: var(--offWhite);
		opacity: 0.05;
	}

	a:hover > p {
		display: block;
	}
</style>
