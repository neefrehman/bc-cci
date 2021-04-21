<script>
	import Slide from '../components/Slide.svelte';
	import IFrame from '../components/IFrame.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<!-- TODO: FIX IFRAME -->

<Slide padding={1}>
	<IFrame src="https://www.ustwo.com/" />

	<Notes>
		<p>This is where I work now.</p>
		<p>
			ustwo is a digital product studio, meaning that we research, design, and build
			products for clients. You can see the types of things we work on here, but I'll
			go into some more detail a bit later too.
		</p>
	</Notes>
</Slide>
