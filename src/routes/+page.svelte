<script>
	import ProcessList from './ProcessList.svelte';
	import SimpleList from './SimpleList.svelte';
	import Title from './Title.svelte';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
	import Accordian from '$lib/components/Accordian.svelte';

	export let data;
	let { projects, questionTypes, relatedServices } = data;
</script>

<div class="container">
	<!-- hero -->

	<div class="hero">
		<h1>Better websites for your next big idea</h1>
		<!-- <img
			src="https://res.cloudinary.com/avidu/image/upload/v1694105756/Avidu-me/Hero_GIF_ug3xmy.gif"
			alt=""
		/> -->
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

		<p>-ChatGPT</p>

		<p class="lg-p">
			Anyway, I can build websites that are fast, SEO friendly, and looks unique(I think so) that
			cost only $0*. With these websites, you can sell or present your holy idea to your target
			audience.
		</p>
	</div>

	<!-- what you get -->
	<div>
		<Title BigTitle="what you get" SmallTitle="services" />
		<p class="lg-p">
			There are few types of websites needs to be consider before deciding, if it match with your
			needs.
		</p>

		<ul>
			{#each relatedServices as { name, slug }}
				<li>
					<h3>
						<a href={`/website-creation/${slug}`}> {name}</a>
					</h3>
				</li>
			{/each}
		</ul>
	</div>

	<!-- why me -->
	<div class="whyMe">
		<Title BigTitle="Not just another website" SmallTitle="why me" />
		<p class="lg-p">
			If you needs a website, but not <span class="udl">just another website</span>? - In a world of
			most the sites look and feels the same, there are less chance to stand out from the
			competition.
			<br />
			<br />
			This is where custom design comes, each website I create based on your target audience not templates.
			So that your customer gets more tailored experience and there are more and more chance to engage
			with your brand.
		</p>

		<SimpleList
			title="Fast websites"
			description="The importance of a fast website cannot be overstated in today's digital landscape. It directly impacts user experience, search engine rankings, and overall business success."
		/>

		<SimpleList
			title="cost effectiveness"
			description="Websites I build based on modern approaches like 'Jamstack'. Its purpose is to create fast and secure sites, other than it provides ways to get started with 0 cost. So you can invest all into your business's success.
			"
		/>

		<SimpleList
			title="ease of change"
			description="To change a text on your website - you don't have to go to the site and open a website builder. Instead, we can use a browser-based dashboard to manage not just the text but all of your content on the website.
			"
		/>
	</div>

	<!-- process -->
	<div class="process">
		<Title BigTitle="the.d5" SmallTitle="the process" />
		<p class="lg-p">
			In the website development universe, all design processes have the same meanings(in most
			cases) but with different names. Same as mine. The main purpose of this process is to get to
			know you and your target audience better and have an organized workflow.
		</p>

		<ProcessList
			number="01."
			title="define"
			description="The research process for understanding business goals and defining the target audience is a crucial step in effective web design. It lays the foundation for creating a website that aligns with the business's objectives and caters to the needs of its intended audience."
		/>

		<ProcessList
			number="02."
			title="describe"
			description="The content creation process in web design is a structured approach to developing and delivering high-quality, relevant, and engaging content for a website. It involves understanding the target audience, aligning content with business goals, and optimizing it for both user experience and search engines."
		/>

		<ProcessList
			number="03."
			title="design"
			description="The design process in website development is a systematic approach to creating visually appealing, user-friendly, and effective websites. It involves translating the website's objectives, content, and user needs into an engaging and functional design."
		/>

		<ProcessList
			number="04."
			title="develop"
			description="The development process in website development is a systematic approach to building a functional and interactive website based on the design and specifications. It involves translating the design's visual elements and user interactions into working code."
		/>

		<ProcessList
			number="05."
			title="deploy"
			description="The launch process in website development involves the final steps of preparing and releasing the website to the public. It's a critical phase that ensures a smooth transition from development to live deployment."
		/>
	</div>

	<!-- work -->
	<div class="work">
		<Title BigTitle="things i did" SmallTitle="works" />
		<p class="lg-p">
			Here's a list of website design, development, and other design-related works that have been
			done for clients and myself. You can see more of my work by visiting my <a href="#footer"
				>social media pages</a
			>.
		</p>
	</div>
	{#each projects as { name, year, type, liveUrl, image, publishedAt, slug }}
		<ProjectCard {name} {year} {type} {liveUrl} {image} {publishedAt} {slug} />
	{/each}

	<!-- accordion -->
	<section>
		<Title BigTitle="What they ask?" SmallTitle="FAQs" />
		{#each questionTypes as { questions, typeName }}
			{#each questions as { answer, question }}
				<Accordian {answer} {question} {typeName} />
			{/each}
		{/each}
	</section>
	<!-- *************-------------testing-------------************* -->
</div>
