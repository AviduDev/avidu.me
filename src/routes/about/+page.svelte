<script>
	/** @type {import('./$types').PageData} */

	import Title from '../Title.svelte';

	export let data;
	let { bios, educations, works, technologies } = data;
</script>

<div class="container">
	<h1>about me</h1>
	<p class="lg-p">
		Hello there, I'm Avidu – your dedicated web developer on a journey to turn ideas into digital
		realities. From a young age, my fascination with technology and design led me to the world of
		web development, where I found my passion and purpose.
		<br />
		<br />
		With every project I undertake, I immerse myself in the challenge of creating functional and aesthetically
		pleasing websites. I believe that a well-crafted website has the power to make a lasting impression,
		so I meticulously blend coding expertise with creative flair to build seamless user experiences.
	</p>
	<!-- bio -->
	<div>
		<Title BigTitle="facts about" SmallTitle="me" />
		<ul>
			{#each bios as { bioName, bioDes }}
				<li>
					<span class="left">{bioName}</span>
					<span class="right">{bioDes}</span>
				</li>
			{/each}
		</ul>

		<a
			href="https://drive.google.com/file/d/18rGpXlmkl58ljZyek1CdEIyzg4Koxd3o/view?usp=sharing"
			target="_blank">download my resume</a
		>
	</div>

	<!-- education -->
	<div>
		<Title BigTitle="what i learned" SmallTitle="education" />
		<ul>
			{#each educations as { certificate, institution, year }}
				<li>
					<span class="left">
						{certificate}
						<br />
						{institution}
					</span>
					<span class="right">{year}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- work -->
	<div>
		<Title BigTitle="Whre i worked" SmallTitle="work" />
		<ul>
			{#each works as { type, company, year }}
				<li>
					<span class="left">
						{type}
						<br />
						{company}
					</span>
					<span class="right">{year}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- technologies -->
	<div>
		<Title BigTitle="What I know" SmallTitle="technologies" />
		<ul>
			{#each technologies as { field, techs }}
				<li>
					<span class="left">
						{field}
					</span>
					{#each techs as tech }
						<span>{tech}</span>
					{/each}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	li {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid black;
	}
</style>
