<script>
	import Slide from '../components/Slide.svelte';
	import IFrame from '../components/IFrame.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={3}>
	<IFrame src="https://generative.neef.co/110121" />

	<Notes>
		<p>
			Quite quickly you can move from something quite natural but still a bit dull,
			to something different and a more unexpected, by allowing multiuple random
			number generators to interact with one another.
		</p>
		<p>
			I think in the final manyworlds project i used a simplex noise field in
			combination with some custom fields made with trig functions (like sin and
			cos), as well as some other random number generators based off statistical
			distributions (gaussian and beta) to tweak other aspects of the scene. These
			can sound quite daunting but luckily there's lots of documentation and code
			examples online.
		</p>
		<p>
			So for making computational art, I would really recommend you spend time
			experimenting with noise and randomness, and really try to understand how they
			work and the differences in their characteristics.
		</p>
	</Notes>
</Slide>
