<script>
	/** @type {import('./$types').PageData} */

	import Title from '../../Title.svelte';

	export let data;
	let { relatedService } = data;
</script>

<div class="container">
	<h1>{relatedService.name}</h1>
	<p class="lg-p">{relatedService.biggerDescription}</p>
	<div class="details">
		<h3>consider</h3>
		<p>{relatedService.consider}</p>
	</div>

	<div class="details">
		<h3>Ideal For</h3>
		<ul>
			{#each relatedService.idealFor as ideal}
				<li>{ideal}</li>
			{/each}
		</ul>
	</div>

	<Title BigTitle="why business website" SmallTitle="features" />
	<ul>
		{#each relatedService.feature as features}
			<li class="feature">{@html features.html}</li>
		{/each}
	</ul>

	<!-- quote -->
	{#each relatedService.quotes as { content, name }}
		<blockquote>
			{@html content.html}
			<footer>- {name}</footer>
		</blockquote>
	{/each}

	<!-- 

<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
  <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>

	 -->
</div>

<style>
	.details {
		border-top: 1px solid black;
	}

	blockquote {
		background-color: #c7c7c7;
		padding: 1rem;
	}
</style>
