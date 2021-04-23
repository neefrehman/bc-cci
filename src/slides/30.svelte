<script>
	import Slide from '../components/Slide.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={4} gap={0}>
	<h1>DOCUMENTATION</h1>
	<h4>as consensus</h4>

	<Notes>
		<p>
			the first thing to think about in this respect is documentation. writing is one
			of the most important skills for developers, and when working in a team you'll
			probably spend more time on calls and writing words for other people than you
			will be writing code.
		</p>
		<p>An example would be the millzbot repository on github.</p>
		<p>
			But also things like code reviews, pull request messages, technical diagrams
			and inline comments are things you should expect to do a lot of when
			collaborating.
		</p>
	</Notes>
</Slide>

<style>
	h4 {
		font-family: var(--times);
		font-style: italic;
	}
</style>
