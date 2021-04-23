<script>
	import Slide from '../components/Slide.svelte';
	import Notes from '../components/Notes.svelte';
	import Image from '../components/Image.svelte';
</script>

<Slide padding={1} gap={0}>
	<Image src="images/27.png" />

	<Notes color="blue">
		<p>
			This is an illustration by taeyoon choi, who founded the school for poetic
			computation in new york. and i really like it, especially when thinking about
			consensus, becasue you should really think about the computer as an entity with
			thoughts and opinions when writing code.
		</p>
		<p>
			your device is capabale of doing things that you cant — like random number
			generation — you just need to coax the right output from it with the right
			commands and inspiration.
		</p>
	</Notes>
</Slide>
