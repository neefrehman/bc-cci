## 3

These days this is usually what I call myself.

It's about the least specific term possible, but right now I feel it suits the
kind of stuff I do quite well

## 4

To narrow it down a bit, the things that I mostly spend time on are:

- Building for the web — mostly frontend work, but increasinlgy I'm writing back-end code too.
- Working with interaction — I love designing and building elements that include interactivity and playfulness.
- Generative and algorithmic designs — I really enjoy writing code that can surprise you with its output.

## 5

This is where I work now, as a web developer

ustwo is a digital product studio, meaning that we research, design, and build
products for clients. You can see the types of things we work on here, but I'll
go into some more detail a bit later too.

## 6

But I arrived at my role as a technologist in quite a roundabout way.

And this is one of the reasons Alex wanted me to speak to you all, as you're
also mixing multiple practices and skillsets.

I started off in the sciences, moving to London to study Physics at university.
Following that I worked briefy as a data-scientist for a DNA sequencing
company. Not work I truly enjoyed, but luckily through data science I found an
enjoyment for design and interactivity through data visualisation.

After that job I wokred for a co-working space for a little while, doing
general operations work and some project management. Again, not work that I
enjoyed, but it gave me a lot of space to further pursue my interest in design.

After that job I wokred for a co-working space for a little while, doing
general operations work and some project management. Again, not work that I
enjoyed, but it gave me a lot of space to further pursue my interest in design.

So by now you can tell that I've got a lot of career baggage. Something that
I'll dive into more later.

Just over four years ago I got in touch with ustwo, and spoke to Mills (one of
the founders). This was at a time where ustwo was launching their "Adventure"
arm, where they invested in new creative ideas, and ran a community workspace.

## 7

One thing led to another and after a little while I joined the team. Initially
as a bit of a hybrid, some entry-level design work and some venture generalist
stuff. Although it quickly became that second part that required most of my
time, which I didn't mind, as I actually enjoyed it quite a lot.

It was quite a crash course in business and culture. Working to find, invest
in, and support companies has a lot of components, from financial modelling to
people skills. I got exposed to a lot of creativity in that role, which is
where Alex and I met. And I also got to still do design work, and even start
learning web development. This site is probably my first "end-to-end" project.

Over the three years in Adventure those various skills grew quite a lot,
especially web development. I had contributed bits and pieces to projects in
the studio side of ustwo, so when Adventure was disbanded last year I moved
over there full time, and now work in the tech team on client projects.

## 8

I'll run through a few projects of mine now, and we'll also go through some of
ustwo's work in more detail.

It's also worth mentioning that my personal projects are just that. They are
things that I've found interesting or fun to do, but not client projects that
I've been asked to work on. As a result they are quite small, but hopefully
some of the thinking behind them and process will be interesting.

## 9

the first project I want to share with you is this one, which I've called
manyworlds. It's a study in signed distance functions and noise fields in
WebGL, built as a procedural scene generator.

Usually with the generative sketches i do they are quite quick experiences —
that you might spend a minute or so in — and don't really work as standalone
pieces, so i stick them on a site that acts as a bit of a sketchbook. but what
led to me wanting to push this one a but further and publish it on its own was
a strong sense of nostalgia while playing with these types of calculations.

## 10

i'm a huge science fiction fan, ever since i was given some of my dads old
isaac asimov books. Its part of the reason I wanted to study physics. Something
about the sense of escapism and wonder has always stuck with me.

But science-fiction books are infamously quite unoriginal in their cover art.
there's one prevailing aesthetic — looming shapes in a dark yet colourful scene
— that very few books deviate from, especially older ones.

## 11

<p>
because of this its quite an iconic look, at least to me, and so led me to
pushing the visuals of the output this way.

what i hope might be interesting to you here is the fact that inspiration can
come after implementation. you dont need to wait to have all your references
ready before you start experimenting, they can come to you at any point. I used
to worry about finishing my moodboards and references before wiriting any code,
but recently i've realsied that if you do that you wont get very far.

## 12

In terms of the process of how the site is built, it's a mix of experimenting
with signed distance functions and ray marching. This is a way to model and
then rendeer 3d objects on a 2d plane (the screen). That's how the "looming"
shapes are created. Jamie wong has a great article on the topic here.

## 13

