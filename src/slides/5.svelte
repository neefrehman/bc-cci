<script>
	import Slide from '../components/Slide.svelte';
	import IFrame from '../components/IFrame.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<!-- TODO: FIX IFRAME -->

<Slide padding={1}>
	<IFrame src="https://www.ustwo.com/" />

	<Notes>
		<p>This is where I work.</p>
	</Notes>
</Slide>
