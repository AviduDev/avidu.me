<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let { project } = data;
</script>

<div class="container">
	<img src={project.image.url} alt={project.name} />
	<h1>{project.name}</h1>

	<p class="lg-p">{project.description}</p>

	<ul>
		<li>
			<span>Year</span>
			<span>{project.year}</span>
		</li>

		<li>
			<span>Company</span>
			<span>{project.company}</span>
		</li>

		<li>
			<span>Type</span>
			<span>{project.type}</span>
		</li>
		<li>
			<span>Technologies</span>
			{#each project.technology as technologies}
				<span>{technologies}, </span>
			{/each}
		</li>

		<li>
			<span>Live URL</span>
			<a href={project.liveUrl} target="_blank">Live</a>
		</li>
	</ul>

    <div>
        {#each project.images as img}
            <img class="images" src={img.url} alt={project.name}>
        {/each}
    </div>
</div>

<style>
	li {
		border-bottom: 1px solid black;
	}

    .images {
        padding: 0.25rem;
    }
</style>
