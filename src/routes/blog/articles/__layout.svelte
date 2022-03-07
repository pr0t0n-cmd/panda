<script>
// @ts-nocheck
    import { articles } from '$lib/data/articles.json'
    import { page } from '$app/stores'

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
<!-- Check if the page is not the inde at /blog/articles, if it is it doesn't load it to avoid errors in the console and 301 redirects to /blog -->
{#if article !== false}
    <h1>{article.title}</h1>
{/if}
<slot />
