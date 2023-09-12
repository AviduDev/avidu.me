<script>
	import ProcessList from './ProcessList.svelte';
	import SimpleList from './SimpleList.svelte';
	import Title from './Title.svelte';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	import Accordian from '$lib/components/Accordian.svelte';

	export let data;
	let { projects, questionTypes } = data;
</script>

<div class="container">
	<!-- hero -->
	<div class="hero">
		<h1>Better websites for your next big idea</h1>
		<img
			src="https://res.cloudinary.com/avidu/image/upload/v1694105756/Avidu-me/Hero_GIF_ug3xmy.gif"
			alt=""
		/>
	</div>

	<!-- introduction -->
	<div class="intro">
		<Title BigTitle="Front end Developer and Website Designer" SmallTitle="Introduction" />
		<figure>
			<img
				src="https://res.cloudinary.com/avidu/image/upload/v1694110527/ezgif.com-gif-maker_dqfffh.webp"
				alt="Image of a Avidu"
			/>
			Image of avidu
		</figure>
		<p>
			As a front-end developer, I specialize in bringing business ideas to life with some artistic
			uniqueness. I can help you / your business to stand out from the competition by great user
			experiences, meantime serving the main purpose of selling your story.
		</p>
	</div>

	<!-- what you get -->
	<div class="whatUget">
		<Title BigTitle="what you get" SmallTitle="services" />
		<p class="lg-p">
			As a front-end developer, I specialize in bringing business ideas to life with some artistic
			uniqueness.
			<br />
			<br />
			I can help you / your business to stand out from the competition by great user experiences, meantime
			serving the main purpose of selling your story.
		</p>
		<br />
		<p class="lg-p">
			There are few types of websites needs to be conseder before deciding, if it match with your
			needs.
		</p>

		<a href="/website-creation">Learn more</a>
	</div>

	<!-- why me -->
	<div class="whyMe">
		<Title BigTitle="why me" SmallTitle="point of difference" />
		<p class="lg-p">
			Setting New Standards in Website Design Services in Sri Lanka. Our distinctive edge lies in
			our unwavering commitment to combining local cultural nuances with global design trends.
			<br />
			<br />
			By infusing creativity with technical prowess, we create websites that not only reflect the vibrant
			essence of Sri Lanka but also offer seamless functionality and aesthetic finesse that resonates
			on an international scale.
		</p>

		<SimpleList
			title="better websites"
			description="The importance of a fast website cannot be overstated in today's digital landscape. It directly impacts user experience, search engine rankings, and overall business success. Here's why a fast website is crucial"
		/>

		<SimpleList
			title="cost effectiveness"
			description="The importance of a cost-effective website lies in its ability to provide value and achieve business goals without incurring unnecessary expenses. Here's why a cost-effective website is crucial"
		/>

		<SimpleList
			title="guidance"
			description="Remember, each website might have a unique layout and features, so take your time to explore and familiarize yourself with its structure. If you encounter any difficulties, many websites also provide a Help or Support section where you can find further assistance."
		/>
	</div>

	<!-- process -->
	<div class="process">
		<Title BigTitle="the.d5" SmallTitle="the process" />
		<p class="lg-p">
			Embark on a journey of digital transformation with our comprehensive web design process. From
			concept to launch, our expert team ensures a seamless and captivating online experience for
			your audience.
		</p>

		<ProcessList
			number="01."
			title="define"
			description="The research process for understanding business goals and defining the target audience is a crucial step in effective web design. It lays the foundation for creating a website that aligns with the business's objectives and caters to the needs of its intended audience. Here's the process."
		/>

		<ProcessList
			number="02."
			title="describe"
			description="The content creation process in web design is a structured approach to developing and delivering high-quality, relevant, and engaging content for a website. It involves understanding the target audience, aligning content with business goals, and optimizing it for both user experience and search engines. Here's how the content creation process unfolds"
		/>

		<ProcessList
			number="03."
			title="design"
			description="The design process in website development is a systematic approach to creating visually appealing, user-friendly, and effective websites. It involves translating the website's objectives, content, and user needs into an engaging and functional design. Here's how the design process unfolds"
		/>

		<ProcessList
			number="04."
			title="develop"
			description="The development process in website development is a systematic approach to building a functional and interactive website based on the design and specifications. It involves translating the design's visual elements and user interactions into working code. Here's how the development process unfolds"
		/>

		<ProcessList
			number="05."
			title="deploy"
			description="The launch process in website development involves the final steps of preparing and releasing the website to the public. It's a critical phase that ensures a smooth transition from development to live deployment. Here's how the launch process unfolds"
		/>
	</div>

	<!-- work -->
	<div class="work">
		<Title BigTitle="things i did" SmallTitle="work" />
		<p class="lg-p">
			Immerse yourself in the art of digital craftsmanship as we present a gallery of stunning
			websites that blend aesthetics with functionality. From sleek corporate platforms to engaging
			e-commerce sites, discover how we translate ideas into pixel-perfect reality. Join us on a
			visual journey through creativity, user-centric design, and seamless user experiences.
		</p>
	</div>
	{#each projects as { name, year, type, liveUrl, image, publishedAt, slug }}
		<ProjectCard {name} {year} {type} {liveUrl} {image} {publishedAt} {slug} />
	{/each}

	<!-- accordion -->
	<section>
		<Title BigTitle = 'What they ask?' SmallTitle = 'FAQs' />
	{#each questionTypes as { questions, typeName }}
		{#each questions as { answer, question }}
			<Accordian {answer} {question} {typeName} />
		{/each}
	{/each}
</section>
	<!-- *************-------------testing-------------************* -->
</div>
