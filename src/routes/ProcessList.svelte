<script>
    export let number;
    export let title;
    export let description;
</script>

<div class="wrapper">
    <h3 class="titleWrapper">
        <span class="num">{number}</span>
        <span class="title">{title}</span>
    </h3>
    <p class="desc">{description}</p>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        border-top: solid 1px black;
    }

    .titleWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title {
        text-transform: uppercase;
    }

    .desc {
        max-width: 300px;
        text-align: justify;
        align-self: flex-end;
    }
</style>