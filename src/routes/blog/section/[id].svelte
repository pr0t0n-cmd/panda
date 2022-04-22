<script>
  // populated with data from the endpoint
  import { articles } from '$lib/data/articles.json';
  import BlogCard from '$lib/components/BlogCard.svelte';
  export let item;
</script>

<div id="blog">
  <h2 class="category">{item.title}</h2>
            {#each Object.values(articles) as article}
                {#if article.category === item.title}
                    <BlogCard author="" content={article}/>
                {/if}
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