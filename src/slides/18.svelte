<script>
	import Slide from '../components/Slide.svelte';
	import IFrame from '../components/IFrame.svelte';
	import Notes from '../components/Notes.svelte';
</script>

<Slide padding={1}>
	<IFrame src="https://millzbot.neef.co" />

	<Notes>
		<p>
			the second experiment I'd like to share with you quickly is millzbot. A bot
			that i made last year with GPT2, a text generation model created by openAI. I
			was quite inspired after seeing a project by Nicole He, a creative technologist
			from new york, where she uses GPT2 to create questions for an interview with
			billie eilish.
		</p>
		<p>
			One of the most interesting writers i know is Mills, one of the founders of
			ustwo. you can find him on twitter saying some interestingly incomprehensible
			stuff, as Alex will attest to. As a result, he's a perfect target for some AI
			emulation.
		</p>
		<p>
			I spent a but of time learning GPT 2 with some help from documentation online,
			and downloaded thousands of mills' tweets to feed the model with, in order for
			it to learn his writing patterns. Google has this great tool called CoLab,
			which lets you train and run machine learning models on thier servers for free,
			and i was quite keen to give it a try. With a bit of triel and error I was able
			to get millzbot up and running, and spent a bit of time writing a simple server
			to stick it in the cloud, now it tweets a few times a day, and can also talk to
			anyone at ustwo in our slack workspace.
		</p>
		<p>
			It wasn't a particularly high-fidelity project, but I think it's worth
			highlighting because it was the most fun project I've done in a while, and it
			brought a smile to quite a lot of people's faces, especially my colleagues.
		</p>
		<p>
			if there's one thing i think is worth taking away it's that you should always
			try to prioritise fun as much as possible. especially on personal projects, as
			there can often be a lot of pressure to push yourself into new areas, which
			quickly becomes a chore if you're not enjoying it. I can't tell you how many
			times i've hated what i'm doing whenever I'm learning a new tool or framework.
			Finding a vehicle to help you do that in an enjoyable way will help a lot.
		</p>
	</Notes>
</Slide>
