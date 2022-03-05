<script>
    import { articles } from '$lib/data/articles.json'
    import {getContext} from 'svelte';
    const currentPage = getContext('currentPage');
    const currentArticle = currentPage.substring(currentPage.lastIndexOf('/') + 1)
    const article = articles[currentArticle]
</script>
<h2>{article.title}</h2>
<h1>stocaz</h1>
<p>Blockchain</p>