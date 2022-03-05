<script>
    import { articles } from '$lib/data/articles.json';
    import Card from '$lib/components/BlogCard.svelte'
</script>

<h1>BLOG</h1>
<div>
    {#each Object.values(articles) as article}
        <Card content={article}/>
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
</style>
