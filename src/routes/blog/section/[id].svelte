<script>
  // populated with data from the endpoint
  import { articles } from '$lib/data/articles.json';
  import BlogCard from '$lib/components/BlogCard.svelte';
  export let item;
</script>

 <div class="header-content">
    <div class="dynamic-text-container">
        <h1><span class="txt-type">{item.title}</span></h1>
    </div>
</div>

<div id="blog">
 
            {#each Object.values(articles) as article}
                {#if article.category === item.title}
                    <BlogCard author="" content={article}/>
                {/if}
            {/each}
</div>

<style>
    

    .dynamic-text-container{
        display: flex;
        position: relative;
        width: 100%;
        height: 200px;
        justify-content: center;
    }

    .header-content{
        z-index: 1;
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
        .header-content{
            margin-top: 100px;
        }
    }
   
     @media screen and (max-width:600px){
          #blog{
            justify-content: center;
        }
        
         h1 .txt-type{
            font-size: 2.5rem;
            letter-spacing: 2px;
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