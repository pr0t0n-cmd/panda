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
<div class="blogTitle">
    <BlogTitle article={article}/>
</div>
<div>
    <slot />
</div>

<style>
    div{
        padding: 2rem 3rem;
    }
    .blogTitle{
        background-color: #222;
    }
</style>
