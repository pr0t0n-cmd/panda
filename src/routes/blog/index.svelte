<script>
    import { articles } from '$lib/data/articles.json';
    import { categories } from '$lib/data/categories.json';
    import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<div id="blog">
    {#each categories as category}
        <h2 class="category">{category}</h2>
            {#each Object.values(articles) as article}
                {#if category === article.category}
                    <BlogCard content={article}/>
                {/if}
            {/each}
    {/each}
</div>

<style>
    

    .category{
        flex: 100%;
        text-transform: uppercase;
        color: #333 ;
        padding: 1rem;
        border-bottom: 1px solid #ccc;
        font-weight: 100;
        margin-top: 3rem;
    }
    #blog{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: .75rem;
        padding: 1rem 1.75rem;
    }

    @media screen and (max-width:600px){
        #blog{
            justify-content: center;
        }
    }

</style>
