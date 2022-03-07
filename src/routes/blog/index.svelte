<script>
    import { articles } from '$lib/data/articles.json';
    import { categories } from '$lib/data/categories.json';
    import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<h1>BLOG</h1>
<!-- <div>
    {#each Object.values(articles) as article}
        <BlogCard content={article}/>
    {/each}
</div> -->
<div>
    {#each categories as category}
        <h1>{category}</h1>
            {#each Object.values(articles) as article}
                {#if category === article.category}
                    <BlogCard content={article}/>
                {/if}
            {/each}
    {/each}
</div>

<style>
    h1{
        flex: 100%;
    }
    div{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: .75rem;
    }
</style>
