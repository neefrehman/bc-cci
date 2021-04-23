<script context="module">
	export const router = false;
	const SLIDE_COUNT = 35;
	export async function load({ page }) {
		const startingSlide = parseInt(page.params.slide);
		return startingSlide <= SLIDE_COUNT
			? { props: { startingSlide } }
			: { status: 302, redirect: '/1' };
	}
</script>

<script>
	import { writable } from 'svelte/store';
	import NavLink from '../components/NavLink.svelte';

	export let startingSlide;
	const currentSlide = writable(startingSlide);
	let SlideComponent;

	currentSlide.subscribe(async (slide) => {
		SlideComponent = (await import(`../slides/${slide}.svelte`)).default;
		window.history.pushState({}, null, slide);
	});

	const advanceSlide = () => {
		currentSlide.update((prev) => (prev < SLIDE_COUNT ? prev + 1 : 1));
	};

	const previousSlide = () => {
		currentSlide.update((prev) => (prev > 1 ? prev - 1 : SLIDE_COUNT));
	};
</script>

<NavLink next={false} onClick={previousSlide} />
<svelte:component this={SlideComponent} />
<NavLink next={true} onClick={advanceSlide} />
