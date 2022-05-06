<script>
    import { articles } from '$lib/data/articles.json';
    import { category } from '$lib/data/categories';
    import BlogCard from '$lib/components/BlogCard.svelte';

    let array = [];
    for (const key in category) {
    array.push(key)
    }
</script>

<div class="header-content">
    <div class="dynamic-text-container">
        <h1>
        <span class="txt-type">BLOG</span>
        </h1>
    </div>
</div>

<div id="blog">
    {#each array as element}
        <h2 class="category">{element}</h2>
            {#each Object.values(articles) as article}
                {#if element === article.category}
                    <BlogCard author="" content={article}/>
                {/if}
            {/each}
    {/each}
</div>

<style>
     .dynamic-text-container{
        display: flex;
        position: relative;
        width: 100%;
        height: 120px;
        justify-content: center;
    }

    .header-content{
        z-index: 1;
          margin-top: 80px;
    }
     

    h1 .txt-type{
    font-family: "NNRektoratSTD-HeavyRe";
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    text-shadow: 0px 0px 6px #fff;
    margin-top: 50px;
    font-weight: 700;
}
    

    .category{
        flex: 100%;
        text-transform: uppercase;
        color: #2be40f ;
        padding: 1rem;
        border-bottom: 1px solid #2be40f;
        font-weight: 100;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
    #blog{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
       
    }


       @media screen and (max-width:800px){
         h1 .txt-type{
            font-size: 3rem;
            letter-spacing: 2.5px;
        }
    }
   
     @media screen and (max-width:600px){
          #blog{
            justify-content: center;
        }
        .category{
            margin-bottom: 2rem;
        }
        
         h1 .txt-type{
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
        .dynamic-text-container{
            height: 50px;
        }
    }
     @media (max-width:450px){
        
        .header-content{
            padding: 5%;
        }
        h1 .txt-type{
            font-size: 2rem;
            letter-spacing: 1px;
        }
    }
    @media (max-width:350px){
      
        h1 .txt-type{
            font-size: 1.7rem;
            letter-spacing: 1px;
        }
    }


</style>