the second part is the noise fields that add turbulence and colour to the rest
of the scene, elevating the shape from a clean model to something a bit more
scifi. Noise fields are a form of random number generator.

When practicing generative or computational art, i think its really important
to take advantage of the things that computers are great at, and that we are
not. Random number generation is one of those things, and building intuition
about the different kinds and how to use them opens up a lot of avenues to you.

Some of the most iconic examples are perlin and simplex noise — which you all
likely have used already — both created by Ken Perlin of NYU, and extensively
used in all sorts of computational design, VFX, and architectural use cases. I
recently used them to mock some data visualisations on a project at ustwo.

These kinds of noise fields allow you to create quite natural looking motion —
like the one you see now, which was made in processing. Daniel Schiffman has
lots of resources and examples on this topic, under the nature of code
umbrella.

## 14

But as well as moving objects around in a natural way, you can use them to
create natural forms by modelling their intensity.

## 15

Or even combine movement and intensity to create somehting new, by stacking
noise fields ontop of one another.

## 16

And adding a third dimension to that stacking opens up some even more
interesting ways for you to play with time and interactivity.

## 17

Quite quickly you can move from something quite natural but still a bit dull,
to something different and a more unexpected, by allowing multiuple random
number generators to interact with one another.

I think in the final manyworlds project i used a simplex noise field in
combination with some custom fields made with trig functions (like sin and
cos), as well as some other random number generators based off statistical
distributions (gaussian and beta) to tweak other aspects of the scene. These
can sound quite daunting but luckily there's lots of documentation and code
examples online.

So for making computational art, I would really recommend you spend time
experimenting with noise and randomness, and really try to understand how they
work and the differences in their characteristics.

## 18

the second experiment I'd like to share with you quickly is millzbot. A bot
that i made last year with GPT2, a text generation model created by openAI. I
was quite inspired after seeing a project by Nicole He, a creative technologist
from new york, where she uses GPT2 to create questions for an interview with
billie eilish.

One of the most interesting writers i know is Mills, one of the founders of
ustwo. you can find him on twitter saying some interestingly incomprehensible
stuff, as Alex will attest to. As a result, he's a perfect target for some AI
emulation.

I spent a but of time learning GPT 2 with some help from documentation online,
and downloaded thousands of mills' tweets to feed the model with, in order for
it to learn his writing patterns. Google has this great tool called CoLab,
which lets you train and run machine learning models on thier servers for free,
and i was quite keen to give it a try. With a bit of triel and error I was able
to get millzbot up and running, and spent a bit of time writing a simple server
to stick it in the cloud, now it tweets a few times a day, and can also talk to
anyone at ustwo in our slack workspace.

It wasn't a particularly high-fidelity project, but I think it's worth
highlighting because it was the most fun project I've done in a while, and it
brought a smile to quite a lot of people's faces, especially my colleagues.

if there's one thing i think is worth taking away it's that you should always
try to prioritise fun as much as possible. especially on personal projects, as
there can often be a lot of pressure to push yourself into new areas, which
quickly becomes a chore if you're not enjoying it. I can't tell you how many
times i've hated what i'm doing whenever I'm learning a new tool or framework.
Finding a vehicle to help you do that in an enjoyable way will help a lot.

## 19

So I'm going to move onto some other slides now to talk about some ustwo
projects, as a lot of the work shouldn't be shared with these ones.

Only one of these projects is one I worked on, but I felt it's better to give
you a broader view of the kinds of things we do.

## 20

And now I have a couple of quick thoughts for you all on building a
"multi-disciplinary" practice. Hopefully they'll be useful, or at least
interesting.

## 21

The first is this talk's namesake.

## 22

Earlier I showed you this diagram about my career path so far.

Quite simple to understand, but I think these days, and especially for
multi-discipline practitioners, thinking about your skillset as a linear
progression can do you more harm than good.

It's very easy to look at your journey and say (in my case) "i've moved from a
scientific practice to a design practice to a coding practice".

## 23

But in reality your career looks a lot more like this: multiple facets and
inspirations and experiences, that still feed into you now, and relate to one
another in ways that only you can see. As well as my degree and the jobs I've
had since, my time working in customer service, my love of film, photography
work, and all my other baggage, shape my work.

Over your career you're not moving from one discreet practice to the next, and
you're not even merging different practices into one. What you're actually
cultivating is a "you" practice, that incorporates everything you've done so
far. It grows with time, and the areas within it that you focus on will change,
but they'll always be there. It's quile literally a collection of all your
baggage.

