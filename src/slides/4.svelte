<script>
	import Slide from '../components/Slide.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={0}>
	<div class="grid">
		<div style="background-color: red"><h4>WEB-BASED</h4></div>
		<div style="background-color: green"><h4>INTERACTIVE</h4></div>
		<div style="background-color: blue"><h4>GENERATIVE</h4></div>
	</div>

	<Notes>
		<p>To narrow it down a bit, the things that I mostly spend time on are:</p>
		<p>Building for the web — mostly frontend work, but increasinlgy I'm writing back-end code too.</p>
		<p>Working with interaction — I love designing and building elements that include interactivity and playfulness.</p>
		<p>Generative and algorithmic designs — I really enjoy writing code that can surprise you with its output.</p>
	</Notes>
</Slide>

<style>
	div.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		height: 100%;
	}

	div.grid > div {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}

	div.grid > div:nth-child(even) {
		font-family: var(--times);
		font-style: italic;
	}
</style>
