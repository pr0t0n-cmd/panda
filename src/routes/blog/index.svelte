<script>
    import { articles } from '$lib/data/articles.json';
    import { categories } from '$lib/data/categories.json';
    import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<div>
    {#each categories as category}
        <h2>{category}</h2>
            {#each Object.values(articles) as article}
                {#if category === article.category}
                    <BlogCard content={article}/>
                {/if}
            {/each}
    {/each}
</div>

<style>
    h2{
        flex: 100%;
        text-transform: uppercase;
        color: #333 ;
        padding: 1rem;
        border-bottom: 1px solid #ccc;
        font-weight: 100;
    }
    div{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: .75rem;
        padding: 1rem 1.75rem;
    }
</style>
