<script>
    import { articles } from '$lib/data/articles.json';
    import Card from '$lib/components/BlogCard.svelte'
</script>
<h1>BLOG</h1>
<div>
    {#each Object.values(articles) as article}
        <!-- <a href={`/blog/articles/${article.link}`}>
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
            {#if article.topImage}
                <img src={`${article.topImage}`} alt="">
            {/if}
        </a> -->
        <Card content={article}/>
    {/each}
</div>

<style>
    div{
        background-image: url;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: .75rem;
    }
</style>