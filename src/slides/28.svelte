<script>
	import Slide from '../components/Slide.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={4} gap={0}>
	<h1>CODE</h1>
	<h4>as consensus</h4>

	<Notes>
		<p>
			I think a good place to start is seeing the code you write as a form of
			consensus between you and your medium. it's a common framework through which
			you and the computer can understand one another.
		</p>
		<p>
			The code you write should be guided by known consensus where possible. If you
			need to build something complex or quickly, it's worth taking advantage of 3rd
			party code that can help your computer agree with your intent.
		</p>
		<p>
			One example is with building websites. to create something very custom and with
			a lot of creative independence, maybe you should bring the computer with you
			through coding things from scratch, building up consensus over time. But when
			you need to build something with commonly used patterns that might restrict you
			a bit more (in a good way), you should find libraries and frameworks that are
			tried and tested, to quickly get your computer up to speed and give it strong
			opinions on what's possible, which you can then take advantage of.
		</p>
		<p>
			I should also mention that not even all computers share the same framework, so
			you should be thinking about this in a multi-platform way, too. testing your
			code on different web browsers, operating systems, and hardware, will make it
			painfully clear that consensus with computers isn't a 1:1 relationship.
		</p>
	</Notes>
</Slide>

<style>
	h4 {
		font-family: var(--times);
		font-style: italic;
	}
</style>
