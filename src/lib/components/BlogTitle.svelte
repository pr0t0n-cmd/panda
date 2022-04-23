<script>
    export let article
</script>
{#if article !== false}
    <h1 class="title">{article.title}</h1>
    <h2 class="title">{article.description}</h2>
    <p class="title">{article.category}</p>
{/if}

<style>
    .title{
        color: #2be40f;
        text-shadow: 0px 0px 10px #93ff0050;
    }
    h1 {
        margin: 1rem 0;
    }

    h2{
        line-height: 1.6rem;
    }
    p{
        margin: 1.2rem 0 0 0;
        font-size: 14px;
    }
</style>

