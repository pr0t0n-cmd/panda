<script>
    import { articles } from '$lib/data/articles.json';
</script>
<h1>BLOG</h1>
<div>
    {#each Object.values(articles) as article}
        <a href={`/blog/articles/${article.link}`}>
            <h2>{article.title}</h2>
            <h3>{article.description}</h3>
        </a>
    {/each}
</div>

<style>
    div{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;
        gap: .75rem;
    }
    h1{
        margin-bottom: 2rem;
    }
    a{
        padding: 2rem;
        width: 320px;
        height: 400px;
        box-shadow: 2px 2px 7px #00000015;
    }
</style>