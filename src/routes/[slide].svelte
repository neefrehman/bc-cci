<script context="module">
	export const ssr = false;
</script>

<script>
	import { writable } from 'svelte/store';
	import NavLink from '../components/NavLink.svelte';

	const slidePath = parseInt(window.location.pathname.split('/')[1]);
	const SLIDE_COUNT = 35;

	const startingSlide = slidePath > SLIDE_COUNT ? 1 : slidePath;
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