## 24

I think especially important as a reminder, because many people will only want
to see this part of you and your practice, as it's easier for them to grasp and
see how you can fit into their model of value exchange. You'll frequently have
to consider simplifying yourself down.

Doing so might be valuable to you also, at times, depending on your focus and
who you need to sell your skills to. But one thing that I've learned in my time
trying to be "multi-discipline", is that whenever simplification opens a door
for you it also puts you in a box. This is something I still deal with a lot,
especially now I'm a software developer full-time.

It's not something you need to consider all the time, but I really encourage
reminding yourself of your baggage in a broad sense, and your "you" practice.
It can be helpful tool to enable more fluid and diverse problem solving, as
well as critical thinking about what parts of your practice are needed in the
moment.

## 25

The second thought I have for you is one that is more tightly coupled to
building a software development mindset, which is the idea of consensus. some
of this might come from my background in science, where building consensus is
the main goal of your work.

## 26

From a "pure" or more traditional artistic practice, the idea of building
consensus into the work doesn't come top of mind. An artist doesn't necessarily
have to reach an agreement with their canvas or paintbrush, though that might
be an interesting provocation

adding computation to your artistic practice, and software development more
broadly, requires you think about consensus in quite a multi-layered way,
starting with the medium, which is the computer.

adding computation to your artistic practice, and software development more
broadly, requires you think about consensus in quite a multi-layered way,
starting with the medium, which is the computer.

## 27

This is an illustration by taeyoon choi, who founded the school for poetic
computation in new york. and i really like it, especially when thinking about
consensus, becasue you should really think about the computer as an entity with
thoughts and opinions when writing code.

your device is capabale of doing things that you cant — like random number
generation — you just need to coax the right output from it with the right
commands and inspiration.

## 28

I think a good place to start is seeing the code you write as a form of
consensus between you and your medium. it's a common framework through which
you and the computer can understand one another.

The code you write should be guided by known consensus where possible. If you
need to build something complex or quickly, it's worth taking advantage of 3rd
party code that can help your computer agree with your intent.

One example is with building websites. to create something very custom and with
a lot of creative independence, maybe you should bring the computer with you
through coding things from scratch, building up consensus over time. But when
you need to build something with commonly used patterns that might restrict you
a bit more (in a good way), you should find libraries and frameworks that are
tried and tested, to quickly get your computer up to speed and give it strong
opinions on what's possible, which you can then take advantage of.

I should also mention that not even all computers share the same framework, so
you should be thinking about this in a multi-platform way, too. testing your
code on different web browsers, operating systems, and hardware, will make it
painfully clear that consensus with computers isn't a 1:1 relationship.

## 29

But it doesn't stop there. frequently with code you'll find yourself
collaborating with other people. And while code is a great way to build
consensus with computers, it won't always be a good way to get on the same page
with other people. So you should also think about this layer to things.

## 30

the first thing to think about in this respect is documentation. writing is one
of the most important skills for developers, and when working in a team you'll
probably spend more time on calls and writing words for other people than you
will be writing code.

An example would be the millzbot repository on github.

But also things like code reviews, pull request messages, technical diagrams
and inline comments are things you should expect to do a lot of when
collaborating.

## 31

tools are another thing that will help you and others get on the same page. In
the same way that more opinionated code can help you cover more ground, shared
tools can do the same for a collaborative team.

code formatters can ensure everyone is working in the exact same code style,
linters can spot problems with code quality using shared rules, and testing
suites can give everyone confidence in their (asnd each other's) code. these
tools are massively valuable, and while you might not need them all the time,
it's good to build an understanding of when they can be valuable to you.

## 32

And finally you also have to build consensus with the people using your code.
they might be viewers of an art installation, other developers using a service
that you've made, or visitors to a website. All these types of people need to
appreciate what your code is doing, and what it wants them to do.

## 33

and here design, and all the research that goes into it, becomes very
important. making sure that your end product communicated intent in an
understandable way (where necessary) is paramount. building up a good
foundation of design can really set you apart as a developer and help you
impact the people using your code, while also being another way to flex your
creative muscles.

## 34

So consensus is a very important aspect when coding, in many ways. I hope it's
a useful mental model to base your coding practice in.