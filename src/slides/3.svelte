<script>
	import Slide from '../components/Slide.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={0}>
	<iframe
		frameborder="0"
		title="manyworlds"
		src="https://manyworlds.neef.co/?no-ui&world=b3841c1c281ce3781cfd3378&pixelation=1.25"
	/>

	<div>
		<h2 class="creative">CREATIVE</h2>
		<h2 class="technologist">TECHNOLOGIST</h2>
	</div>

	<Notes>
		<p>These days this is usually what I call myself.</p>
		<p>It's about the least specific term possible, but right now I feel it suits the kind of stuff I do quite well</p>
	</Notes>
</Slide>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
	}

	iframe {
		position: fixed;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		z-index: -1;
	}

	.creative {
		font-family: var(--times);
		font-style: italic;
	}
</style>
