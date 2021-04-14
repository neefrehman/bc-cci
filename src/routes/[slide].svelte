<script context="module">
	const SLIDE_COUNT = 6;
	export async function load({ page }) {
		const slide = parseInt(page.params.slide);
		return slide <= SLIDE_COUNT
			? { props: { slide } }
			: { status: 302, redirect: "/1" };
	}
</script>

<script>
	import { onMount } from 'svelte';
	import NextSlideLink from '../components/NextSlideLink.svelte';

	export let slide;
	let Slide;

	onMount(async () => {
		Slide = (await import(`../slides/${slide}.svelte`)).default;
	});

	const nextSlide = async () => {
		slide = slide < SLIDE_COUNT ? slide + 1 : 1;
		history.pushState({}, null, slide);
		Slide = (await import(`../slides/${slide}.svelte`)).default;
	}
</script>


<svelte:component this={Slide} />
<NextSlideLink onClick={nextSlide} />