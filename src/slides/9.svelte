<script>
	import Slide from '../components/Slide.svelte';
	import IFrame from '../components/IFrame.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={1}>
	<div class="flex">
		<IFrame style="width: 80%;" src="https://manyworlds.neef.co/?pixelation=1.33" />
	</div>

	<Notes>
		<p>
			the first project I want to share with you is this one, which I've called
			manyworlds. It's a study in signed distance functions and noise fields in
			WebGL, built as a procedural scene generator.
		</p>
		<p>
			Usually with the generative sketches i do they are quite quick experiences —
			that you might spend a minute or so in — and don't really work as standalone
			pieces, so i stick them on a site that acts as a bit of a sketchbook. but what
			led to me wanting to push this one a but further and publish it on its own was
			a strong sense of nostalgia while playing with these types of calculations.
		</p>
	</Notes>
</Slide>

<style>
	.flex {
		display: flex;
		height: 100%;
		flex-direction: row;
		justify-content: center;
	}
</style>
