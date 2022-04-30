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
<div class="back"><a href="/blog/section/{article.category}">&#8592; Indietro</a></div>
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
    background: linear-gradient(to top right, #333, #000);
    border-radius: 12px;
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

    a{
        padding: 20px;
        color: #fff;
    }

    :global(.blog-style h3) {
    color: rgba(101, 112, 139, 0.7);
    /* padding-top: 2%; */
    /* padding-bottom: 1%; */
    letter-spacing: 0.2px;
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
    padding: 1rem 0;
    font-size: 20px;
    }

    :global(.blog-style a){
    position: relative;
    font-weight: 500;
    color: #2be40f;
    text-decoration: none;
    display: inline-block;
    }

    :global(.blog-style a::before){
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -0.5px;
    left: 0;
    background-color: #2be40f;
    visibility: hidden;
    transition: all 0.3s ease-in;
    }

    :global(.blog-style a:hover:before){
    visibility: visible;
    width: 100%;
    }

    /* from css-tricks https://css-tricks.com/examples/Blockquotes/ */

    :global(.blog-style blockquote) {
    font: 14px/20px italic Times, serif;
    padding: 8px;
    background-color: #befabc;
    border-top: 1px solid #90e189;
    border-bottom: 1px solid #89e189;
    background-image: url(images/openquote1.gif);
    background-position: top left;
    background-repeat: no-repeat;
    }

    :global(.blog-style blockquote span) {
    display: block;
    background-image: url(images/closequote1.gif);
    background-repeat: no-repeat;
    background-position: bottom right;
    }

    :global(.blog-style blockquote p) {
    color: #333;
    }

    /* caption for things in the img-wrapper */
    :global(.blog-styleb .caption) {
    display: block;
    width: 100%;
    text-align: center;
    /* this font size doesn't work have to set locally */
    /* font-size:0.5em;  */
    }

    /* code styling */

    :global(.blog-style pre) {
    background: black;
    color: #2be40f;
    padding: 20px;
    }



    @media screen and (max-width:600px){
    div{
    padding: 2rem 1rem;
    }
      :global(.blog-style  p){
    font-size: 16px;
    }
    }
</style>
