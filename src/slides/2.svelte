<script>
	import Slide from '../components/Slide.svelte';
</script>

<Slide gap={1}>
	<h2>1. Intro & journey</h2>
	<h2>2. Projects</h2>
	<h2>3. Thoughts on mixing practices</h2>
	<h2>4. Q+A</h2>
</Slide>

<style>
	h2:nth-child(even) {
		font-family: var(--times);
		font-style: italic;
	}
</style>