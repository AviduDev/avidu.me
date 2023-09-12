<script>
    export let name;
    export let year;
    export let type;
    export let liveUrl;
    export let image;
    export let publishedAt;
    export let slug;
    // export let image = ''
</script>

<div class="wrapper">
    <div class="details">
        <h3>{name}</h3>
        <p>{year}</p>
        <p>{type}</p>
        <p>{new Date(publishedAt).getFullYear()}</p>
        <a href={liveUrl}>Live</a>
        <a href={`/projects/${slug}`}>Case Study</a>
    </div>
    <div class="image">
        <img src={image.url} alt={name}>
    </div>
</div>

<style>
    .wrapper {
        border-top: 1px solid black;
    }
</style>