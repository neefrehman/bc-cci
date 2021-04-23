<script>
	import Slide from '../components/Slide.svelte';
	import IFrame from '../components/IFrame.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={1}>
	<IFrame
		src="http://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/"
	/>

	<Notes>
		<p>
			In terms of the process of how the site is built, it's a mix of experimenting
			with signed distance functions and ray marching. This is a way to model and
			then rendeer 3d objects on a 2d plane (the screen). That's how the "looming"
			shapes are created. Jamie wong has a great article on the topic here.
		</p>
	</Notes>
</Slide>
