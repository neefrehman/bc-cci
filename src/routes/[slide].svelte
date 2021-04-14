<script context="module">
	const SLIDE_COUNT = 6;
	export async function load({ page }) {
		const startingSlide = parseInt(page.params.slide);
		return startingSlide <= SLIDE_COUNT
			? { props: { startingSlide } }
			: { status: 302, redirect: '/1' };
	}
</script>

<script>
	import { writable } from 'svelte/store';
	import NextSlideLink from '../components/NextSlideLink.svelte';

	export let startingSlide;
	const currentSlide = writable(startingSlide);
	let Slide;

	currentSlide.subscribe(async slide => {
		Slide = (await import(`../slides/${slide}.svelte`)).default;
		window.history.pushState({}, null, slide);
	});

	const nextSlide = () => {
		currentSlide.update(prev => prev < SLIDE_COUNT ? prev + 1 : 1)
	};
</script>

<svelte:component this={Slide} />
<NextSlideLink onClick={nextSlide} />
