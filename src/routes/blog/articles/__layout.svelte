<script>
// @ts-nocheck
    import { articles } from '$lib/data/articles.json'
    import { page } from '$app/stores'

    import BlogTitle from '$lib/components/BlogTitle.svelte'

    let article

    $: updatePage($page.url.pathname)

    function updatePage(currentPage){
        let currentArticle = currentPage.substring(currentPage.lastIndexOf('/') + 1)
        if(currentArticle !== 'articles'){
            article = articles[currentArticle]
        } else{
            article = false
        }
    }
</script>
<svelte:head>
    <title>{article.title}</title>
</svelte:head>
<!-- Check if the page is not the index at /blog/articles, if it is it doesn't load it to avoid errors in the console and 301 redirects to /blog -->
<div class="back"><a href="/blog">&#8592; Indietro</a></div>
<div class="blogTitle">
    <BlogTitle article={article}/>
</div>

<div class="blog-content">
    <slot />
</div>

<style>
    div{
        padding: 2rem 3rem;
    }
    .blogTitle{
        margin: 0 auto;
        max-width: 1200px;
        background-color: #222;
    }
    .blog-content{
        margin: 0 auto;
        max-width: 1200px;
        line-height: 1.5rem;
    }
    .back{
        font-size: .8rem;
        font-weight: 100;
    }

    :global(.blog-style .img-bg){
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
    margin: 3rem 0;
    }

  :global(.blog-style  p){
    padding: 1rem;
  }


      @media screen and (max-width:600px){
        div{
        padding: 2rem 1rem;
    }
    }
</style>
