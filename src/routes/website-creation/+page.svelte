<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	<h1>Website Creation</h1>
	<p class="lg-p">
		Selecting the right website type is a strategic decision that can significantly
		impact the success of your business or personal project. It involves considering your goals,
		audience, budget, and long-term plans to ensure your website effectively serves its purpose and
		contributes to your overall objectives.
	</p>
	{#each data.relatedServices as relatedService}
		<h2>{relatedService.name}</h2>
		<p>{relatedService.description}</p>
		<a href={`/website-creation/${relatedService.slug}`}> learn more </a>
	{/each}
	
</div>
