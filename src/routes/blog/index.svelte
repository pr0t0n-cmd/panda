<script>
    import { articles } from '$lib/data/articles.json';
    import { categories, category } from '$lib/data/categories.json';
    import BlogCard from '$lib/components/BlogCard.svelte';

    let array = [];
    for (const key in category) {
    array.push(key)
    }
</script>

<div id="blog">
    {#each array as element}
        <h2 class="category">{element}</h2>
            {#each Object.values(articles) as article}
                {#if element === article.category}
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
       
    }

    @media screen and (max-width:600px){
        #blog{
            justify-content: center;
        }
    }

</style>
