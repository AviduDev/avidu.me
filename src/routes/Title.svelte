<script>
	export let BigTitle;
	export let SmallTitle;
</script>

<div class="titleContainer">
	<h2 class="sectionTitle">
		<span class="big">{BigTitle}</span>
		<span class="small lg-p">{SmallTitle}</span>
	</h2>
</div>

<style>
	h2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}
	.big {
		text-transform: uppercase;
	}
	.titleContainer {
		border-bottom: solid 1px black;
	}
</style>
