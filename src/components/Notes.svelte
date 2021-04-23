<script>
	export let open = false;
	export let color = "white";
</script>

<div class="wrapper" style={`transform: translateY(${open ? "1em" : "100%"});`}>
	<p class="toggle" on:click={() => (open = !open)}>{open ? 'CLOSE' : 'NOTES'}</p>
	{#if open}
		<div class="notes" style={`color: ${color}`}>
			<slot />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		font-family: var(--times);
		position: fixed;
		left: 0;
		bottom: 1em;
		width: 100%;
		height: 300px;
		overflow-y: auto;
		transition: transform 200ms;
		display: flex;
		flex-direction: column;
		align-items: center;
		scrollbar-width: none;
		-ms-overflow-style: none;


		display: none;
	}
	.wrapper::-webkit-scrollbar {
		width: 0px;
	}

	.toggle {
		cursor: pointer;
	}

	.toggle:hover {
		color: red;
	}

	.notes {
		font-style: italic;
		text-align: center;
		word-wrap: break-word;
		width: 80%;
		font-size: 0.783em;
	}

	.notes > :global(p) {
		margin-bottom: 0.5em;
	}
</style>
