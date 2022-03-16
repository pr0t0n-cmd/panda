<script>
    export let article
</script>
{#if article !== false}
    <p class="title">tag: {article.category}</p>
    <h1 class="title">{article.title}</h1>
    <h2 class="title">{article.description}</h2>
{/if}

<style>
    .title{
        color: #2be40f;
        text-shadow: 0px 0px 10px #93ff0050;
    }
</style>

