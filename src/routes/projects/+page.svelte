<script>
	/** @type {import('./$types').PageData} */

	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let data;
	let { projects } = data;
</script>

<div class="container">
	<h1>works</h1>
	<div class="lg-p">Here are some of my selected works. Which includes personal and client works</div>

	{#each projects as { name, year, type, liveUrl, image, publishedAt, slug }}
		<ProjectCard {name} {year} {type} {liveUrl} {image} {publishedAt} {slug} />
	{/each}
</div>