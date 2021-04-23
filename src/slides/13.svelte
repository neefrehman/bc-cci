<script>
	import Slide from '../components/Slide.svelte';
	import IFrame from '../components/IFrame.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={1}>
	<IFrame src="https://generative.neef.co/130619" />

	<Notes>
		<p>
			the second part is the noise fields that add turbulence and colour to the rest
			of the scene, elevating the shape from a clean model to something a bit more
			scifi. Noise fields are a form of random number generator.
		</p>
		<p>
			When practicing generative or computational art, i think its really important
			to take advantage of the things that computers are great at, and that we are
			not. Random number generation is one of those things, and building intuition
			about the different kinds and how to use them opens up a lot of avenues to you.
		</p>
		<p>
			Some of the most iconic examples are perlin and simplex noise — which you all
			likely have used already — both created by Ken Perlin of NYU, and extensively
			used in all sorts of computational design, VFX, and architectural use cases. I
			recently used them to mock some data visualisations on a project at ustwo.
		</p>
		<p>
			These kinds of noise fields allow you to create quite natural looking motion —
			like the one you see now, which was made in processing. Daniel Schiffman has
			lots of resources and examples on this topic, under the nature of code
			umbrella.
		</p>
	</Notes>
</Slide>
