<script>
	import Slide from '../components/Slide.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={4} gap={0}>
	<h1>TOOLING</h1>
	<h4>as consensus</h4>

	<Notes>
		<p>
			tools are another thing that will help you and others get on the same page. In
			the same way that more opinionated code can help you cover more ground, shared
			tools can do the same for a collaborative team.
		</p>
		<p>
			code formatters can ensure everyone is working in the exact same code style,
			linters can spot problems with code quality using shared rules, and testing
			suites can give everyone confidence in their (asnd each other's) code. these
			tools are massively valuable, and while you might not need them all the time,
			it's good to build an understanding of when they can be valuable to you.
		</p>
	</Notes>
</Slide>

<style>
	h4 {
		font-family: var(--times);
		font-style: italic;
	}
</style>
