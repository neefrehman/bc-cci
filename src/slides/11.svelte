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
			because of this its quite an iconic look, at least to me, and so led me to
			pushing the visuals of the output this way.
		</p>

		<p>
			what i hope might be interesting to you here is the fact that inspiration can
			come after implementation. you dont need to wait to have all your references
			ready before you start experimenting, they can come to you at any point. I used
			to worry about finishing my moodboards and references before wiriting any code,
			but recently i've realsied that if you do that you wont get very far.
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
