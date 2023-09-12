<script>
    export let title;
    export let description;
</script>

<div class="wrapper">
    <h3 class="title">{title}</h3>
    <p class="desc">{description}</p>
</div>

<style>
    .wrapper {
        border-top: 1px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .desc {
        text-align: justify;
    }

    @media (max-width: 576px) {
        .wrapper {
            flex-direction: column;
        }

        .desc {
            max-width: 300px;
            align-self: flex-end;
        }
    }    
</style>